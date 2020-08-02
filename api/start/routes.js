'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { message: 'Welcome to Car Rental API!' }
})

Route.post('/api/user', 'UserController.register')
Route.post('/api/login', 'UserController.auth')

Route.get('/api', () => {
    return { message: 'Car Rental API' }
}).middleware(['auth']);