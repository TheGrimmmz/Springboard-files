const jwt = require('jsonwebtoken')
const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const {SECRET_KEY} = require('../config')
const ExpressError = require('../expressError')

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/
router.post('/login', async (res, req, next)=>{
    try{
        const {username, password} = req.body
        if(await User.authenticate(username, password)){
            const token = jwt.sign({username}, SECRET_KEY)
            User.updateLoginTimestamp(username)
            return res.json({token})
        }else{
            throw new ExpressError('invalid username/password')
        }
    }catch(e){
        return next(e)
    }
})

/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.post('/register', async (res, req, next)=>{
    try{
        const {username} = await User.register(req.body)
        const token = jwt.sign({username}, SECRET_KEY)
        User.updateLoginTimestamp(username)
        return res.json({token})
    }catch(e){
        return next(e)
    }
})

module.exports = router