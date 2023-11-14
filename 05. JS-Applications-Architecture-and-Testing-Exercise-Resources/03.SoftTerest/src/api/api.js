const host = `http://localhost:3030`

async function request(method, url, data) {
    const options ={
        method,
        headers:{}
    }

    if(data !== undefined){
        options.headers["Content-Type"] = "application/json"
        options.body = JSON.stringify(data)
    }

    const user = JSON.parse(sessionStorage.getItem("user"))
    if(user){
        options.headers["X-Authorization"] = user.accessToken;
    }

    try{
        let responce = await fetch(host+url, options)

        if(!responce.ok){
            const error = await responce.json()
            throw new Error(error.messsage)
        }
        return responce.json()
    }catch(error){
        alert(error.messsage)
        throw error
    }
}

export const get = request.bind(null,"GET")
export const post = request.bind(null,"POST")
export const put = request.bind(null,"PUT")
export const del = request.bind(null,"DELETE")