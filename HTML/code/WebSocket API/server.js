// Import HTTP module
// The HTTP module is a built-in Node.js module that is used to create an HTTP server
const http = require("http");

// Import WebSocket module
// The WebSocket module from the "websocket" package is used to create a WebSocket-based chat server
const WebSocketServer = require("websocket").server;

// Assign a custom port number to the chat server
// Create an HTTP server and make it listen on port 8080
// This HTTP server is used as a base for the WebSocket server
let socket = new WebSocketServer({
    httpServer: http.createServer().listen(8080, () => {
        console.log("Server listening on port 8080");
    }),
});

// Handle WebSocket connection requests, receive data, send responses, and close the connection
// `socket.on("request")` is triggered whenever a client sends a connection request
socket.on("request", function (request) {
    // Accept the connection request
    // The `request.accept` method creates a connection object for communication
    // `request.origin` is used to accept requests from any origin either http or https
    let connection = request.accept(null, request.origin);

    // Handle incoming messages from the client
    // Whenever the client sends data, the "message" event is triggered
    connection.on("message", function (message) {
        // Log the received message
        // The `utf8Data` property contains the message content in UTF-8 format
        console.log(message.utf8Data);

        // Send data back to the client
        // `sendUTF` is used to send UTF-8 formatted text messages
        connection.sendUTF("Hello_1");
        connection.sendUTF("Hello_2");

        // Send a delayed message to the client after 10 seconds
        setTimeout(() => {
            connection.send(new Date().toLocaleDateString());
        }, 10000);
    });

    // Handle connection closure
    // The "close" event is triggered when the connection is closed
    connection.on("close", function () {
        // Log a message indicating the connection is closed
        console.log("Connection closed");
    });
});
