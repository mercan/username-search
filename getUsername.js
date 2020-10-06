const fetch  = require('node-fetch');

module.exports = link => {
	return fetch(link, { method: 'GET' })
	.then(res => res.status === 404 ? false : true)
	.catch(console.error);
};