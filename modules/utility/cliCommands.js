module.exports = {
    name:"cliCommands",
    async function(command, args){
        switch(command){
            case "exit":
                process.exit(1);
            break;
            case "restart":
                mapFunctions.get("index").restart()
            break;
            case "reload":
                mapFunctions.clear()
                // Reloading the Function Map
                var path = `${mainDir}/modules`
                var folders = fs.readdirSync(path).filter(function (file) {
                    return fs.statSync(path+'/'+file).isDirectory();
                });
                folders.forEach(element => {
                    var commandFiles = fs.readdirSync(`${path}/${element}`).filter(file => file.endsWith('.js'));
                    for (const file of commandFiles) {
                        delete require.cache[require.resolve(`${path}/${element}/${file}`)];
                        const command = require(`${path}/${element}/${file}`);
                        mapFunctions.set(command.name, command);
                    }
                });
                console.log(`Reloaded ${mapFunctions.size} modules`)
                mapFunctions.get("index").execute()
            break;
            default:
                console.log("This is not a recognised command");
            break;
        };
    }
}
