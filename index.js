//import json-server
const jsonserver= require('json-server');

//create server using create() method
const mediaPlayerServer=jsonserver.create()

//create a path/route to db.json file
const router=jsonserver.router('db.json')

//create a middle ware used to convert JSON data to JS object
const middleware=jsonserver.defaults();

//add middleware and router to mediaplayerserver
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router)

const PORT=4000;

//run the mediaplayerserver
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Mediaplayer server running on PORT ${PORT}`);
    
})
