const express = require('express')
const cors = require('cors')
const pdf = require('html-pdf')
const pdfTemplate = require('./documents/index')

const app = express()
const port = 3000
app.use(cors())

// post request
app.post('/create-pdf', (req, res) => {
    const data = req.body
    pdf.create(pdfTemplate(data), {}).toFile('receipt.pdf', (err) => {
        if (err) {
            res.status(500).send(Promise.reject())
        }
        res.status(200).send(Promise.resolve())
    })
})



app.listen(port, () => console.log(`Server is running on port ${port}`))