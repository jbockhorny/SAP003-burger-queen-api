'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Products', [
     {
     name:"Café americano",
     price:5,
     type:"Principal",
     breakfast: true,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    name:"Café com leite",
    price:7,
    type:"Principal",
    breakfast: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name:"Suco de fruta natural",
    price:7,
    type:"Principal",
    breakfast: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name:"Misto quente",
    price:10,
    type:"Principal",
    breakfast: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name:"Anéis de cebola",
    price:5,
    type:"Principal",
    breakfast: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
   name:"Batata frita",
   price:5,
   type:"Principal",
   breakfast: false,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name:"Hambúrguer simples",
   price:10,
   type:"Principal",
   breakfast: false,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name:"Hambúrguer duplo",
   price:15,
   type:"Principal",
   breakfast: false,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
  name:"Água 500ml",
  price:5,
  type:"Principal",
  breakfast: false,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
 name:"Água 700ml",
 price:7,
 type:"Principal",
 breakfast: false,
 createdAt: new Date(),
 updatedAt: new Date()
},
{
 name:"Refrigerante 500ml ",
 price:7,
 type:"Principal",
 breakfast: false,
 createdAt: new Date(),
 updatedAt: new Date()
},
{
 name:"Refrigerante 750ml",
 price:10,
 type:"Principal",
 breakfast: false,
 createdAt: new Date(),
 updatedAt: new Date()
},
{
  name:"Queijo",
  price:1,
  type:"Adicional",
  breakfast: false,
  createdAt: new Date(),
  updatedAt: new Date()
 }, 
 {
  name:"Ovo",
  price:1,
  type:"Adicional",
  breakfast: false,
  createdAt: new Date(),
  updatedAt: new Date()
 },     
  ], {});
},

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Products', null, {});
  }
};