import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {

    static get properties() {
        return {
            bodyText: {},
            label: {},
            editing: {},
            value: {},
        };
    }
    constructor() {
        super();
        this.bodyText = 'Text in child expression';
        this.label = 'A label, for ARIA';
        this.editing = true;
        this.value = 7;
    }

    render() {
        return html `
<!-- Child expression-->
<div>Child expression: ${this.bodyText}</div>

<!-- attribute expression-->
<div aria-label=${this.label}>Attribute expression. </div>

<!-- Boolean attribute expression -->
<div>
    Boolean attribute expression.
    <input type="text" ?disabled=${!this.editing}>
</div>

<!-- property expression -->
<div>
    property expression.
    <input type="number" .valueAsNumber=${this.value}>
</div>

<!-- Event listener expression -->
<div>
    Event listener expression.
    <button @click="${this.clickHandler}">Click</button> 
</div>
        `;
    }
    clickHandler(e) {
        this.editing = !this.editing;
        console.log(e.target);
    }
}
customElements.define('my-element', MyElement);