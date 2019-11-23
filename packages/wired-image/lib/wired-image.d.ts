import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
import { TemplateResult, CSSResultArray } from 'lit-element';
export declare class WiredImage extends WiredBase {
    elevation: number;
    src: string;
    private resizeObserver?;
    private windowResizeHandler?;
    constructor();
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    updated(): void;
    disconnectedCallback(): void;
    private attachResizeListener;
    private detachResizeListener;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
}
