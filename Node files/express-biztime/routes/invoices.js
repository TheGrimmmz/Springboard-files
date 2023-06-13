const express = require('express')
const ExpressError = require('../expressError')
const router = express.Router();
const db = require('../db')


router.get('/', async (req, res, next)=>{
    try{
        const results = await db.query(`SELECT * FROM invoices`)
        return res.json({ invoices: results.rows})
    } catch (e){
        return next(e)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        const { id } = req.params;
        const results = await db.query('SELECT * FROM invoices INNER JOIN companies ON (invoice.comp_code = companies.code) WHERE id = $1', [id])
        if (results.rows.length === 0){
            throw new ExpressError(`Cannot find invoice with id of ${id}`, 404)
        }
        const data = results.rows[0]
        const invoice = {
            id: data.id,
            company: {
                code: data.comp_code,
                name: data.name,
                description: data.description
            },
            amt: data.amt,
            paid: data.paid,
            add_date: data.add_date,
            paid_date: data.paid_date
        }
        return res.send({ 'invoice': invoice })
    }catch (e){
        return next(e)
    }
})


router.post('/', async (req, res, next)=>{
    try{
        const { comp_code, amt } = req.body;
        const results = await db.query('INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) RETURNING id, comp_code, amt, paid, paid_date', [comp_code, amt]);
        return res.status(201).json({ 'invoice': results.rows[0] })
    }catch(e){
        return next(e)
    }
})

router.put('/:id', async (req, res, next)=>{
    try{
        const { id } = req.params;
        const { amt, paid } = req.body;
        let paidDate=null
        const results = await db.query('SELECT paid FROM invoices WHERE id=$1', [id]);
        if(results.rows === 0){
            throw new ExpressError(`Cannot update invoice with id of ${id}`, 404)
        }
        const currPaidDate = results.rows[0].paid_date;
        if(!currPaidDate && paid){
            paidDate = new Date()
        } else if (!paid) {
            paidDate = null
        }else{
            paidDate = currPaidDate
        }
        const newResult = await db.query('UPDATE invoices SET amt=$1, paid=$2, paid_date=$3 WHERE id=$4 RETURNING id, comp_code, amt, paid, add_date, paid_date', [amt, paid, paidDate, id])
        return res.send({ invoices: newResult.rows[0] })
    }catch(e){
        return next(e)
    }
})

router.delete('/:id', async(req, res, next)=>{
    try{
        const results = db.query('DELETE FROM invoices WHERE id=$1', [req.params.id])
        if(results.rows === 0){
            throw new ExpressError(`No such invoice: ${id}`, 404)
        }
        return res.json({ 'msg': 'Deleted'})
    }catch(e){
        return next(e)
    }
})







module.exports = router;
