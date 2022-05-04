const included = require("../../requires")
const prefix = "m!";
module.exports = {
    name: "onMessage",
    event: true,
    async function(msg){
        if(msg.content == `<@!${client.user.id}>` || msg.content == `<@${client.user.id}>`){  // I dont know what the ! means, so i just make both possible ways as checks
            msg.channel.send(`I have been summoned, how may i help you today?\nIf you are unsure, try \`${prefix}help\` for a list of the commands i can offer`)
            return
        }
        //console.log(msg.content);

        if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot && msg.author.id) return;
        msg.content = msg.content.replace(/  +/g, ' ')
        const args = msg.content.slice(prefix.length).trim().split(" ");
        const command = args.shift().toLowerCase();
        //console.log(`${msg.author.username}: ${command}   ${args}`)
        switch(msg.guild){
            default:    //        Server Functions
                try {
                    var permsRequest = true //msg.guild.members.cache.get(client.user.id).hasPermission("ADMINISTRATOR")
                } catch (error) {
                    var permsRequest = false
                }
                if(permsRequest != true){
                    if(command == "help"){
                        mapFunctions.get(command).function(msg, args, true)
                    }else{
                        // Permissions not present (needs to be implemented above)
                    }
                }else{
                    try {
                        if(mapFunctions.get(command).disabled != true){
                            if(mapFunctions.get(command).event != true){
                                mapFunctions.get(command).function(msg, args) // Here is where the command gets executed when everything worked
                            }
                        }else{
                            // Command didnt work
                        }
                    } catch (error) {}
                }
            break;
            case null:  //         DM Functions

            break;
        }
    }
}