import { render } from "../../../node_modules/lit-html/lit-html.js";
import { AuthService } from "./services/AuthService.js";
import { BAseCrudApiService } from "./services/BaseCrudApiSErvice.js";
import { sessionService } from "./services/SessionService.js";
import page  from "../node_modules/page/page.mjs"


const main = document.querySelector('#wrapper main')
const nav = document.querySelector('#wrapper header')

let router = {
    navigate: page.show,
    redirect: page.redirect
}
const baseUrl = `http://localhost:3030`

let renderBody = (template) => render(template,main)
let renderNav = (template) => render(template,nav)



/*page('/index.html','/')
page(navComponent.showView)

page('/',homeComponent.showView)
page('/login',LoginComponent.showView)
page('/register',registerComponent.showView)
page('/dashboard',dashboardComponent.showView)
page('/create',createComponent.showView)
page('/details/:id',detailsComponent.showView)
page('/edit/:id',editcomponent.showView)
page('/search', searchComponent.showView)

*/
page.start()

