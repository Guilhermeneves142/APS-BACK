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

// SEM AUTENTICAÇÃO
router.post("/administrador",administradorController.create);
router.post("/autoridade",autoridadeController.create);
router.put("/update-login-senha",authenticateController.update)

router.post("/login",authenticateController.login);

router.get("/postagem/all",postagemController.findAll);
router.get("/postagem/find-title/:filter",postagemController.findAll);
router.get("/postagem/:id",postagemController.findById);
router.post("/postagem",postagemController.create);

router.get("/status/all",statusController.findAll);
router.get("/status/:id",statusController.findById);

//  PRECISA DE AUTENTICAÇÃOE
router.get("/clarify",authenticateController.clarifyToken);

router.get("/administrador/:id",administradorController.findById);

router.get("/autoridade/find-nome/:nome",autoridadeController.findAll);

router.get("/autoridade/all",autoridadeController.findAll);
router.get("/autoridade/find-by-id/:id",autoridadeController.findById);

router.get("/administrador/all",administradorController.findAll);



export {router};