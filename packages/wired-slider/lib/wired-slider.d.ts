import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
import { Point } from 'wired-lib';
export declare class WiredSlider extends WiredBase {
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    private input?;
    private knob?;
    private canvasWidth;
    private pendingValue?;
    static readonly styles: CSSResultArray;
    value: number;
    firstUpdated(): void;
    render(): TemplateResult;
    focus(): void;
    private onInput;
    wiredRender(force?: boolean): void;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private updateThumbPosition;
}
