import { TemplateResult, LitElement, CSSResult, PropertyValues } from 'lit-element';
interface ComboValue {
    value: string;
    text: string;
}
export declare class WiredCombo extends LitElement {
    value?: ComboValue;
    selected?: string;
    disabled: boolean;
    private svg?;
    private card?;
    private cardShowing;
    private itemNodes;
    private lastSelectedItem?;
    static readonly styles: CSSResult;
    render(): TemplateResult;
    private refreshDisabledState;
    firstUpdated(): void;
    updated(changed: PropertyValues): void;
    private refreshSelection;
    private setCardShowing;
    private onItemClick;
    private fireSelected;
    private selectPrevious;
    private selectNext;
    private onCombo;
}
export {};
