import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
import { TemplateResult, CSSResultArray, PropertyValues } from 'lit-element';
export declare class WiredCard extends WiredBase {
    elevation: number;
    fill?: string;
    private resizeObserver?;
    private windowResizeHandler?;
    constructor();
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    updated(changed: PropertyValues): void;
    disconnectedCallback(): void;
    private attachResizeListener;
    private detachResizeListener;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
}
