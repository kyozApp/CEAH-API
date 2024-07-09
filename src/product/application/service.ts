import { Producto } from "../domain/interface";
import ProductoModel from "../domain/model";

const mostrarProductoPorId = async (id: string) => {
    const responseProducto = await ProductoModel.find({ _id: id });
    return responseProducto;
};

const mostrarProductos = async () => {
    const responseProductos = await ProductoModel.find({});
    return responseProductos;
};

const insertarProducto = async (producto: Producto) => {
    const responseInsert = await ProductoModel.create(producto);
    return responseInsert;
};

const actualizarProducto = async (id: string, data: Producto) => {
    const responseUpdate = await ProductoModel.findByIdAndUpdate(id, data, { new: true });
    return responseUpdate;
};


const eliminarProducto = async (id: string) => {
    const responseDelete = await ProductoModel.deleteOne({ _id: id });
    return responseDelete;
};

export { mostrarProductoPorId, mostrarProductos, insertarProducto, actualizarProducto, eliminarProducto };
