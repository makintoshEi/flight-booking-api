import { initializeDatabase } from '../database'; 
import { IUser } from '../interfaces';

class UserRepository {
  private userModel: any;

  constructor() {
    // Initialize the database connection and get the User model
    initializeDatabase().then(models => {
      console.log('.. user model ..', models.User)
      this.userModel = models.User;  
    });
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
