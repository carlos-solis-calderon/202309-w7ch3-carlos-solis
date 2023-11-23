import { User } from '../../entities/user';
import { Auth } from '../../services/auth';
import { UserModel } from './users.mongo.model';
import { UsersMongoRepo } from './users.mongo.repo';
it('should throw an error if user creation fails', async () => {
  const newItem: Omit<User, 'id'> = {
    name: 'John',
    surname: 'Doe',
    age: 25,
    facts: [],
    email: 'john@example.com',
    passwd: 'password123',
  };

  const error = new Error('User creation failed');
  Auth.hash = jest.fn().mockResolvedValue(newItem.passwd);
  UserModel.create = jest.fn().mockRejectedValue(error);

  await expect(UsersMongoRepo.create(newItem)).rejects.toThrow(error);
});
