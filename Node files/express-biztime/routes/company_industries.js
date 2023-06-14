const express = require('express')
const ExpressError = require('../expressError')
const router = express.Router();
const db = require('../db')


router.get('/', async(req, res, next)=>{
    try{
        const results = await db.query(`SELECT * FROM company_industries`)
        return res.json({ company_industries: results.rows})
    } catch(e){
        return next(e)
    }
})

router.post('/', async (req, res, next)=>{
    try{
        const { company_code, industry_code } = req.body
        const results = await db.query('INSERT INTO company_industries (company_code, industry_code) VALUES ($1, $2) RETURNING company_code, industry_code', [company_code, industry_code])
        return res.status(201).json({ 'company_industries': results.rows[0]})
    }catch(e){
        return next(e)
    }
})


module.exports = router;
