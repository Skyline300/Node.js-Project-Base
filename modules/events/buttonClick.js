const included = require("../../requires")


module.exports = {
    name:"buttonClick",
    event:true,
    async function(button){
        // button.reply.edit("Test")
        // console.log();
        // button.message.channel.send("Heya")
        // button.reply.think(`${button.clicker.user.tag} clicked button!`, true).then(() => {
        // });
        // button.reply.edit("Test").catch(error => {
        //     console.log(error.message);
        // })
        button.reply.defer()
    }
}