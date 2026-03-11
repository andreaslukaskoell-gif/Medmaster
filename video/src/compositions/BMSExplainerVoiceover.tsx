import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandedBackground } from "../shared/BrandedBackground";
import { SafeArea } from "../shared/SafeArea";
import { BRAND, SUBJECT_COLORS } from "../shared/brand";

type SubtitleSegment = {
  text: string;
  startFrame: number;
  endFrame: number;
};

type ImageSlide = {
  url: string;
  startFrame: number;
  endFrame: number;
};

type BMSExplainerVoiceoverProps = {
  subject: string;
  hook: string;
  topicTitle: string;
  imageUrl: string;
  images?: ImageSlide[];
  subtitles: SubtitleSegment[];
  audioSrc: string;
};

export const BMSExplainerVoiceover: React.FC<BMSExplainerVoiceoverProps> = ({
  subject,
  hook,
  topicTitle,
  imageUrl,
  images,
  subtitles,
  audioSrc,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const color = SUBJECT_COLORS[subject] || BRAND.primary;

  // Hook fades out after ~3s, content fades in
  const hookOpacity = interpolate(frame, [0, 10, 70, 90], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const contentOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hookScale = spring({ frame, fps, config: { damping: 12 } });

  // Multi-image support with crossfade
  const slides: ImageSlide[] =
    images && images.length > 0
      ? images
      : [{ url: imageUrl, startFrame: 0, endFrame: durationInFrames }];

  const currentSlideIdx = slides.findIndex(
    (s, i) => frame >= s.startFrame && (i === slides.length - 1 || frame < slides[i + 1].startFrame)
  );
  const activeIdx = currentSlideIdx >= 0 ? currentSlideIdx : 0;

  // Ken Burns: slow zoom + slight pan per slide
  const getKenBurns = (slideIdx: number, slide: ImageSlide) => {
    const progress = interpolate(frame, [slide.startFrame, slide.endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    // Alternate zoom direction per slide
    const zoomIn = slideIdx % 2 === 0;
    const scale = zoomIn
      ? interpolate(progress, [0, 1], [1.0, 1.12])
      : interpolate(progress, [0, 1], [1.12, 1.0]);
    const tx =
      slideIdx % 3 === 0 ? progress * 3 : slideIdx % 3 === 1 ? -progress * 2 : progress * 1;
    return { transform: `scale(${scale}) translate(${tx}%, 0)` };
  };

  // Crossfade between slides (20 frames = 0.67s)
  const FADE = 20;
  const getSlideOpacity = (slide: ImageSlide, idx: number) => {
    if (idx < activeIdx) return 0;
    if (idx > activeIdx + 1) return 0;
    if (idx === activeIdx) {
      const nextSlide = slides[idx + 1];
      if (!nextSlide) return 1;
      return interpolate(frame, [nextSlide.startFrame - FADE, nextSlide.startFrame], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    // idx === activeIdx + 1 (incoming)
    return interpolate(frame, [slide.startFrame - FADE, slide.startFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  };

  // Find current subtitle
  const currentSub = subtitles.find((s) => frame >= s.startFrame && frame <= s.endFrame);

  return (
    <AbsoluteFill>
      <BrandedBackground>
        <Audio src={staticFile(audioSrc)} volume={1} />

        {/* Hook overlay (first ~3s) */}
        <SafeArea
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            opacity: hookOpacity,
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: BRAND.accent,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            MedAT BMS
          </div>
          <div
            style={{
              transform: `scale(${hookScale})`,
              fontSize: 46,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.3,
              textShadow: "0 3px 12px rgba(0,0,0,0.5)",
              padding: "0 24px",
            }}
          >
            {hook}
          </div>
          <div
            style={{
              width: 80,
              height: 4,
              backgroundColor: color,
              borderRadius: 2,
              opacity: interpolate(frame, [20, 35], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          />
        </SafeArea>

        {/* Content: badge + title + image + subtitles below */}
        <SafeArea
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            opacity: contentOpacity,
          }}
        >
          {/* Subject badge */}
          <div
            style={{
              padding: "6px 20px",
              background: color,
              borderRadius: 20,
              fontSize: 22,
              fontWeight: 700,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {subject}
          </div>

          {/* Topic title */}
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              marginTop: 4,
              marginBottom: 8,
            }}
          >
            {topicTitle}
          </div>

          {/* Image area with Ken Burns + crossfade */}
          <div
            style={{
              position: "relative",
              width: "92%",
              borderRadius: 16,
              overflow: "hidden",
              border: `3px solid ${color}`,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              flexShrink: 0,
              aspectRatio: "16/10",
            }}
          >
            {slides.map((slide, idx) => {
              const opacity = getSlideOpacity(slide, idx);
              if (opacity <= 0) return null;
              return (
                <div
                  key={idx}
                  style={{
                    position: idx === 0 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity,
                  }}
                >
                  <Img
                    src={staticFile(slide.url)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      background: "white",
                      ...getKenBurns(idx, slide),
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Subtitle bar — BELOW the image */}
          <div
            style={{
              marginTop: 16,
              minHeight: 110,
              width: "92%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {currentSub && (
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.92)",
                  borderRadius: 14,
                  padding: "14px 22px",
                  borderLeft: `4px solid ${color}`,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.45,
                    textAlign: "center",
                    textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {currentSub.text}
                </div>
              </div>
            )}
          </div>
        </SafeArea>
      </BrandedBackground>
    </AbsoluteFill>
  );
};
