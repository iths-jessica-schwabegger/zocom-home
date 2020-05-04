const { app } = require('./core'); 

app.listen(5050, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */


// API KEY TILL DB
//"keys": ["31c4c086-b9f5-43d2-9249-af8019a3cafb"] 


//ROUTES
const vacuumsRoute = require("./routes/vacuums");
const acsRoute = require("./routes/acs");
const blindsRoute = require("./routes/blinds");
const camerasRoute = require("./routes/cameras");
const lightsRoute = require("./routes/lights");

/* CODE YOUR API HERE */

// //middleware, körs vid varje request. Auth middleware - Check API keys.
// app.use((req, res, next) => {

//     //alla requests förutom till frontend ska leta efter API-nyckel.
//     if(req.url === "/" || req.url === "/init" || req.url === "/stream") {

//         next(); //kör vidare på sidan

//     }else {//försöker anropa APIet
//         //kika i headers om API key finns
//         let key = req.headers["authorization"];
//         console.log(key);

//         //Matchar API key den som finns sparas i db
//         let dbKeys = db.get("keys").value(); //Hämtar alla nycklari objektet keys.
//         console.log(dbKeys);

//         //Kolla om key finns sparad i key-arrayen i api
//         if(dbKeys.includes(key)) {
//             next();//Om ja kör vidare
//         }else {
//             res.status(500).send({ msg: "No Api for you!" });
//         }
//     }
    
// })

// remote > API > db > update() > frontend
app.use("/vacuums", vacuumsRoute); //alla vacuums-req routas vidare till ?
app.use("/acs", acsRoute);
app.use("/blinds", blindsRoute);
app.use("/cameras", camerasRoute);
app.use("/lights", lightsRoute);