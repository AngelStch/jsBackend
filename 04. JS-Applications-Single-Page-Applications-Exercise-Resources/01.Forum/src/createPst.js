document.getElementsByClassName("public").addEventListener('click', post)
document.getElementsByClassName("cancel").addEventListener('click', clearAll)

    let form = document.querySelector('form')

async function post(){
    let formData = new FormData(form)
    let title  = formData.get('topicName')
    let userName  = formData.get('username')
    let post  = formData.get('postText')

    let rsponce = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`,{
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({title,userName,post})
    })
    let data = await rsponce.json();

    let titleDivv = document.getElementsByClassName("topic-title")
    let postdiv = document.getElementsByClassName("topic-container")
 titleDivv.appendChild(data.title)

    clearAll()
}

function clearAll(){
    let formData = new FormData(form)
    let title  = formData.get('topicName') 
    let userName  = formData.get('username')
    let post  = formData.get('postText')
    title.text =""
    userName.text =""
    post.text = ""
}