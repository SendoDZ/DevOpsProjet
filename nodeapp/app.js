// app.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Create the front-end HTML file dynamically
const fs = require('fs');
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(
    path.join(publicDir, 'index.html'),
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Vous êtes bien sur l'application d'Icham Benabbas</h1>
</body>
</html>`
);
