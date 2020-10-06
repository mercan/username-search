const router = require('express').Router();
const getUsername = require('../getUsername');

router.get('/quora/:username', async (req, res) => {
	const { username } = req.params;

	if (!username) {
		return res.status(400).json({
			code: 400,
			message: 'Username cannot be empty',
		});
	}

	const usernameControl = await getUsername(
		`https://www.quora.com/profile/${username}/`
	);

	return res.status(200).json({ 
		quora: true, 
		used: usernameControl, 
		username,
		profile_url: `https://www.quora.com/profile/${username}`
	});

});

module.exports = router;