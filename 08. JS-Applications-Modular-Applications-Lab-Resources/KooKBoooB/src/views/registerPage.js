import { html } from "../../node_modules/lit-html/lit-html.js";
import { UserReadableError } from "../services/UserReadableError.js";
import * as userService from './usersService.js';

let registerTemplate =(submitHandler)=> html`<article id="register">
<h2>Register</h2>
<form @submit=${submitHandler}>
    <label>E-mail: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <label>Repeat: <input type="password" name="rePass"></label>
    <input type="submit" value="Register">
</form>
</article>`; 
export async function showRegister(ctx,next) {
    let template  = registerTemplate(register)
   ctx.renderBody(template)
   async function register(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let rePass = formData.get('rePass');
    let password = formData.get('password');

    //Validate values are not empty
    if (password !== rePass) {
        return alert('The passwords need to match');
    }

    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        let result = await userService.register(user);
        ctx.page.redirect('/');
    } catch (e) {
        if (e instanceof UserReadableError) {
            alert(e.message);
        }
    }

}
}

