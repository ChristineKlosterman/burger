import { fake_db } from "../db/fake_db.js";




class BurgersService {
    async getBurgers() {
        return fake_db.burgers //this will change tomorrow when we use a real database 
    }

    async getBurgerById(burgerId) {
        let burger = fake_db.burgers.find(b => b.id == burgerId)

        return burger

    }

    async createBurger(burgerData) {
        burgerData.id = fake_db.burgers.length
        fake_db.burgers.push(burgerData)
        return burgerData
    }

    async deleteBurger(burgerId) {
        let burger = await this.getBurgerById(burgerId)

        let burgerIndex = fake_db.burgers.indexOf(burger)

        fake_db.burgers.splice(burgerIndex, 1)

        return (burger)

    }

    async editBurger(burgerId, burgerData) {
        let burger = await burgersService.editBurger(burgerId)

        burger.name = burgerData.name || burgerData

        return (burger)
    }
}

export const burgersService = new BurgersService()