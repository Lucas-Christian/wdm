import { Router } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

const routes = {
  "/pt-BR": (_req, res) => res.sendFile(join(__dirname, "../views/pt-BR/index.html")),
  "/en-US": (_req, res) => res.sendFile(join(__dirname, "../views/en-US/index.html"))
}

router.get("/", (req, res) => {
  const route = routes[req.baseUrl];
  route(req, res);
});

export { router as translateRoute };