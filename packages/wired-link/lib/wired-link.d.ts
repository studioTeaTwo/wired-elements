import { TemplateResult, CSSResultArray } from 'lit-element';
import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
export declare class WiredLink extends WiredBase {
    elevation: number;
    href?: string;
    target?: string;
    private anchor?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    focus(): void;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
}
