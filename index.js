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


// Message Handler
bot.on('message', (data) => {
  if (data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

// Response to Data
function handleMessage(message) {
  if (message.includes(' chucknorris')) {
    chuckJoke();
  } else if (message.includes(' yomama')) {
    yoMamaJoke();
  } else if (message.includes(' random')) {
    randomJoke();
  } else if (message.includes(' help')) {
    runHelp();
  }
}

// Tell a Chuck Norris Joke
function chuckJoke() {
  axios.get('http://api.icndb.com/jokes/random').then(res => {
    const joke = res.data.value.joke;

    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
  });
}
