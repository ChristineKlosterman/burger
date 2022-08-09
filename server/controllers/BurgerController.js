import res from "express/lib/response"
import { burgersService } from "../services/BurgerService";
import BaseController from "../utils/BaseController";


export class BurgersController extends BaseController {

    constructor() {
        super('/api/burger')

        this.router
            .get('', this.getBurgers)
            .post('', this.creatBurger)
            .get('/:burgerId', this.getBurgerById)
            .put('/:burgerId', this.editBurger)
            .delete('/:burgerId', this.deleteBurger)

    }

    async getBurgers(req, res, next) {
        try {
            let burger = await burgersService.getBurgers()
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async getBurgerById(req, res, next) {
        try {
            let burger = await burgersService.getBurgerById(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)

        }
    }

    async creatBurger(req, res, next) {
        try {
            let burgerData = req.body

            let burger = await burgersService.createBurger(burgerData)

            res.send(burger)

        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(req, res, next) {
        try {
            let burger = await burgersService.deleteBurger(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }



    }
    async editBurger(req, res, next) {
        try {
            let burger = await burgersService.editBurger(res.params.burgerId, req.body)
            res.send(burger)
        } catch (error) {
            next(error)
        }

    }

}