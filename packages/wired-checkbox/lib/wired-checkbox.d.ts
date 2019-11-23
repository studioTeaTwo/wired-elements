import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
import { TemplateResult, CSSResultArray } from 'lit-element';
export declare class WiredCheckbox extends WiredBase {
    checked: boolean;
    disabled: boolean;
    private focused;
    private input?;
    private svgCheck?;
    static readonly styles: CSSResultArray;
    focus(): void;
    wiredRender(force?: boolean): void;
    render(): TemplateResult;
    private onChange;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private refreshCheckVisibility;
}
