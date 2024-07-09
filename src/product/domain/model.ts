import { Schema, model } from "mongoose";
import { Producto } from "./interface";

const ProductoSchema = new Schema<Producto>(
    {
        nombre: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            enum: [
                'procesador',
                'placa',
                'ram',
                'almacenamiento'
            ],
            required: true
        },
        subcategoria: {
            type: String,            
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        descripcion: {
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

const ProductoModel = model('productos', ProductoSchema);
export default ProductoModel;