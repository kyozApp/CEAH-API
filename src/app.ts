import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";
import { routerAuth } from "./user/infrastructure/router";
import { routerProduct } from "./product/infrastructure/router";
import { routerBanner } from "./banner/infrastructure/router";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routerAuth);
app.use("/api", routerProduct);
app.use("/api", routerBanner);

db().then(() => console.log("Conexion establecido"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
