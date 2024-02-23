'use strict'

import express from 'express'
import { save, update } from './product.controller.js'

const api = express.Router()

api.post('/save', save)
api.put('/update/:id', update)

export default api