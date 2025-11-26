import addRoute from "../helpers/RouteHandler"
import sendJson from "../helpers/sendJson"

addRoute("GET", "/", (req, res)=>{
     sendJson(res, 200, {
        message: "hello from node js with typescript...",
        path: req.url,
     })
})