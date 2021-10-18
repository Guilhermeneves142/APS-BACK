import { Router } from "express";
import { AdministradorController } from "./controllers/AdministradtorController";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { AutoridadeController } from "./controllers/AutoridadeController";
import { PostagemController } from "./controllers/PostagemController";
import { StatusController } from "./controllers/StatusController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const administradorController = new AdministradorController();
const autoridadeController = new AutoridadeController();
const postagemController = new PostagemController();
const statusController = new StatusController();
const authenticateController = new AuthenticateController();


const router = Router();

router.post("/login",authenticateController.login);
router.use(ensureAuthenticate)
router.get("/clarify",authenticateController.clarifyToken);

router.get("/administrador/all",administradorController.findAll);
router.get("/administrador/:id",administradorController.findById);
router.post("/administrador",administradorController.create);

router.get("/autoridade/all",autoridadeController.findAll);
router.get("/autoridade/find-nome/:nome",autoridadeController.findAll);
router.get("/autoridade/:id",autoridadeController.findById);
router.post("/autoridade",autoridadeController.create);

router.get("/postagem/all",postagemController.findAll);
router.get("/postagem/find-title/:filter",postagemController.findAll);
router.get("/postagem/:id",postagemController.findById);
router.post("/postagem",postagemController.create);

router.get("/status/all",statusController.findAll);
router.get("/status/:id",statusController.findById);

export {router};