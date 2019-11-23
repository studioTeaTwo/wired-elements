import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
import { Point } from 'wired-lib';
export declare class WiredIconButton extends WiredBase {
    disabled: boolean;
    private button?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
}
