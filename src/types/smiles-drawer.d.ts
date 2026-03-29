declare module "smiles-drawer" {
  export class Drawer {
    constructor(options?: Record<string, unknown>);
    draw(tree: unknown, canvas: HTMLCanvasElement, theme: string): void;
  }
  export function parse(
    smiles: string,
    callback: (tree: unknown) => void,
    errorCallback?: (err: unknown) => void
  ): void;
  export default { Drawer, parse };
}
