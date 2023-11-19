import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { isUserLoggedIn } from './services/authenticationService.js';
import { logout } from './views/usersService.js';

import { showCatalog } from './views/catalogPage.js';
import { showCreateRecipe } from './views/createRecipePage.js';
import { showEditPage } from './views/editRecipePage.js';
import { showLogin } from './views/loginPage.js';
import { showRegister } from './views/registerPage.js';

const main = document.querySelector('main');
const navElement = document.querySelector('nav');

page('/index.html', '/')
page(decorateRender)
page(decorateUserServiece)
page(showNavigation)
page('/', showCatalog)
page('/editrecepie/:id', showEditPage)
page('/login', showLogin)
page('/register', showRegister)
page('/createRecepie', showCreateRecipe)

page.start();

function decorateRender(ctx, next) {
    ctx.renderNav = (template => render(template, navElement))
    ctx.renderBody = (template => render(template, main))
    next()
}

function decorateUserServiece(ctx, next) {
    ctx.logout = logout
    next()
}

async function showNavigation(ctx, next) {
    let userLoggedIn = isUserLoggedIn()
    let logoutHandler = () => {
        ctx.logout;
        ctx.page.redirect('/')
    }
    let template = html`
    ${userLoggedIn
            ? html`<a  class="active" href="/">Catalog</a>
                <div id="user">
                    <a href="/createRecepie">Create Recipe</a>
                    <a id="logoutBtn" href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
                </div>`
            : html`<a  class="active" href="/">Catalog</a>
                <div id="guest">
                    <a  href="/login">Login</a>
                    <a  href="/register">Register</a>
                </div>`
        }`
    ctx.renderNav(template)
    next()
}
