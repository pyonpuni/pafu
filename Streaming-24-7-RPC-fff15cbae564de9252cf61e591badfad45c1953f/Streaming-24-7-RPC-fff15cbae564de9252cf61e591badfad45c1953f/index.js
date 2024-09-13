const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1283962483220025547')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('きみを想うたび')
    .setName('yume')
    .setDetails(`❀ ། ྀ༢`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://i.postimg.cc/wTXgYgRr/Untitled1052-20240912203447.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('赤く色づくの') //Text when you hover the Large image
    .addButton('♡', 'https://lit.link/en/fuyuesu')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `❀ ། ྀ༢`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
