const express = require('express')
const cors = require('cors')
const pdf = require('html-pdf')
const pdfTemplate = require('./documents')

const app = express()
const port = 3000
app.use(express.json())
app.use(cors({
    origin: [
        'https://invoice-generator-v0.vercel.app',
        'https://invoice-generator-v0-backend.vercel.app',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST']
}))

// post request
app.post('/create-pdf', (req, res) => {
    const data = req.body
    //console.log(data)

    pdf.create(pdfTemplate(data)).toFile('receipt.pdf', (err) => {
        if (err) {
            //console.log('error')
            res.status(500).json({
                message: 'Something went wrong!'
            })
        }
        res.status(200).json({
            message: 'Success!'
        })
    })
})

// get request
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/receipt.pdf`)
})

app.all('*', (req, res) => {
    res.status(200).send('This is not the page you are looking for...')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))