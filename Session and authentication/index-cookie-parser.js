const cookieParser = require("cookie-parser");
const express = require("express")
const { v4: uuid } = require("uuid")
const PORT = 5050;
const app = express()
app.use(cookieParser())

app.get("/", (req, res) => {
    let id;
    const userID = req.cookies["userId"]
    if (userID) {
        id = userID
        console.log(req.session);
    } else {
        id= uuid()
        res.cookie("userId",id, {httpOnly: true})
        res.cookie("userId2",id, )

    }
    res.send(`ok! id: ${id}`)
})
app.listen(PORT, () => console.log(`Server running on port${PORT}`))