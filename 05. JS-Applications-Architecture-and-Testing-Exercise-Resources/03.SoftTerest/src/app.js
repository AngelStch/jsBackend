import { initialize } from "./router.js"
import { showCatalog } from "./views/catalog.js"
import { showCreate } from "./views/create.js"
import { showDetails } from "./views/details.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { showRegister } from "./views/register.js"

document.getElementById("views").remove()

const routs = {
    "/": showHome,
    "/register": showRegister,
    "/login": showLogin,
    "/catalog": showCatalog,
    "/details": showDetails,
    "/create": showCreate
}

const router = initialize(routs)
router.goTo("/")
router.updateNav();


