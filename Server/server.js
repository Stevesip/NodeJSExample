/**************************************************
** GAME SERVER **
This holds all the logic for the game server.
To run: Type the follow in a cmd window with Admin
privs
    node server.js

** Coded by Mickey "ScruffyFurn" MacDonald  2016 **
**************************************************/


/**************************************************
** Requirements
**************************************************/
var util = require("util"),
    express = require('express'),
    Player = require("./player").Player;
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 80;

/**************************************************
** Variables
**************************************************/
var players;
/**************************************************
** Init function
**************************************************/
function init()
{
  players = [];
  //Set handlers
  //setEventHandlers();
}
server.listen(port, function() {
  console.log("Server listening on port %d," port);
})

/**************************************************
** Set event handlers function
**************************************************/
var setEventHandlers = function() {
  io.sockets.on("connection", onSocketConnection);
}
/**************************************************
** On socket connection function
**************************************************/
function onSocketConnection(client) {
    util.log("New player has connected: " + client.id);
}

/**************************************************
** On client disconnect function
**************************************************/


/**************************************************
** On new player function
**************************************************/


/**************************************************
** On move player function
**************************************************/


/**************************************************
** Player find helper function
**************************************************/
function playerById(id) {
    var i;
    for (i = 0; i < players.length; i++) {
        if (players[i].id == id)
            return players[i];
    }    ;

    return false;
}

//Run init function to start the ball rolling
init();
