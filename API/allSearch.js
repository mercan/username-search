const router = require('express').Router();
const fetch  = require('node-fetch');

router.get('/allSearch/:username', async (req, res) => {
	const { username } = req.params;

	if (!username) {
		return res.status(400).json({
			code: 400,
			message: 'Username cannot be empty',
		});
	}

	const reqLinks = [
		"instagram", "pinterest", "dokuzGag", "dribbble", "wattpad", "github",
		"reddit", "tumblr", "medium", "quora",
	];

	const returnArray = [];

	async function usernameSearch(link) {
		await fetch(`https://username-search.herokuapp.com/${link}/${username}`, {
			method: 'GET',
		}).then(res => res.json())
		.then(resp => returnArray.push(resp));

		if (reqLinks.length === returnArray.length) {
			return res.status(200).json({ code: 200, response: returnArray });
		}
	}

	reqLinks.forEach(usernameSearch);
});

module.exports = router;