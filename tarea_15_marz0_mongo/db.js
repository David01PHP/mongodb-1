db.createCollection("users");

//insertar datos en la dato
db.users.insert(
  {
    name: "John",
    last_Name: "Solomon",
    mail: "john@example.com",
    city: "Medellin",
    country: "Colombia",
    salary: 1000.1,
    age: 23,
    height: 1.75,
    weight: 60,
  },
  {
    name: "David",
    last_Name: "Montes",
    mail: "david@example.com",
    city: "San Francisco",
    country: "USA",
    salary: 1500000.1,
    age: 25,
    height: 1.7,
    weight: 60,
  },
  {
    name: "Andres",
    last_Name: "Perez",
    mail: "andres@example.com",
    city: "Hilo",
    country: "Hawai",
    salary: 2000000,
    age: 30,
    height: 1.5,
    weight: 55,
  },
  {
    name: "Camila",
    last_Name: "Gutierrez",
    mail: "john@example.com",
    city: "Bracilia",
    country: "Brazil",
    salary: "100",
    age: 18,
    height: 1.55,
    weight: 70,
  },
  {
    name: "John",
    last_Name: "John",
    mail: "john@example.com",
    city: "San Francisco",
    country: "US",
    salary: "100",
    age: 20,
    height: 1.63,
    weight: 60,
  }
);

db.users.insert({
  name: "Daniela",
  last_Name: "cala",
  mail: "daniela20@example.com",
  city: "Bastille",
  country: "Paris",
  salary: 2600,
  age: 23,
  height: 1.63,
  weight: 65,
});
db.users.insert({
  name: "Ana",
  last_Name: "galan",
  mail: "ana2020@example.com",
  city: "Madrid",
  country: "España",
  salary: 3600,
  age: 23,
  height: 1.63,
  weight: 65,
});
db.users.insert({
  name: "Dina",
  last_Name: "galan",
  mail: "dina@example.com",
  city: "Piccadilly",
  country: "Londres",
  salary: 3100,
  age: 32,
  height: 1.71,
  weight: 80,
});
db.users.insert({
  name: "David",
  last_Name: "mogrovejo",
  mail: "davidmv@example.com",
  city: "Sídney.",
  country: "Australia",
  salary: 3100,
  age: 32,
  height: 1.71,
  weight: 142,
});

db.users.insert({
  name: "Camilo",
  last_Name: "Julio",
  mail: "camijulo@example.com",
  city: "Sídney.",
  country: "Australia",
  salary: 4100,
  age: 32,
  height: 1.71,
  weight: 142,
});

//1. Obtener todos los usuarios que sean mayores de 18 años
db.users.find({ age: { $gt: 18 } });

//2. Obtener todos los usuarios que sean de Londres o de París.
db.users.find({
  $or: [{ country: "Londres" }, { country: "Paris" }],
});

//3. Obtener a todos los usuarios que ganen
// más de $2000 al mes y tengan menos de 30 años.
db.users.find({
  $and: [{ salary: { $gt: 2000 } }, { age: { $lt: 30 } }],
});

//4. Obtener a todos los usuarios que sean de España
// y ganen más de $3000 al mes.
db.users.find({
  $and: [{ country: "España" }, { salary: { $gt: 3000 } }],
});

//5.Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users.find({ age: { $in: [25, 30] } });

//6. Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({ edacountryd: { $ne: "USA" } });

//7. Obtener a todos los usuarios que sean de Londres y
// que ganen más de $2500 o que tengan más de 30 años.
db.users.find({
  country: { $eq: "Londres" },
  salary: { $gt: 2500 },
  or: [{ age: { $gt: 30 } }],
});

//8. Obtener a todos los usuarios que sean de Australia y tengan
// un peso mayor a 140 libras.
db.users.find({
  $and: [{ country: "Australia" }, { weight: { $gt: 140 } }],
});

//9. Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({
  $and: [{ country: { $ne: "Londres" } }, { country: { $ne: "Paris" } }],
});

//10. Obtener a todos los usuarios que ganen
// menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
  $and: [{ salary: { $lt: 2000 } }, { age: { $gt: 40 } }],
});

//11. Obtener a todos los usuarios que
//sean de Canadá y ganen más de $4000 al
// mes o que tengan una altura mayor a 180 cm.

db.users.insert({
  name: "David",
  last_Name: "mogrovejo",
  mail: "davidmv@example.com",
  city: "Toronto.",
  country: "Canada",
  salary: 4100,
  age: 32,
  height: 1.82,
  weight: 142,
});

