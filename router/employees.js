import express from "express"
import employees from "#db/employees"

const empRouter = express.Router();

export default empRouter;

empRouter.get("/",  (req, res) => {
  res.send(employees);
});

empRouter.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

empRouter.get("/employees/:id",(req, res) => {
  const { id } = req.params;})
