import userRepository from '../repositories/userRepository';

export default class UserService {
    
    static getUserByEmail = async (email: string) => {
        return await userRepository.getUserBy Email(email);
    };

}
