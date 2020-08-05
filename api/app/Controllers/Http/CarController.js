'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Car = use('App/Models/Car')

/**
 * Resourceful controller for interacting with cars
 */
class CarController {
    /**
     * Show a list of all cars.
     * GET cars
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index() {
        const cars = await Car.query().with('user').fetch();
        return cars;
    }


    /**
     * Create/save a new car.
     * POST cars
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, auth, response }) {
        const data = request.only(['brand', 'plate']);
        const car = await Car.create({
            user_id: auth.user.id,
            ...data
        });

        return car;
    }

    /**
     * Display a single car.
     * GET cars/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params }) {
        const car = await Car.query().with('user').where('id', params.id).first();
        return car;
    }


    /**
     * Delete a car with id.
     * DELETE cars/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, auth, response }) {
        const car = await Car.findOrFail(params.id);
        if (auth.user.id !== car.user_id) {
            return response.status(401);
        }
        car.delete();
    }
}

module.exports = CarController