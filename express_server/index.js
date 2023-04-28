import express from "express";
import { translateRoute } from "./routes/translate.js";

const app = express();
let port = 80;

app.use(express.static("public"));

app.all("/", (_req, res) => res.redirect("/en-US"));

app.use(["/pt-BR", "/en-US"], translateRoute);

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});