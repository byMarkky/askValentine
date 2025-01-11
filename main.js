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
app.get('/show', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'data.html'))
})

// API para guardar/leer el archivo
app.get('/load', (req, res) => {
    const filePath = path.join(__dirname, 'data.txt');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo: ', err)
            return res.status(500).send('Error al cargar el archivo')
        }
        res.send({ content: data })
    })
})

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

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Up on https://localhost:${process.env.PORT || PORT}`)
})