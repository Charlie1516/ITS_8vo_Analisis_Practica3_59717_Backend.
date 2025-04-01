import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { register, login } from "./entrypoints/authController";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Middleware para permitir CORS

// Rutas de autenticación
app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

// Iniciar servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
