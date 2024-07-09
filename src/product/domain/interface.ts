export interface Producto {
    nombre: string;
    categoria: 'procesador' | 'placa' | 'ram' | 'almacenamiento';
    subcategoria: 'AMD' | 'INTEL';
    precio: number;
    stock: number;
    descripcion: string;
    imagenes: { fileName: string; path: string }[];
    idUser: string;
}