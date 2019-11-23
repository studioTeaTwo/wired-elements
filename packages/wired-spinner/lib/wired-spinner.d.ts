import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
import { Point } from 'wired-lib';
export declare class WiredSpinner extends WiredBase {
    spinning: boolean;
    duration: number;
    private knob?;
    private value;
    private timerstart;
    private frame;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private updateCursor;
    updated(): void;
    private startSpinner;
    private stopSpinner;
    private nextTick;
    private tick;
}
