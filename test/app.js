const http = require("http");
const fs = require("fs");
const path = require("path");

// *************
// ** Как создавать свои ивенты 

// const EventEmitter = require("events")

// class MyEvents extends EventEmitter {
//     dateMethod(message){
//         this.emit("testmessage", `${message} ${Date.now()}`);
//     }

//     sumMethod(a, b){
//         this.emit("sum", `a + b = ${a+b}`)
//     }
// }
// const myEvent = new MyEvents();

// Подписываемся на ивет "testmessage"
// myEvent.on("testmessage", data => {
//     console.log(data);
// })

// myEvent.dateMethod("Hi");

// Подписываемся на ивет "sum"

// myEvent.on("sum", data => {
//     console.log(data);

// })

// myEvent.sumMethod(3, 20)

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        switch(req.url){
            case "/":
                fs.readFile(
                    path.join(__dirname, "views", "index.html"),
                    "utf-8",
                    (err, content) => {
                        if(err){
                            throw err;
                        }
                        res.end(content)
                    }
                )
                break;
            case "/about":
                fs.readFile(
                    path.join(__dirname, "views", "about.html"),
                    "utf-8",
                    (err, content) => {
                        if(err){
                            throw err
                        }
                        res.end(content);
                    }
                )
            case "/api/users":
                res.writeHead(200, {
                    "Content-Type": "text/json"
                })

                const users = [
                    {name: "Alex", age: 25},
                    {name: "Alex2", age: 29},
                ]

                res.end(JSON.stringify(users));
        }


    } else if (req.method === "POST") {
        const body = [];
        res.writeHead(200, {
            "Content-Type" : "text/html; charset=utf-8"
        })
        req.on("data", data => {
            body.push(Buffer.from(data))

        })
        req.on("end", () => {
            const message = body.toString().split("=")[1];
            res.end(`
                <h1>Your вука: ${message}</h1>
            `)
        })

    }

})

server.listen(3000, () => console.log("Running..."));