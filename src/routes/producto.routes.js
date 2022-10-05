const router = require("express").Router();

const cors = require("cors");
const {
  getValues,
  getLastValues,
  getWithDate,
  addValue,
  getProducto
} = require("../controles/control_producto");
// asignamos las rutas

// get estaciones

router.get("/producto", getValues);//todos productos

// obtener 1 producto por ID

router.get("/producto/:idProducto", getProducto)
// get ultima medicion de la estacion

router.get("/producto", getLastValues);//

// get todas las mediciones de un estacion en una fecha

router.get("/producto", getWithDate);

//agregar medicion de sensores

// -------------------
router.post("/producto", cors(), addValue);

// router.put("/producto/:idProducto" )

module.exports = router;
