const { Router } = require("express");
const router = new Router;
const { db, update } = require("../db");


router.get("/:id/state/:state", async (req, res) => {

    let id = req.params.id;
    let state = (req.params.state === "on") ? true : false;

    // update db
    //går in i db, hämtar devices och letar efter den med id = id. Ändrar egenskapen on beroende på temp. Sen skriv data med value.
    db.get("devices").find({ id: id}).assign({ on : state}).value();

    //tell frontend to update
    update();

    res.send({ msg: `Blind with ID ${id} is now ${req.params.state}.`});
})



module.exports = router;