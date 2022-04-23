
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports = (Discord, client, message) =>{
    console.log("event handler is up!");
    client.user.setActivity("your Mom",{ type: 'WATCHING' });
}