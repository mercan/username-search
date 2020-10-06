const router = require('express').Router();
const getUsername = require('../getUsername');

router.get('/dokuzGag/:username', async (req, res) => {
	const { username } = req.params;

	if (!username) {
		return res.status(400).json({
			code: 400,
			message: 'Username cannot be empty',
		});
	}

	const usernameControl = await getUsername(`https://9gag.com/u/${username}/`);
	
	return res.status(200).json({
		dokuzGAG: true, 
		used: usernameControl, 
		username,
		profile_url: `https://9gag.com/u/${username}`,
	});

});

module.exports = router;