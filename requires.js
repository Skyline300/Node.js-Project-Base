// Here you can define all the packages that you want to use
// You can also define variables that you want to be able to use in your entire project, like platform or mainDir in this example
// Make sure to define them like these examples here, as they will then be available as global variables throughout your entire project
require('dotenv').config();
start           = new Date()
platform        = process.platform
mainDir         = __dirname
fs              = require("fs");
readline        = require("readline");
config          = require("./config/config");
Discord         = require('discord.js');
nhentai         = require('nhentai');
const { Client, Intents, Collection,Guild } = require('discord.js');
client          = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
// const test      = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// test.on('messageCreate',(message)=>{
//     message.mentions.users.
// })