// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');
app.get('/profile', (req, resp) => {
  const user = {
    name: 'susheel singh',
    email: 'sush@gmail.com',
    city: 'noida',
    skills: ['php', 'js', 'c++'],
  };
  resp.render('profile', { user });
});
app.get('/login', (_, resp) => {
  resp.render('login');
});
app.listen(4412);
