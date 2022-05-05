// Loading required packages
require("./requires.js")
console.log(start);


// Initialising map to be used to store the functionality later on for reloadability
mapFunctions = new Map()


// Loading the Function Map
var path = `${mainDir}/modules`
var folders = fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
});
folders.forEach(element => {
    var commandFiles = fs.readdirSync(`${mainDir}/modules/${element}`).filter(file => file.endsWith('.js') && !file.startsWith("index"));
    for (const file of commandFiles) {
        delete require.cache[require.resolve(`${mainDir}/modules/${element}/${file}`)];
        const command = require(`${mainDir}/modules/${element}/${file}`);
        mapFunctions.set(command.name, command);
    }
});


require('dotenv').config(); //initialize dotenv
// const { Client, Intents, Collection,Guild } = require('discord.js'); //import discord.js
// const discord = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //create new client

// client.commands = new Collection();
// client.events = new Collection();

// console.log("Guild name: "+Guild.name);

// ['command_handlers','event_handler'].forEach(handler => {
//   require(`./handlers/${handler}`)(client,discord);
// });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // The startup information for the project, here you can add stuff that might be nice to see when the app starts
  mapFunctions.get("Startup_function").function()
  console.log("------------------------------------ Status ------------------------------------");
  console.log(__dirname);
  console.log(platform);
  console.log(`The Startup took ${new Date() - start}ms`)
  console.log(`${mapFunctions.size} Function modules loaded`);
  console.log("--------------------------------------------------------------------------------");
});
// --------------------------------------------------------- CLI COMMANDS --------------------------------------------------------- //

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", data =>{
    const args = data.trim().split(" ");
    const command = args.shift().toLowerCase();
    mapFunctions.get("cliCommands").function(command, args)
})


client.on('messageCreate')

client.login(process.env.TOKEN);
    //make sure this line is the last line
    //login bot using token