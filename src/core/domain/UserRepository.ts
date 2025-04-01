import { User } from "./User"; // Ajusta la ruta si es necesario


export interface UserRepository {
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<void>;
  }
  