const socket = new WebSocket("ws://localhost:3455/daichiService");

socket.onopen = function() {
    console.log("Connected to the WebSocket server.");
};

socket.onmessage = function(event) {
    const commandData = JSON.parse(event.data);
    document.getElementById("response").innerText = `Received: Command: ${commandData.index}, Payload: ${JSON.stringify(commandData.coordinates)}`;
};

socket.onclose = function() {
    console.log("Disconnected from WebSocket server.");
};

function sendCommand(commandData) {
    socket.send(JSON.stringify(commandData));
    console.log(`Sent: Index: ${commandData.index}, Coordinates:`, commandData.coordinates);
}

export { sendCommand };