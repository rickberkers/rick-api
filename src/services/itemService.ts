import {getRepository, Repository} from "typeorm";
import {Item} from "../entities/item";

export default class ItemService {

    itemRepository: Repository<Item>;

    constructor() {
        this.itemRepository = getRepository(Item);
    }

    getAll = async (): Promise<Item[]> => {
        try {
            return await this.itemRepository.find();
        } catch {
            throw new Error('The items could not be retrieved');
        }
    }

    get = async (id: string): Promise<Item> => {
        try {
            return await this.itemRepository.findOneOrFail(id);
        } catch {
            throw new Error('The item could not be found');
        }
    }

    create = async (item: any): Promise<Item[]> => {
        try {
            return await this.itemRepository.save(this.itemRepository.create(item));
        } catch {
            throw new Error('The item(s) could not be created');
        }
    }
}