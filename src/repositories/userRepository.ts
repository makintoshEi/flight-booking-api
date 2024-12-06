import { DatabaseConnection } from '../database/database-connection';
import { IUser } from '../interfaces';

class UserRepository {
  private userModel: any;

  constructor() {
    DatabaseConnection.getInstance()
      .getDb()
      .then(models => this.userModel = models.User);
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await this.userModel.findOne({ where: { email } });
      return user ? user.toJSON() : null;
    } catch (error) {
      console.error('Error retrieving user by email:', error);
      throw error;
    }
  }
}

export default new UserRepository();
