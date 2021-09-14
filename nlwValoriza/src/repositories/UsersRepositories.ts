import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepositeries extends Repository<User> { }

export { UsersRepositeries };