import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
import { Point } from 'wired-lib';
export declare class WiredProgress extends WiredBase {
    value: number;
    min: number;
    max: number;
    percentage: boolean;
    private progBox?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    private getProgressLabel;
    wiredRender(force?: boolean): void;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private refreshProgressFill;
}
