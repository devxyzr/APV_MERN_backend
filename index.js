import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import venterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: "http://127.0.0.1:5173",
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/veterinarios", venterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

dotenv.config();

conectarDB();

app.listen(PORT, () => {
  console.log("Servidor funcionando en el puerto 4000");
}); // Puerto para backend
