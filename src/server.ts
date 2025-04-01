import express from "express";
import cors from "cors";
import { register, login } from "./entrypoints/authController";


const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

app.listen(8000, () => console.log("Servidor corriendo en http://localhost:8000"));
