module.exports = (Discord, client, message) => {

    const prefix = "m!";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    console.log(args)
    const command = args.shift();
    console.log(command)

    const cmd = client.commands.get(command);

    if(cmd) {
        cmd.execute(client,message,args,Discord);}
    else{
        message.reply("please enter a valid command")
    }
}