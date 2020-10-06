const router = require('express').Router();
const getUsername = require('../getUsername');

router.get('/reddit/:username', async (req, res) => {
	const { username } = req.params;

	if (!username) {
		return res.status(400).json({
			code: 400,
			message: 'Username cannot be empty',
		});
	}

	const usernameControl = await getUsername(`https://www.reddit.com/user/${username}/`);
	
	return res.status(200).json({ 
		reddit: true, 
		used: usernameControl, 
		username,
		profile_url: `https://www.reddit.com/user/${username}`
	});

});

module.exports = router;