db.users.find({
  country: "Canada",
  salary: { $gt: 4000 },
  $or: [{ height: { $gt: 1.8 } }],
});

//12. Obtener todos los usuarios que sean de Italia
// y tengan entre 20 y 30 años.
//pendiente

db.users.insert({
  name: "arcangel",
  last_Name: "la marabilla",
  mail: "arca@example.com",
  city: "Roma",
  country: "Italia",
  salary: 4100,
  age: 28,
  height: 1.82,
  weight: 80,
});

db.users.find({ country: { $eq: "Italia" } }, { age: { $in: [20, 30] } });

db.users.find({
  $and: [
    { country: { $eq: "Italia" } },
    { age: { $gte: 20 } },
    { age: { $lte: 30 } },
  ],
});

//13. Obtener todos los usuarios que no tengan un correo
// electrónico registrado.

db.users.insert({
  name: "arcangel",
  last_Name: "la marabilla",
  mail: "",
  city: "Roma",
  country: "Italia",
  salary: 4100,
  age: 28,
  height: 1.82,
  weight: 80,
});

db.users.find({ mail: "" });

//14.Obtener todos los usuarios que sean de Francia y que su salario
// esté entre $3000 y $5000 al mes.

db.users.insert({
  name: "arcangel",
  last_Name: "la marabilla",
  mail: "",
  city: "Roma",
  country: "Francia",
  salary: 4100,
  age: 28,
  height: 1.82,
  weight: 80,
});
db.users.find({
  $and: [
    { country: "Francia" },
    { salary: { $gte: 3000 } },
    { salary: { $lte: 5000 } },
  ],
});

//15.Obtener todos los usuarios que sean de Brasil y que tengan un
// peso menor a 120 libras o más de 140 libras.


db.users.insert({   
  name: "Msnuel",
  last_Name: "la sandoval",
  mail: "",
  city: "Bracilia",
  country: "Brasil",
  salary: 4100,
  age: 28,
  height: 1.82,
  weight: 130,
});

db.users.find({
    $and:[{country: "Brasil" }],
$or:[ {weight: { $lt: 120 }}, {weight: { $gt: 140 }}] });

//16. Obtener todos los usuarios que sean de Argentina o de Chile y
// que tengan una edad menor a 25 años.

db.users.insert({
  name: "jhan",
  last_Name: "lucas",
  mail: "jhan@gmail.com",
  city: "Puerto varas",
  country: "Chile",
  salary: 5000,
  age: 24,
  height: 2.0,
  weight: 200,
});

db.users.find({ country: { $in: ["Argentina", "Chile"] }, age: { $lt: 25 } });

//17. Obtener a todos los usuarios que no sean de España ni de México y
//que ganen menos de $3000 al mes.

db.users.insert({
  name: "carlos",
  last_Name: "rama",
  mail: "carl@gmail.com",
  city: "Guatemala",
  country: "Mexico",
  salary: 3200,
  age: 28,
  height: 2.0,
  weight: 200,
});

db.users.find({
  country: { $nin: ["España", "México"] },
  salary: { $lt: 3000 },
});

//18.Obtener todos los usuarios que sean de Alemania y que tengan un salario
// menor a $4000 o una edad mayor a 35 años.

db.users.insert({
  name: "carlos",
  last_Name: "rama",
  mail: "carl@gmail.com",
  city: "Guatemala",
  country: "Mexico",
  salary: 3200,
  age: 28,
  height: 2.0,
  weight: 200,
});

db.users.find({
  $and: [{ country: { $eq: "Mexico" } }],
  $or: [{ salary: { $lt: 4000 } }, { age: { $gt: 35 } }],
});

//19. Obtener todos los usuarios que no sean de Colombia
// y que su altura sea menor a 170 cm.

db.users.insert({
  name: "meguel",
  last_Name: "lara",
  mail: "miguelrl@gmail.com",
  city: "Barraquilla",
  country: "Colombia",
  salary: 3200,
  age: 28,
  height: 1.6,
  weight: 200,
});

db.users.find({ country: { $nin: ["Colombia"] }, height: { $lt: 1.7 } });

//20.Obtener todos los usuarios que sean de India y que no
// tengan un salario registrado.

db.users.insert({
  name: "ccccc",
  last_Name: "cccc",
  mail: "carmen2@gmail.com",
  city: "Calcuta",
  country: "India",
  age: 28,
  height: 1.6,
  weight: 200,
});

db.users.find({ country: "India", salary: { $exists: false } });

//elimina datos+
db.user.deleteMany({
    age: 22
})
