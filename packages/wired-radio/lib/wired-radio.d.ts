import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
import { Point } from 'wired-lib';
export declare class WiredRadio extends WiredBase {
    checked: boolean;
    disabled: boolean;
    name?: string;
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
