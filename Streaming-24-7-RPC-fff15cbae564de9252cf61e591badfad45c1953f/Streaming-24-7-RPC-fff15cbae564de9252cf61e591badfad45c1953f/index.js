const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('Your Client ID')
    .setType('STREAMING') //STREAMING, PLAYING, LISTENING.
    .setURL('Your Twitch URL') // or your yt url
    .setState('Your State')
    .setName('mrnekrozyt')
    .setDetails('Main Text')
    .setStartTimestamp(Date.now()) // remove this if you dont want the timestamp (the time it started the rpc)
    /*.setParty({         
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('Static Image or Animated Image') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Your Large Text') //Text when you hover the Large image
    .setAssetsSmallImage('Static Image or Animated Image') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Your Small Text') //Text when you hover the Small image
    .addButton('Button Name', 'Your Button URL')
    .addButton('Button Name', 'Your Button URL')
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline
})

client.login(process.env.TOKEN)






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
