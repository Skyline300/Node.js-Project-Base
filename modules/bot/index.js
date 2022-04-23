require('dotenv').config(); //initialize dotenv
const { Client, Intents, Collection } = require('discord.js'); //import discord.js
const discord = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //create new client


client.commands = new Collection();
client.events = new Collection();


module.exports = {
  name:'index',
  async execute (){
    ['command_handlers.ts','event_handler.ts'].forEach(handler => {
      require(`./handlers/${handler}`)(client,discord);
    });
    
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
    
    //make sure this line is the last line
    client.login(process.env.TOKEN); //login bot using token
  }
}




