
const wait = require('util').promisify(setTimeout);

module.exports = {
    name: 'ping',
    description: 'this is a ping command for pinging people you really dont like',
    async function (message,args){
      var id = message.mentions.users.first().id
      var num = parseInt(args[1]);
      console.log(num) 
      if(!isNaN(num)){
        if(await message.guild.members.fetch(id)){
          for (let i = 0; i < num; i++) {
            await message.channel.send(`<@${id}>`)
            await wait(1000)
          }
        }else {
          await message.channel.send("invalid id you retard")
        }
      }else{
        await message.channel.send(` please enter a valid number `);
      }
      
    }
}