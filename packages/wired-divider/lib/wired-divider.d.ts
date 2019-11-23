import { TemplateResult, CSSResultArray } from 'lit-element';
import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
export declare class WiredDivider extends WiredBase {
    elevation: number;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
}
