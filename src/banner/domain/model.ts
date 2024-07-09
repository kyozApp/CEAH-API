import { Schema, model } from "mongoose";
import { Banner } from "./interface";

const BannerSchema = new Schema<Banner>(
    {
        nombre: {
            type: String,
            required: true
        },
        imagenes: [
            {
                fileName: {
                    type: String,
                    required: true,
                },
                path: {
                    type: String,
                    required: true,
                },
            },
        ],
        idUser: {
            type: String
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const BannerModel = model('Banners', BannerSchema);
export default BannerModel;