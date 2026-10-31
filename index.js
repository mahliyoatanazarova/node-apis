

// const events= require("events")
// const eventEmitter = new events.EventEmitter()
// eventEmitter.on("salom", ()=>{
//     console.log("salom berildii");
    
// })
// // hodisani eshitamiz
// eventEmitter.emit("salom")

// const { log } = require("console")
// const os =require("os")
// const url =require("url")
// const path =require("path")

// console.log(path.extname(__filename));
// console.log(path.normalize("/folder//js/index.js"));



// console.log(os.arch());

// console.log(os.cpus());

// console.log(os.freemem());




// console.log("Jami RAM:", (os.totalmem() / 1024 ** 3).toFixed(2), "GB");
// console.log("Bo'sh RAM:", (os.freemem() / 1024 ** 3).toFixed(2), "GB");
// console.log(
//   "Ishlatilgan RAM:",
//   ((os.totalmem() - os.freemem()) / 1024 ** 3).toFixed(2),
//   "GB"
// );
// console.log(os.platform());

// console.log(os.hostname());

// console.log(os.machine());

// console.log(os.type());
// console.log(os.networkInterfaces());
// console.log(os.homedir());

// console.log(os.uptime());




// let req =url.parse("https://asaxiy.uz/new/product/page=2/sort=cheap?size=48", true)

// console.log(req.host);
// console.log(req.pathname);
// console.log(req.search);
// let qData=req.query
// console.log(qData.filename);





// ====== API yasaymiz =====
const http=require("http");

const { read_file, write_file } = require("./file-system/file-system")

//////////////// POSTS ///////////////
// GET API
const app =http.createServer((req , res) => {
if (req.method === "GET" && req.url === "/post"){
       let fileData = read_file("posts.json")
  
    res.writeHead(200, {"content-type":"application/json"})

    res.end(JSON.stringify(fileData))

}
 // POST API
   if(req.method== "POST" && req.url === "/add_post"){
    req.on("data", (chunk) =>{
        const bodyData=(JSON.parse(chunk));
        let fileData = read_file("posts.json")
        


 fileData.push(bodyData)
write_file( "posts.json",  fileData)    
    res.writeHead(201, {"content-type":"application/json"})
  res.end(JSON.stringify({
    message:"aded new post" }))

    })
   }
   //////////////// POSTS ///////////////



   // GET API 22

if (req.method === "GET" && req.url === "/car"){
       let fileData = read_file("car.json")
  
    res.writeHead(200, {"content-type":"application/json"})

    res.end(JSON.stringify(fileData))

}
 // POST API
   if(req.method== "POST" && req.url === "/add_car"){
    req.on("data", (chunk) =>{
        const bodyData=(JSON.parse(chunk));
        let fileData = read_file("car.json")
        


 fileData.push(bodyData)
write_file( "car.json",  fileData)    
    res.writeHead(201, {"content-type":"application/json"})
  res.end(JSON.stringify({
    message:"aded new car" }))

    })
   }
   ///////////////////////////////////////////

// 33
   if (req.method === "GET" && req.url === "/lang"){
       let fileData = read_file("lang.json")
  
    res.writeHead(200, {"content-type":"application/json"})

    res.end(JSON.stringify(fileData))

}
 // POST API
   if(req.method== "POST" && req.url === "/add_lang"){
    req.on("data", (chunk) =>{
        const bodyData=(JSON.parse(chunk));
        let fileData = read_file("lang.json")
        


 fileData.push(bodyData)
write_file( "lang.json",  fileData)    
    res.writeHead(201, {"content-type":"application/json"})
  res.end(JSON.stringify({
    message:"aded new lang" }))

    })
   }
})


app.listen(3000,(localhost)=>{
    console.log("Server 300- Portda ishladi");
    
})      //http:// 172.19.175.49:3000
