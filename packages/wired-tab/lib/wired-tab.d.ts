import { TemplateResult, CSSResultArray } from 'lit-element';
import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
import 'wired-item/lib/wired-item.js';
export declare class WiredTab extends WiredBase {
    name: string;
    label: string;
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
    protected draw(svg: SVGSVGElement, s: Point): void;
}
