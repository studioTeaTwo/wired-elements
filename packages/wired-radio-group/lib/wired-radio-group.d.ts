import { LitElement, TemplateResult, CSSResult } from 'lit-element';
export declare class WiredRadioGroup extends LitElement {
    selected?: string;
    private radioNodes;
    private checkListener;
    static readonly styles: CSSResult;
    render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleChecked;
    slotChange(): void;
    firstUpdated(): void;
    updated(): void;
    private selectPrevious;
    private selectNext;
    private fireSelected;
}
