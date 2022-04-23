module.exports = {
    name: 'ping',
    description: 'this is a ping command for pinging people you really dont like',
    async execute (client, message,args){
      const id = client.guilds.cache.get(args[0]);
      var num = parseInt(args[1]);
      console.log(num) 
      if(!isNaN(num)){
        
        for (let i = 0; i < num; i++) {
          await message.channel.send("sex")
        }
          
      }else{
        await message.channel.send(` please enter a valid number `);
      }
      
    }
}