import * as recipeService from '../services/recipeService.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

let allRecipePreviewsTemplate = (recipes,detailedRecipes, toggleCard,goToEdit) => html`
<section id="catalog">
    ${recipes.map(r => detailedRecipes[r._id] === undefined
        ? recipePreviewTemplate(r, toggleCard)
        : recipeCardTemplate(detailedRecipes[r._id],goToEdit)
    )}
</section>`;

let recipePreviewTemplate = (recipe, toggleCard) => html`
<article class="preview" @click=${() => toggleCard(recipe._id)}>
    <div class="title">
        <h2>${recipe.name}</h2>
    </div>
    <div class="small">
        <img src=${recipe.img}>
    </div>
</article>`;

let recipeCardTemplate = (recipe, goToEdit) => html`
<article>
    <h2>${recipe.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src=${recipe.img}>
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(i => html`<li>${i}</li>`)}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe.steps.map(s => html`<p>${s}</p>`)}
    </div>
    <button @click=${(e) =>goToEdit(recipe._id)}>Edit</button>
</article>`;


export async function showCatalog(ctx, next) {
    let detailedRecipes = {};
    let recipes = await recipeService.getRecipesWithSelectedColumns(['_id', 'name', 'img']);
    let template = allRecipePreviewsTemplate(recipes,detailedRecipes, toggleCard,goToEdit);
    ctx.renderBody(template)

    
    async function toggleCard(id) {
        if(detailedRecipes[id] === undefined){
                let recipe = await recipeService.getRecipeById(id)
                detailedRecipes[id] = recipe
        }
        let template = allRecipePreviewsTemplate(recipes,detailedRecipes, toggleCard,goToEdit)
        ctx.renderBody(template);
    }
    
    async function goToEdit(id) {
        let path =`/editRecepie/${id}`
        ctx.page.redirect(path)
    }
    
}

