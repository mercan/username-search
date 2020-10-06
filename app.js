const app = require('express')();

// API Require
const pinterestSearch = require('./API/pinterest');
const instagramSearch = require('./API/instagram');
const dokuzGagSearch  = require('./API/dokuzGAG');
const dribbbleSearch  = require('./API/dribbble');
const wattpadSearch   = require('./API/wattpad');
const tumblrSearch    = require('./API/tumblr');
const githubSearch    = require('./API/github');
const redditSearch    = require('./API/reddit');
const mediumSearch    = require('./API/medium');
const quoraSearch     = require('./API/quora');

const allSearch = require('./API/allSearch');

// API App.use
app.use('/', pinterestSearch);
app.use('/', instagramSearch);
app.use('/', dokuzGagSearch);
app.use('/', dribbbleSearch);
app.use('/', wattpadSearch);
app.use('/', tumblrSearch);
app.use('/', githubSearch);
app.use('/', redditSearch);
app.use('/', mediumSearch);
app.use('/', quoraSearch);

app.use('/', allSearch);

app.listen(3000, () => console.log("Bağlandı."));