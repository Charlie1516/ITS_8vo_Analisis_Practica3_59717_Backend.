
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../domain/User";

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  static async comparePasswords(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  static generateToken(user: User): string {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
  }
}
