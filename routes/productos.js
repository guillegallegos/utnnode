const express = require('express')
const Sequelize = require('sequelize')
const router = express.Router()
//Conexion MYSQL
const db = require('../config/db')
//Model Tabla Productos
const tablaProductos = require('../models/tablaProductos')

  
let title = "Tienda de Biciletas"
let year = new Date().getFullYear()
let legales = 'Al comprar estás asumiendo un compromiso. Haga todas las preguntas que quiera antes de ofertar, para que nuestro departamento de atención al cliente evacue tus dudas y puedas elegir correctamente el producto adecuado.'
let envios = 'ENVIOS x CORREO A TODO EL PAIS. <br> Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'

// arrow function
router.get('/', async (req,res) => {
        //consulta
      const traerProd = await tablaProductos.findAll({
        //attributes:['id','nombre','descripcion'],
        order:[
          ['id', 'DESC']
        ]
      })
      //console.log(traerProd)
      res.render('listadoProductos.hbs',{title,year,productos:traerProd})
})

router.get('/:id',async (req,res) => {
    let paramURL = req.params.id

    const consultaProd = await tablaProductos.findOne({where:{id:paramURL}});
    //console.log(consultaProd.dataValues)
    /*
    para Bruno
    if(!user){
      res.render("error.hbs",{data})
    }else{
      res.render("gracias.hbs",{data})
    }*/


    
    res.render('productoSimple.hbs',{prodSingle:consultaProd,legales,envios,title,year})
    // res.json(prodSingle)
})

module.exports = router;