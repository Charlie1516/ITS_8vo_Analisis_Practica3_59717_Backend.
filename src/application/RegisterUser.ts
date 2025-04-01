import { UserRepository } from "../domain/UserRepository";
import { AuthService } from "../infrastructure/service/AuthService";
import { User } from "../domain/User";
import { v4 as uuidv4 } from "uuid";

export class RegisterUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string, password: string): Promise<boolean> {
    if (await this.userRepository.findByEmail(email)) return false;

    const hashedPassword = await AuthService.hashPassword(password);
    const newUser: User = { id: uuidv4(), name, email, password: hashedPassword };

    await this.userRepository.save(newUser);
    return true;
  }
}
