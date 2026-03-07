import express from "express";
import employees, { newEmployee } from "#db/employees";


const empRouter = express.Router();

export default empRouter;

empRouter.get("/", (req, res) => {
  res.send(employees);
});

empRouter.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

empRouter.get("/:id", (req, res) => {
  const id = Number (req.params.id);
 
  for(let i = 0; i <employees.length; i++) {
    if (employees[i].id ===id){
      return res.send(employees[i]);
    }
  }

res.status(404).send("Employee not found");
 });

empRouter.post("/", (req, res) => {
  if (!req.body) return res.status(400).send("Req body is required.");

  const { name } = req.body;
  if (!name) return res.status(400).send("Name is required.");

  const employee = newEmployee(name);
  res.status(201).send(employee);
});
