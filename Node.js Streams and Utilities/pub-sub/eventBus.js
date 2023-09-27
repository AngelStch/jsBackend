const listeners =() =>{
    
}

const publish = (eventName, ...eventArgs) =>{
    if(!listeners[eventName]){
        return
    }

    listeners[eventName].forEach((listener) => listener(...eventArgs))
}

const subscribe =(eventName, eventListener) =>{
    if(!listeners[eventName]){
        listeners[eventName] = [] 
    }

    listeners[eventName].push(eventListener)
    return () =>{
        console.log(`you have been unsubscribed from ${eventName}`)
        listeners[eventName] = listeners[eventName].filter((listerner) => listener !== eventListener)
    }
}

const eventBus ={
    publish,
    subscribe
}
module.exports = eventBus