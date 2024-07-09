import { Request, Response } from "express"
import { handleHttp } from "../application/error.handle";
import { mostrarBannerPorId, mostrarBanners, insertarBanner, actualizarBanner, eliminarBanner } from "../application/service";
import { RequestExt } from "../domain/req-ext";

const getBanner = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await mostrarBannerPorId(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_Banner');
    }
};

const getBanners = async (req: Request, res: Response) => {
    try {
        const response = await mostrarBanners();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BannerS', e);
    }
};

const postBanner = async (req: RequestExt, res: Response) => {
    try {
        const { body, files } = req;

        if (!files || (files as Express.Multer.File[]).length === 0) {
            return res.status(400).send({ error: "No se han subido archivos" });
        }

        const imagenes = (files as Express.Multer.File[]).map(file => ({
            fileName: file.filename,
            path: file.path,
        }));

        const BannerData = {
            ...body,
            imagenes,
            idUser: req.user?.id
        };

        const response = await insertarBanner(BannerData);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_Banner');
    }
};

const putBanner = async (req: RequestExt, res: Response) => {
    try {
        const { params, body, files } = req;
        const { id } = params;

        if (files && (files as Express.Multer.File[]).length > 0) {
            const imagenes = (files as Express.Multer.File[]).map(file => ({
                fileName: file.filename,
                path: file.path,
            }));
            body.imagenes = imagenes;
        }

        const response = await actualizarBanner(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_Banner');
    }
};

const deleteBanner = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await eliminarBanner(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_Banner');
    }
};

export { getBanner, getBanners, putBanner, postBanner, deleteBanner };
