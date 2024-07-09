import { Router } from "express";
import { registerCtrl, loginCtrl, getUsers, putUser, deleteUser } from "./controller";
import { checkJwt } from "./session";

const routerAuth = Router();
routerAuth.post("/v1/register", registerCtrl);
routerAuth.post("/v1/login", loginCtrl);

routerAuth.get('/v1/users', checkJwt, getUsers);

routerAuth.put('/v1/user/:id', checkJwt, putUser);

routerAuth.delete('/v1/user/:id', checkJwt, deleteUser);

export { routerAuth };
