import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
import { TemplateResult, CSSResultArray } from 'lit-element';
export declare class WiredButton extends WiredBase {
    elevation: number;
    disabled: boolean;
    private button?;
    private resizeObserver?;
    constructor();
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    focus(): void;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    updated(): void;
    disconnectedCallback(): void;
    private attachResizeListener;
    private detachResizeListener;
}
