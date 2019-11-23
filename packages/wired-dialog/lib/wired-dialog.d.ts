import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import 'wired-card/lib/wired-card.js';
export declare class WiredDialog extends LitElement {
    elevation: number;
    open: boolean;
    private card?;
    static readonly styles: CSSResult;
    render(): TemplateResult;
    updated(): void;
}
