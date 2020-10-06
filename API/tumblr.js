const router = require('express').Router();
const getUsername = require('../getUsername');

router.get('/tumblr/:username', async (req, res) => {
	const { username } = req.params;

	if (!username) {
		return res.status(400).json({
			code: 400,
			message: 'Username cannot be empty',
		});
	}

	const usernameControl = await getUsername(`https://${username}.tumblr.com/`);
	
	return res.status(200).json({ 
		tumblr: true, 
		used: usernameControl, 
		username,
		profile_url: `https://${username}.tumblr.com`
	});

});

module.exports = router;