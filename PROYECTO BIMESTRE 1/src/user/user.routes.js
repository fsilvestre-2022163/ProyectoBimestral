'use strict'


import express from 'express'

import {
    register, 
    login, 
    update, 
    deleteUser
} from './user.controller.js'

const api = express.Router()

api.put('/update/:id',  update)
api.delete('/delete/:id', deleteUser)

api.post('/register', register)
api.post('/login', login)

export default api
