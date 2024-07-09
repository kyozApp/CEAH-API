import { Request, Response } from "express"
import { handleHttp } from "../application/error.handle";
import { mostrarProductoPorId, mostrarProductos, insertarProducto, actualizarProducto, eliminarProducto } from "../application/service";
import { RequestExt } from "../domain/req-ext";

const getProducto = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await mostrarProductoPorId(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_PRODUCTO');
    }
};

const getProductos = async (req: Request, res: Response) => {
    try {
        const response = await mostrarProductos();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_PRODUCTOS', e);
    }
};

const postProducto = async (req: RequestExt, res: Response) => {
    try {
        const { body, files } = req;

        if (!files || (files as Express.Multer.File[]).length === 0) {
            return res.status(400).send({ error: "No se han subido archivos" });
        }

        const imagenes = (files as Express.Multer.File[]).map(file => ({
            fileName: file.filename,
            path: file.path,
        }));

        const productoData = {
            ...body,
            imagenes,
            idUser: req.user?.id
        };

        const response = await insertarProducto(productoData);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_PRODUCTO');
    }
};

const putProducto = async (req: RequestExt, res: Response) => {
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

        const response = await actualizarProducto(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_PRODUCTO');
    }
};

const deleteProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await eliminarProducto(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_PRODUCTO');
    }
};

export { getProducto, getProductos, putProducto, postProducto, deleteProducto };
