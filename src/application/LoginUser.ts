import { UserRepository } from "../domain/UserRepository";
import { AuthService } from "../infrastructure/services/AuthService";

export class LoginUser {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await AuthService.comparePasswords(password, user.password))) {
      return null;
    }
    return AuthService.generateToken(user);
  }
}
