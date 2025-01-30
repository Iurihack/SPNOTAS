const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.post('/salvar-foto', (req, res) => {
    const imageData = req.body.image.split(',')[1]; // Remover o prefixo "data:image/png;base64,"
    const buffer = Buffer.from(imageData, 'base64');
    const filePath = path.join(__dirname, 'fotos', `foto-${Date.now()}.png`);

    fs.writeFile(filePath, buffer, (err) => {
        if (err) {
            return res.status(500).send('Erro ao salvar a foto.');
        }
        res.send('Foto salva com sucesso!');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
