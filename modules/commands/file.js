
module.exports = {
   name: "file",
   description: "test to see if file sending works" ,
   async function ( message,args){
    await message.channel.send('https://cdn.discordapp.com/attachments/799879938056257556/966522699084087387/IMG_9846.jpg');
  }
}