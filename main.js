const express = require('express')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Servir el html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/date', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'selectDate.html'))
})
app.get('/foods', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'foods.html'))
})
app.get('/desserts', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'dessert.html'))
})
app.get('/activities', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'activities.html'))
})
app.get('/thanks', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'thanks.html'))
})

// API para guardar el archivo
app.post('/save', (req, res) => {
    const { content } = req.body

    console.log(content)

    fs.writeFile('data.txt', content, (err) => {
        if (err) {
            console.error('Error al escribir el archivo: ', err)
            return res.status(500).send('Error al guardar el archivo.')
        }
        res.status(200).send('Archivo guardado exitosamente');
    })
})

app.listen(PORT, () => { console.log(`Server Up on https://localhost:${PORT}`) })