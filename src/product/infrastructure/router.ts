import { Router } from "express";
import { deleteProducto, getProducto, getProductos, postProducto, putProducto } from "./controller";
import { logMiddleware } from "./log";
import { checkJwt } from "./session";
import { deleteFileMiddleware, updateFileMiddleware, uploadMultipleMiddleware } from "./multer";

const routerProduct = Router();

routerProduct.get('/v1/productos', getProductos);

routerProduct.get('/v1/producto/:id', checkJwt, logMiddleware, getProducto);

routerProduct.post('/v1/producto', checkJwt, uploadMultipleMiddleware, postProducto);

routerProduct.put('/v1/producto/:id', checkJwt, uploadMultipleMiddleware, updateFileMiddleware, putProducto);

routerProduct.delete('/v1/producto/:id', checkJwt, deleteFileMiddleware, deleteProducto);

export { routerProduct };
