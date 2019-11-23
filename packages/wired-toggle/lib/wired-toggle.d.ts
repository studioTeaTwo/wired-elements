import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
import { Point } from 'wired-lib';
export declare class WiredToggle extends WiredBase {
    checked: boolean;
    disabled: boolean;
    private input?;
    private knob?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    focus(): void;
    wiredRender(force?: boolean): void;
    private onChange;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private refreshKnob;
}
