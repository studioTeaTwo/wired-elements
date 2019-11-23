import { LitElement, TemplateResult, CSSResultArray } from 'lit-element';
export declare class WiredTabs extends LitElement {
    selected?: string;
    private slotElement?;
    private pages;
    private pageMap;
    private current?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    private mapPages;
    firstUpdated(): void;
    updated(): void;
    private getElement;
    private selectPrevious;
    private selectNext;
}
