const router = require('express').Router();
const getUsername = require('../getUsername');

router.get('/dribbble/:username', async (req, res) => {
	const { username } = req.params;

	if (!username) {
		return res.status(400).json({
			code: 400,
			message: 'Username cannot be empty',
		});
	}

	const usernameControl = await getUsername(`https://dribbble.com/${username}/`);
	
	return res.status(200).json({
		dribbble: true, 
		used: usernameControl, 
		username,
		profile_url: `https://dribbble.com/${username}`
	});

});

module.exports = router;