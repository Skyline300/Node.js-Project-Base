const included = require("../../requires")


module.exports = {
    name:"memberadd",
    event:true,
    async function(newMember){
        
        client.channels.get("971420133912375426").send(`${newMember.user.username} just joined the server`)
    }
}
