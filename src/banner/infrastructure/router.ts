import { Router } from "express";
import { deleteBanner, getBanner, getBanners, postBanner, putBanner } from "./controller";
import { logMiddleware } from "./log";
import { checkJwt } from "./session";
import { deleteFileMiddleware, updateFileMiddleware, uploadMultipleMiddleware } from "./multer";

const routerBanner = Router();

routerBanner.get('/v1/banners', getBanners);

routerBanner.get('/v1/banner/:id', checkJwt, logMiddleware, getBanner);

routerBanner.post('/v1/banner', checkJwt, uploadMultipleMiddleware, postBanner);

routerBanner.put('/v1/banner/:id', checkJwt, uploadMultipleMiddleware, updateFileMiddleware, putBanner);

routerBanner.delete('/v1/banner/:id', checkJwt, deleteFileMiddleware, deleteBanner);

export { routerBanner };
