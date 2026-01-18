// Part(1)

// (1)
// import  { resolve } from "path";
// import fs from "fs/promises";
// import express from "express";
// const app = express();
// app.listen(3000);
// app.use(express.json())

// app.post("/user", async(req,res)=>{
// try{
//     const data = await fs.readFile(resolve("./users.json"),"utf-8");
//     const users = JSON.parse(data)
//     const exists = users.some(user => user.email === req.body.email);
//     if(exists){
//      return res.status(409).send("email already exists");
//     }
//    users.push(req.body);
//     await fs.writeFile("./users.json",JSON.stringify(users, null, 2) );
//     res.status(201).send("user added successfully");

// }
// catch(error){
//     res.status(500).send("Error reading file");
// }
// })

// ==================================================================================

// (2)
// import express from 'express';
// import { readFile, writeFile } from "fs/promises";
// import { resolve } from 'path';
// const app = express();
// app.listen(3000);
// app.use(express.json());
// app.patch("/user/:id",async(req,res)=>{
// try{
//     const data = await readFile(resolve("./users.json"),{encoding:"utf-8"});
//     let users = JSON.parse(data);
//     const exists = users.find(user => user.id === Number(req.params.id));
//     if(exists){
//         const {name,age,email} = req.body;
//        if (name !== undefined) exists.name = name;
//       if (age !== undefined) exists.age = age;
//       if (email !== undefined) exists.email = email;

//          await writeFile(resolve("./users.json"),JSON.stringify(users,null,2));
//         return res.status(200).send("user updated successfully")
//     }
// res.status(409).send("user id not found")
// }
// catch (error){
//     console.log(error);
//      res.status(500).send("Error reading file");
// }

// })

// ===============================================================================

// (3)

// import express from "express";
// import { writeFile, readFile } from "fs/promises";
// import { resolve } from "path";
// const app = express();
// app.listen(3000);
// app.use(express.json());
// app.delete("/user/:id", async (req, res) => {
//   try {
//     const data = await readFile(resolve("./users.json"), "utf-8");
//     let users = JSON.parse(data);

//     const paramId = req.params.id ? Number(req.params.id) : null;
//     const bodyId = req.body.id ? Number(req.body.id) : null;

//     if (paramId && bodyId && paramId !== bodyId) {
//       return res.status(400).send("ID in params and body must match");
//     }

//     const finalId = paramId || bodyId;

//     if (!finalId) {
//       return res.status(400).send("User ID is required");
//     }

//     const index = users.findIndex(user => user.id === finalId);

//     if (index !== -1) {
//       users.splice(index, 1);
//       await writeFile(resolve("./users.json"), JSON.stringify(users, null, 2));
//       return res.status(200).send("user deleted successfully");
//     }

//     res.status(404).send("user id not found");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error reading file");
//   }
// });

// ============================================================================

// (4)
// import express from "express";
// import { readFile } from "fs/promises";
// import { resolve } from "path";
// const app = express();
// app.listen(3000);
// app.use(express.json());
// app.get("/user", async (req, res) => {
//   try {
//     const data = await readFile(resolve("./users.json"),"utf-8");
//     const users = JSON.parse(data);
//     const user = users.find((user) => user.name == req.query.name);
//     if (user) {
//        return res.status(200).send(user);
//     }
//     res.status(404).send("user name not found");
//   } catch (error) {
//     res.status(500).send("Error reading file");
//   }
// });

// =================================================================================

// (5)
// import express from "express";
// import { readFile } from "fs/promises";
// import { resolve } from "path";
// const app = express();
// app.listen(3000);
// app.use(express.json());
// app.get("/user", async (req, res) => {
//   try {
//     const data = await readFile(resolve("./users.json"));
//     const users = JSON.parse(data);
//        return res.status(200).send(users);
//   } catch (error) {
//     res.status(500).send("Error reading file");
//   }
// });

// ==============================================================================

// (6)
// import express from "express";
// import { readFile } from "fs/promises";
// import { resolve } from "path";
// const app = express();
// app.listen(3000);
// app.use(express.json());
// app.get("/user/filter",async(req,res)=>{
//      try {
//     const data = await readFile(resolve("./users.json"));
//     const users = JSON.parse(data);
//    const matchUsers = users.filter(user => user.age < req.query.minAge);
//    if(matchUsers.length == 0 ){
//    return res.status(400).send({message:"no user found"});
//    }
//    res.status(200).send(matchUsers);
//   } catch (error) {
//     res.status(500).send("Error reading file");
//   }
// })

// ===============================================================================

// (7)
// import express from "express";
// import { readFile } from "fs/promises";
// import { resolve } from "path";
// const app = express();
// app.listen(3000);
// app.use(express.json());
// app.get("/user/:id", async (req, res) => {
//   try {
//     const data = await readFile(resolve("./users.json"));
//     const users = JSON.parse(data);
//     const user = users.find((user) => user.id == req.params.id );
//     if (user) {
//        return res.status(200).send(user);
//     }
//     res.status(404).send("user id not found");
//   } catch (error) {
//     res.status(500).send("Error reading file");
//   }
// });