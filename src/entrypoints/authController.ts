import { Request, Response } from "express";
import { RegisterUser } from "../application/RegisterUser";
import { LoginUser } from "../application/LoginUser";
import { UserRepositoryImpl } from "../infrastructure/db/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl();
const registerUser = new RegisterUser(userRepository);
const loginUser = new LoginUser(userRepository);

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const success = await registerUser.execute(name, email, password);
  return success ? res.status(201).json({ message: "Usuario registrado" }) : res.status(400).json({ message: "Usuario ya existe" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await loginUser.execute(email, password);
  return token ? res.json({ token }) : res.status(401).json({ message: "Credenciales incorrectas" });
};
