interface VergleichsTabelleProps {
  headers: string[];
  rows: string[][];
}

export function VergleichsTabelle({ headers, rows }: VergleichsTabelleProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--text-primary)] text-[var(--card)]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold first:rounded-tl-lg last:rounded-tr-lg"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-[var(--border)] ${
                ri % 2 === 0 ? "bg-[var(--card)]" : "bg-[var(--border)]/30"
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 ${ci === 0 ? "font-medium text-[var(--text-primary)]" : "text-[var(--text-primary)]"}`}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
