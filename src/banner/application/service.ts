import { Banner } from "../domain/interface";
import BannerModel from "../domain/model";

const mostrarBannerPorId = async (id: string) => {
    const responseBanner = await BannerModel.find({ _id: id });
    return responseBanner;
};

const mostrarBanners = async () => {
    const responseBanners = await BannerModel.find({});
    return responseBanners;
};

const insertarBanner = async (Banner: Banner) => {
    const responseInsert = await BannerModel.create(Banner);
    return responseInsert;
};

const actualizarBanner = async (id: string, data: Banner) => {
    const responseUpdate = await BannerModel.findByIdAndUpdate(id, data, { new: true });
    return responseUpdate;
};


const eliminarBanner = async (id: string) => {
    const responseDelete = await BannerModel.deleteOne({ _id: id });
    return responseDelete;
};

export { mostrarBannerPorId, mostrarBanners, insertarBanner, actualizarBanner, eliminarBanner };
