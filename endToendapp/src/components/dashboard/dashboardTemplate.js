import { html } from "../../../node_modules/lit-html/lit-html.js";
import { shoeTemplate } from "../shared/shoeTempalte.js";

export const dashboardTemplate = (shoes) => html` 
<section id="dashboard">
  <h2>Collectibles</h2>
  ${shoes.length>0
  ? html` <ul class="card-wrapper">
    ${shoes.map((shoe) => shoeTemplate(shoe, true))}
  </ul>`
  
 : html`<h2>There are no items added yet.</h2>`
}
</section>
`



