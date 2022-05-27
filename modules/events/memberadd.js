const included = require("../../requires")


module.exports = {
    name:"memberadd",
    event:true,
    async function(newMember){
        console.log(newMember.user.username)
        newMember.guild.channels.cache.get("971420133912375426").send(`${newMember.user.username} just joined the server!`)
        
    }
}
