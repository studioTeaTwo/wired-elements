import { TemplateResult, CSSResultArray } from 'lit-element';
import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point } from 'wired-lib';
interface ListboxValue {
    value: string;
    text: string;
}
export declare class WiredListbox extends WiredBase {
    value?: ListboxValue;
    selected?: string;
    horizontal: boolean;
    private itemNodes;
    private lastSelectedItem?;
    private itemClickHandler;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    firstUpdated(): void;
    updated(): void;
    private onItemClick;
    private refreshSelection;
    private fireSelected;
    private selectPrevious;
    private selectNext;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
}
export {};
