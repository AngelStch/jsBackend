let craeteBtn = document.getElementById("createBtn")
craeteBtn.addEventListener("click", createHandler, true)

let ladBtn = document.getElementById("loadBtn")
ladBtn.addEventListener("click", loadLandMarks, true)

let landMarksTableBody = document.querySelector("#landmarks-table tbody")
let editBtn = document.getElementById('edit-id')
editBtn.addEventListener("click", editHandler, true)

async function loadLandMarks(e) {
    e.preventDefault();

    [...landMarksTableBody.children].forEach(c => c.remove())
    let url = 'http://localhost:3030/jsonstore/ladmarks'
    let responce = await fetch(url)
    let result = await responce.json()
    Object.values(result).forEach(e => {
        let tr = creatreLandmark(e._ide.name, e.area, e.yearDateStert, e.YearDateEnd)
        landMarksTableBody.appendChild(tr)
    })
}

function creatreLandmark(id, name, area, yearDateStert, YearDateEnd) {
    let tr = document.createElement("tr")

    let tdName = document.createElement("td")
    tdName.textContent = name
    let tdAree = document.createElement("td")
    tdAree.textContent = area
    let tdYearStart = document.createElement("td")
    tdYearStart.textContent = yearDateStert
    let tdYearEnd = document.createElement("td")
    tdYearEnd.textContent = YearDateEnd
    let tdContols = document.createElement("td")

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    
    deleteBtn.addEventListener('click', deleteHandler)
    deleteBtn.dataset.id = id

    let editBtn = document.createElement("button")
    editBtn.textContent = "Delete"
    deleteBtn.addEventListener('click', loadEditData)
    editBtn.dataset.id = id

    
    tdContols.appendChild(editBtn)
    tdContols.appendChild(deleteBtn)
    tr.appendChild(tdName)
    tr.appendChild(tdAree)
    tr.appendChild(tdYearStart)
    tr.appendChild(tdYearEnd)
    tr.appendChild(tdContols)
    
    return tr;


}

async function deleteHandler(e) {
    e.preventDefault();
    let deleteBtn = e.target
    let id = deleteBtn.dataset.id
    let url = `http://localhost:3030/jsonstore/ladmarks${id}`
    let settings = {
        method: 'Delete',

    }
    let responce = await fetch(url, settings)
    let result = responce.json();
    await loadLandMarks();
}
async function loadEditData(e) {

    e.preventDefault();

    let idInput = document.getElementById("edit-id")
    let nameInput = document.getElementById("edit-name")
    let areaInput = document.getElementById("edit-area")
    let yearDateStertInput = document.getElementById("edit-year-dated-start")
    let YearDateEndInput = document.getElementById("edit-year-dated-end")

    let editBtn = e.target
    let id = editBtn.dataset.id
    let url = `http://localhost:3030/jsonstore/ladmarks${id}`
    let responce = await fetch(url)
    let result = responce.json();

    idInput.value = result.id
    nameInput.value = result.name
    areaInput.value = result.area
    yearDateStertInput.value = result.yearDateStert
    YearDateEndInput.value = result.YearDateEnd
}

async function editHandler(e) {
    e.preventDefault();

    let idInput = document.getElementById("edit-id")
    let nameInput = document.getElementById("edit-name")
    let areaInput = document.getElementById("edit-area")
    let yearDateStertInput = document.getElementById("edit-year-dated-start")
    let YearDateEndInput = document.getElementById("edit-year-dated-end")
    let id = idInput.value
    let name = nameInput.value
    let area = areaInput.value
    let yearDateStert = Number(yearDateStertInput.value)
    let YearDateEnd = Number(YearDateEndInput.value)

    let url = `http://localhost:3030/jsonstore/ladmarks${id}`
    let settings = {
        method: 'Put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, area, yearDateStert, YearDateEnd })
    }
    let responce = await fetch(url, settings)
    let result = responce.json();
    idInput.value = "";
    nameInput.value = "";
    areaInput.value = "";
    yearDateStertInput.value = "";
    YearDateEndInput.value = "";
    await loadLandMarks();
}

async function createHandler(e) {

    e.preventDefault();

    let name = document.getElementById("create-name").value
    let area = document.getElementById("create-area").value
    let yearDateStert = Number(document.getElementById("create-year-dated-start").value)
    let YearDateEnd = Number(document.getElementById("create-year-dated-end").value)

    let url = 'http://localhost:3030/jsonstore/ladmarks'
    let settings = {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, area, yearDateStert, YearDateEnd })
    }
    let responce = await fetch(url, settings)
    let result = responce.json();
    await loadLandMarks();



}