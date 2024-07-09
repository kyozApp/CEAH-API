import { Request, Response, NextFunction } from "express";
import multer, { diskStorage } from "multer";
import fs from 'fs';
import path from 'path';
import BannerModel from "../domain/model";

const PATH_STORAGE = `${process.cwd()}/src/banner/application/img`;

const storage = diskStorage({
    destination(req: Request, file: Express.Multer.File, cb: any) {
        cb(null, PATH_STORAGE);
    },
    filename(req: Request, file: Express.Multer.File, cb: any) {
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    },
});

const uploadMultipleMiddleware = multer({ storage }).array('imagenes', 10); // Permitir hasta 10 imágenes

const updateFileMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const files = req.files as Express.Multer.File[];

        if (files && files.length > 0) {
            const BannerActual = await BannerModel.findById(id);
            if (BannerActual?.imagenes) {
                for (const img of BannerActual.imagenes) {
                    fs.unlinkSync(img.path);
                }
            }

            const imagenes = files.map(file => {
                const ext = file.originalname.split(".").pop();
                const fileNameRandom = `image-${Date.now()}.${ext}`;
                const newPath = path.join(PATH_STORAGE, fileNameRandom);

                file.filename = fileNameRandom;
                file.path = newPath;

                return {
                    fileName: fileNameRandom,
                    path: newPath,
                };
            });

            req.body.imagenes = imagenes;
        }
        next();
    } catch (error) {
        res.status(500).send({ error: 'Error al actualizar los archivos' });
    }
};

const deleteFileMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const Banner = await BannerModel.findById(id);

        if (Banner?.imagenes) {
            for (const img of Banner.imagenes) {
                const filePath = path.resolve(img.path);
                if (fs.existsSync(filePath)) {
                    await fs.promises.unlink(filePath);
                }
            }
        }
        next();
    } catch (error) {
        res.status(500).send({ error: 'Error al eliminar los archivos' });
    }
};

export { uploadMultipleMiddleware, updateFileMiddleware, deleteFileMiddleware };
