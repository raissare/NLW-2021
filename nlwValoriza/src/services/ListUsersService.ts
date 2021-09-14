import { getCustomRepository } from "typeorm"
import { UsersRepositeries } from "../repositories/UsersRepositories"


class ListUserService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositeries);

        const users = await usersRepositories.find();

        return users;
    }

}

export { ListUserService }