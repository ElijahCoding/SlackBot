var SlackBot = require('slackbots');
var axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-347545150338-375755979745-5pgKPAWS11IbSVoxFyUL1kvV', // Bot User OAuth
    name: 'jokebot'
});

// Start Handler
bot.on('start', function() {
  const params = {
    icon_emoji: ':smiley:'
  }

  bot.postMessageToChannel(
    'general',
    'Get Ready to Lauth with @jokebot!',
    params
  );
});

// Error Handler
bot.on('error', (err) => console.log(err));
