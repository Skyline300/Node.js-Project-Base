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
const client          = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


// client.on('messageCreate',(message)=>{
//     message.author.id
// })