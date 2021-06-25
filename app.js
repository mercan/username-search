const app = require('express')();

// API Require
const pinterestSearch = require('./API/pinterest');
const instagramSearch = require('./API/instagram');
const dokuzGagSearch = require('./API/dokuzGAG');
const dribbbleSearch = require('./API/dribbble');
const wattpadSearch = require('./API/wattpad');
const tumblrSearch = require('./API/tumblr');
const githubSearch = require('./API/github');
const redditSearch = require('./API/reddit');
const mediumSearch = require('./API/medium');
const quoraSearch = require('./API/quora');
const allSearch = require('./API/allSearch');

// API App.use
const [
  pinterestSearch,
  instagramSearch,
  dokuzGagSearch,
  dribbbleSearch,
  wattpadSearch,
  tumblrSearch,
  githubSearch,
  redditSearch,
  mediumSearch,
  quoraSearch,
  quoraSearch
].forEach((i) => app.use('/', i));

app.listen(process.env.PORT || 3000, () => console.log('Başlatıldı'));
