var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, property, css, html } from 'lit-element';
import { WiredBase, BaseCSS } from 'wired-lib/lib/wired-base';
import { line } from 'wired-lib';
let WiredDivider = class WiredDivider extends WiredBase {
    constructor() {
        super(...arguments);
        this.elevation = 1;
    }
    static get styles() {
        return [
            BaseCSS,
            css `
        :host {
          display: block;
          position: relative;
        }
      `
        ];
    }
    render() {
        return html `<svg></svg>`;
    }
    canvasSize() {
        const size = this.getBoundingClientRect();
        const elev = Math.min(Math.max(1, this.elevation), 5);
        return [size.width, elev * 6];
    }
    draw(svg, size) {
        const elev = Math.min(Math.max(1, this.elevation), 5);
        for (let i = 0; i < elev; i++) {
            line(svg, 0, (i * 6) + 3, size[0], (i * 6) + 3);
        }
    }
};
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], WiredDivider.prototype, "elevation", void 0);
WiredDivider = __decorate([
    customElement('wired-divider')
], WiredDivider);
export { WiredDivider };
