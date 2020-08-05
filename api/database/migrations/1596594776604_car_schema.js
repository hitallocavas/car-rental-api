'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarSchema extends Schema {
    up() {
        this.create('cars', (table) => {
            table.string('brand', 100).notNullable()
            table.string('plate', 10)
            table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.increments()
            table.timestamps()
        })
    }

    down() {
        this.drop('cars')
    }
}

module.exports = CarSchema