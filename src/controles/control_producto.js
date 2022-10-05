const ctrlproduc = {};
const producto = require("../mysql/conexion_db");

ctrlproduc.getValues = async (req, res) => {
  let sql = "select * from produc";
  await producto.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};

ctrlproduc.getProducto= async (req, res) => {// ID
  try {
    const IDPRODUCTO = req.params.idProducto;
    const sql = `SELECT * FROM produc WHERE id_produc = ${IDPRODUCTO}`
    await producto.query(sql, (err, rows, fields) => {
      if(err) throw err;
      else{
        res.json(rows)
      }
    })
  } catch (error) {
    
  }
}

ctrlproduc.getLastValues = async (req, res) => {
  const { id } = await req.params;
  let sql = 
  await producto.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};

ctrlproduc.getWithDate = async (req, res) => {
  const { id, date } = await req.params;
  let sql = 
  await producto.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};

ctrlproduc.addValue = async function (req, res) {
  const { temp, hume, prec, dir, vel, estacion } = await req.body;
  if (temp == "" || !temp) {
    res.json({ status: "datos incompletos" });
  } else {
    let sql = `INSERT INTO produc (id_produc, nombre_producto, descripcion) VALUES ( ${nombre}'Desodorante',${descripcion} 'Marca Pirulo')`
    producto.query(sql, (err, rows, fields) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: "Lectura de sensor agregado" });
      }
    });
  }
};

module.exports = ctrlproduc;
