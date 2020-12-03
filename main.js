const express = require("express")
const app = express()
const fs = require("fs")

app.get("/", (req, res) => {
    res.send("hi!sushi")
})

app.get("/sushi", (req, res) => {
    // /texts/test.txt
    fs.readFile("/texts/test.txt", "utf-8", (e, data) => {
        res.send(data)
    })
})

app.get("/kakikomi", (req, res) => {
    fs.writeFile("/texts/test.txt",req.query.data,() => {
        res.send("ok")
    })
})


const server = app.listen(3333, () => { console.log("サーバーが立ちました") })