process.env.NODE_ENV = 'test'

const request = require('supertest')
const app = require('../app')
const db = require('../db')

let testCompany;
beforeEach(async ()=>{
    const result = await db.query(`INSERT INTO companies (code, name, description) VALUES ('npm', 'Node Package Manager', 'idk') RETURNING code, name, description`)
    testCompany = result.rows[0]
})

afterEach(async ()=>{
    await db.query(`DELETE FROM companies`)
})

afterAll(async ()=>{
    await db.end()
})

describe('GET /companies', ()=>{
    test('get all companies', async ()=>{
        const res = await request(app).get('/companies')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ companies: [testCompany]})
    })
})

describe('GET /companies/:code', ()=>{
    test('get single company', async ()=>{
        const res = await request(app).get(`/companies/${testCompany.code}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ company: testCompany })
    })
    test('responds with 404 if no company', async ()=>{
        const res = await request(app).get('/companies/whoville')
        expect(res.statusCode).toBe(404)
    })
})

describe('POST /companies' ,()=>{
    test('add company', async()=>{
        const res = await request(app).post('/companies').send({ name: 'Apple', description: 'creator of OSX'})
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({ company: { code: 'apple', name: 'Apple', description: 'creator of OSX'}})
    })
})

describe('PUT /companies/:code', ()=>{
    test('update single company', async ()=>{
        const res = await request(app).put(`/companies/${testCompany.code}`).send({ name: 'Node', description: 'holder of everything'})
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({  company: { code: 'npm', name: 'Node', description: 'holder of everything'}})
    })
    test('responds 404 if no company', async ()=>{
        const res = await request(app).put('/companies/hulu').send({ name: 'Node', description: 'holder of everything'})
        expect(res.statusCode).toBe(404)
    })
})

describe('DELETE /companies/:code', ()=>{
    test('delete company', async ()=>{
        const res = await request(app).delete(`/companies/${testCompany.code}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ msg: 'Deleted' })
    })
})
