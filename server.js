const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

app.get('/', (req, res)=>{
    res.send('Hello Express!!');
})

app.get('/about', (req, res)=>{
    res.render('about.hbs', {about:'About Page', year: '2018'})
})


app.listen(3000, ()=>console.log('Server Started'));