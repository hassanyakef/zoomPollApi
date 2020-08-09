const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios');

const clientID = '';
const clientSecret = '';
const base64Encode = ''

router.get('/oauth/redirect', async (req, res) => {
  const requestToken = req.query.code;
  try {
    const response = await axios({
      method: 'post',
      url: `https://zoom.us/oauth/token?grant_type=authorization_code&code=${requestToken}`,
      headers: {
        accept: 'application/json',
        "Authorization": `Basic ${base64Encode}`
      }
    });
    const accessToken = response.data.access_token;
    res.redirect(`/main.html?access_token=${accessToken}`)
  } catch (error) {
    console.log({error});
  }
});

router.post('/createPoll', async (req, res) => {
  // ...
});

module.exports = router;