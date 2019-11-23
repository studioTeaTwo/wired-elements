import { Point } from 'wired-lib';
import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
export declare class WiredSearchInput extends WiredBase {
    disabled: boolean;
    placeholder: string;
    autocomplete: string;
    autocorrect: string;
    autofocus: boolean;
    private textInput?;
    private pendingValue?;
    private searchIcon?;
    private closeIcon?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    readonly input: HTMLInputElement | undefined;
    value: string;
    wiredRender(force?: boolean): void;
    firstUpdated(): void;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private refreshIconState;
    private refire;
}
