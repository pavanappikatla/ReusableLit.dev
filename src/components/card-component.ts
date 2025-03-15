import {LitElement, html, css, CSSResultGroup} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@material/web/button/filled-button.js';

@customElement('card-component')
export class CardComponent extends LitElement {
    @property() name:string = '';
    @property() subtitle:string = '';
    @property() link1:string = '';
    @property() link2:string = '';
    @property() link1text:string = '';
    @property() link2text:string = '';
    @property() cardDescription:string = '';

    render() {
        return html`
        <head><link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        </head>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${this.subtitle}</h6>
                            <p class="card-text">${this.cardDescription}</p>
                            <a href="${this.link1}" class="card-link">${this.link1text}</a>
                            <a href="${this.link2}" class="card-link">${this.link2text}</a>
                        </div>
                    </div>
                   
                    `;
    }
}
