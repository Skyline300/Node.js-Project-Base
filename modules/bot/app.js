require('dotenv').config(); //initialize dotenv
const { Client, Intents, Collection,Guild } = require('discord.js'); //import discord.js
const discord = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //create new client

client.commands = new Collection();
client.events = new Collection();

console.log("Guild name: "+Guild.name);

['command_handlers','event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client,discord);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
    //make sure this line is the last line
    //login bot using token
