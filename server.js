const express = require('express');
const server = express();
// server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));
server.set('views', __dirname+'/views');
server.listen(7000);

/*-------------------- Rout Middlewares --------------------------*/
server.get('/', (_, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

server.get('/home', (_, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

server.get('/blog', (_, res) => {
    res.sendFile(__dirname+'/views/blog.html');
});

server.get('/login', (_, res) => {
    res.sendFile(__dirname+'/views/contact.html');
});

server.get('/portfolio', (_, res) => {
    res.sendFile(__dirname+'/views/portfolio.html');
});
server.get('/portfolio-item', (_, res) => {
    res.sendFile(__dirname+'/views/portfolio-item.html');
});


server.get('/admin', (req, res) => {
    if (req.url.includes("?role")) { 
        if (req.query.role.toLocaleLowerCase() == 'admin')
        res.sendFile(__dirname+'/views/admin.html');
        else
        res.sendFile(__dirname+'/views/contact.html');
    } else
    res.sendFile(__dirname+'/views/contact.html');
});


server.use((_, res) => {
    res.sendFile(__dirname+'/views/404.html');
});