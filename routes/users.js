var express = require('express');
var router = express.Router();

let users = [
  {
    nombre: ["Mario","Baracus"],
    anioNac: 1952,
    localidad: "Ituzaingo, Illinois",
    profesion:"Militar retirado",
    genero:1,
    activo: true
  },{
    nombre: ['Carlitos',"Bala"],
    anioNac: 1930,
    localidad:"Caballito, CABA",
    profesion:"Procer de la TV y de la infancia",
    genero:1,
    activo: true
  },{
    nombre:["China", "Zorrilla"],
    anioNac: 1925,
    localidad: "Montevideo, Uruguay",
    profesion:'actriz',
    genero: 0,
    activo: false
  },{
    nombre:["Maria", "Moreno"],
    anioNac: 1987,
    localidad: "Rocha, Uruguay",
    profesion:'panadera',
    genero: 0,
    activo: false
  }
]

let title = "Usuarios"
let date = new Date() 
let animales = ["perro","gato","elefante"]

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('usuarios.hbs',{users,title,animales, year:date.getFullYear()})

});

module.exports = router;
