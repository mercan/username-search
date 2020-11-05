const fetch  = require('node-fetch');

module.exports = link => {
	return fetch(link, { method: 'GET' })
	.then(res => res.status !== 404 ? true : false)
	.catch(console.error);
};
