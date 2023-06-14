const express = require('express')
const ExpressError = require('../expressError')
const router = express.Router();
const db = require('../db')
const slugify = require('slugify')

router.get('/', async (req, res, next)=>{
    try{
        const results = await db.query(`SELECT * FROM companies`)
        return res.json({ 'companies': results.rows})
    } catch (e){
        return next(e)
    }
})

router.get('/:code', async (req, res, next)=>{
    try{
        const results = await db.query('SELECT c.code, c.name, c.description, i.industry FROM companies AS c INNER JOIN company_industries AS ci ON c.code = ci.company_code INNER JOIN industries AS i ON ci.industry_code = i.code WHERE c.code = $1', [req.params.code])
        if (results.rows.length === 0){
            throw new ExpressError(`Cannot find company with code of ${code}`, 404)
        }
        const { code, name, description } = results.rows[0]
        const industry = results.rows.map(r => r.industry)
        return res.send({ code, name, description, industry })
    }catch (e){
        return next(e)
    }
})


router.post('/', async (req, res, next)=>{
    try{
        const { name, description } = req.body;
        const code = slugify(name, {lower: true})
        const results = await db.query('INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description', [code, name, description]);
        return res.status(201).json({ 'company': results.rows[0] })
    }catch(e){
        return next(e)
    }
})

router.put('/:code', async (req, res, next)=>{
    try{
        const { code } = req.params;
        const { name, description } = req.body;
        const results = await db.query("UPDATE companies SET name=$1, description=$2 WHERE code=$3 RETURNING code, name, description", [name, description, code]);
        if(results.rows.length === 0){
            throw new ExpressError(`Cannot update company with code of ${code}`, 404)
        }
        return res.send({ 'company': results.rows[0] })
    }catch(e){
        return next(e)
    }
})

router.delete('/:code', async(req, res, next)=>{
    try{
        const { code } = req.params
        const results = db.query('DELETE FROM companies WHERE code=$1 RETURNING code', [code])
        if(results.rows == 0){
            throw new ExpressError(`No such company ${code}`, 404)
        }
        return res.json({ 'msg': 'Deleted'})
    }catch(e){
        return next(e)
    }
})



module.exports = router;


// SELECT companies.name, industries.industry
// FROM companies
// JOIN company_industries ON companies.code = company_industries.company_code
// JOIN industries ON industries.code = company_industries.industry_code
// WHERE companies.code = company_code;
