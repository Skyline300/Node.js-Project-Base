/*

                    DO NOT FORGET TO ADD EVERY SINGLE EVENT ADDED HERE TO THE REMOVELISTENER ARRAY

*/

client.removeAllListeners("channelDelete")
client.removeAllListeners("guildMemberAdd")
client.removeAllListeners("guildCreate")
client.removeAllListeners("guildDelete")
client.removeAllListeners("channelCreate")
client.removeAllListeners("messageCreate")
client.removeAllListeners("messageReactionAdd")
client.removeAllListeners("guildMemberUpdate")

client.on("channelDelete", async oldchannel =>{
})

client.on("guildMemberAdd", async newMember => {
})

client.on("guildCreate", async newGuild => {
})

client.on("guildDelete", async oldGuild => {
})

client.on("channelCreate", async newChannel => {
})

client.on("messageCreate", async msg => {
    mapFunctions.get("onMessage").function(msg)
})

client.on("messageReactionAdd", async (reaction, user) => {
})

client.on("guildMemberUpdate", async (oldMember, newMember) => {
})

// client.on("error", (e) => console.error(e));
// client.on("warn", (e) => console.warn(e));
// client.on("debug", (e) => console.info(e));