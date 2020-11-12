import express from 'express';
import ItemService from "../services/itemService";
import {Item} from "../entities/item";

export default class ItemController {

    itemService: ItemService;

    constructor() {
        this.itemService = new ItemService();
    }

    index = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            return res.json(await this.itemService.getAll());
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    get = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { id } = req.params;
        try {
            res.json(await this.itemService.get(id));
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            res.status(201).json((await this.itemService.create(req.body)));
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
}