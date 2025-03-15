import { LitElement, html, css, PropertyValues} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Grid } from "gridjs";



@customElement('grid-component')
export class GridComponent extends LitElement {
    @property() columns: string = '';
    @property() data: string = '';


  render() {
    return html`
    <head>
    <link rel="stylesheet" href = "/node_modules/gridjs/dist/theme/mermaid.css"></head>
      <div id="grid" class="gridjs-container" style="width:50rem"></div>
    `;
  }

  protected updated(_changedProperties: PropertyValues): void {
    const columnArray = JSON.parse(this.columns);
    const dataArray = JSON.parse(this.data);
    const gridContainer = this.shadowRoot?.querySelector('#grid');

    if(gridContainer)
    new Grid({
        data: dataArray,
      }).updateConfig({
        columns: columnArray,
      }).render(gridContainer);
 
  }
  
}