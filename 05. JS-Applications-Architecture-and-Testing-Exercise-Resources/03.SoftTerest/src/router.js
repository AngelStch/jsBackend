export function initialize(routs) {
    const nav = document.querySelector('nav')
    nav.addEventListener('click', onNavigate)

    const context = {
        goTo,
        showSectiom,
        updateNav
    }

    function showSectiom(section) {
        document.getElementById("root").replaceChildren(section)

    }

    function onNavigate(event) {
        const target = event.target
        if (target.tagName === 'A') {
            event.preventDefault()
            const url = new URL(target.href)
            goTo(url.pathname)
        }
    }


    function goTo(name) {
        const handler = routs[name]
        if (typeof handler === 'function') {
            handler(context)
        }
    }


    function updateNav(){
        const user = sessionStorage.getItem('user')
        if(user){
           nav.querySelectorAll('.user').forEach(e => e.style.display='block') 
           nav.querySelectorAll('.guest').forEach(e => e.style.display='none') 

        }else{
            nav.querySelectorAll('.user').forEach(e => e.style.display='none') 
            nav.querySelectorAll('.guest').forEach(e => e.style.display='block') 
        }
    }

    return context
}