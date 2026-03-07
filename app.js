import express from "express";
import empRouter from "#router/employees";

const app = express();
export default app;

import employees from "#db/employees";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", empRouter);

// app.use("/employees/:id", (req, res) => {
//   const { id } = req.params;

//   // req.params are always strings, so we need to convert `id` into a number
//   // before we can use it to find the employee
//   const employee = employees.find((e) => e.id === +id);

//   if (!employee) {
//     return res.status(404).send("Employee not found");
//   }

//   res.send(employee);
// });

app.use((err, req, res, next) => {
  res.status(500).send("error");
});
