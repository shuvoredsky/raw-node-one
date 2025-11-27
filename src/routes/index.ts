import { readUsers, writeUser } from "../helpers/fileDB"
import parseBody from "../helpers/parseBody"
import addRoute from "../helpers/RouteHandler"
import sendJson from "../helpers/sendJson"

addRoute("GET", "/", (req, res)=>{
     sendJson(res, 200, {
        message: "hello from node js with typescript...",
        path: req.url,
     })
})

addRoute("GET", '/api', (req,res)=>{
    sendJson(res, 200, {
            message: "Health Status ok",
            path: req.url,
        })
})

addRoute("POST", "/api/users", async(req, res)=>{
    const body = await parseBody(req)

    const users = readUsers();
    const newUser = {
        id: Date.now(),
        ...body,
    }

    users.push(newUser)

    writeUser(users)
    sendJson(res, 201, {success: true,data:body});
})