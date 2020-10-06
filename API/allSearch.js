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
		`instagramSearch/${username}`,
		`pinterestSearch/${username}`,
		`dokuzGagSearch/${username}`,
		`dribbbleSearch/${username}`,
		`wattpadSearch/${username}`,
		`githubSearch/${username}`,
		`redditSearch/${username}`,
		`tumblrSearch/${username}`,
		`mediumSearch/${username}`,
		`quoraSearch/${username}`,
	];

	const returnArray = [];

	async function usernameSearch(link) {
		await fetch(`https://username-search.herokuapp.com/${link}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		}).then(res => res.json()).then(response => returnArray.push(response));

		if (reqLinks.length === returnArray.length) {
			return res.status(200).json({ code: 200, response: returnArray });
		}
	}

	reqLinks.forEach(usernameSearch);
});

module.exports = router;