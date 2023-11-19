import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from './usersService.js';

let loginTemplate = (login) => html`
<article id="login">
    <h2>Login</h2>
    <form @submit=${login}>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <input type="submit" value="Login">
    </form>
</article>`;

export async function showLogin(ctx,next) {

    let template = loginTemplate(login);
    ctx.renderBody(template)
    async function login(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    let result = await userService.login(user);
    ctx.page.redirect('/');
}
}


