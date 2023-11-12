export function showView(section) {
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.style.display = "none";
    })
    section.style.display = "block"
}

export function updateNavBar() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    let msgWellcome = document.getElementById('welcome-msg')
    if (user) {
        document.querySelectorAll('.user').forEach(e => {
            e.style.display = "inline-block"
        })
        document.querySelectorAll('.guest').forEach(e => {
            e.style.display = "none"
        })
        msgWellcome.textContent = `Wellcome ${user.email}`;
    } else {
        document.querySelectorAll('.user').forEach(e => {
            e.style.display = "none"
        })
        document.querySelectorAll('.guest').forEach(e => {
            e.style.display = "inline-block"
        })
        msgWellcome.textContent = ``;

    }
}

