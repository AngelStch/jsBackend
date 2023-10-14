const cookieParser = require("cookie-parser");
const express = require("express")
const { v4: uuid } = require("uuid")
const PORT = 5050;
const app = express()
app.use(cookieParser())

const session ={};

app.get("/", (req, res) => {
    let id;
    const userID = req.cookies["userId"]
    if (userID) {
        id = userID
        console.log(session);
    } else {
        id= uuid()
        session[id] ={
            secret: "My secret"
        }
        res.cookie("userId2",id)

    }
    res.send(`ok! id: ${id}`)
})
app.listen(PORT, () => console.log(`Server running on port${PORT}`))