function createSocket() {
  const socket_url = "ws://localhost:3000/cable";
  const socket = new WebSocket(socket_url);

  socket.onopen = (event) => {
    console.log("Connected to server");
    const msg = {
      command: "subscribe",
      identifier: JSON.stringify({
        id: 1,
        channel: "AlertsChannel"
      }),
    }
    socket.send(JSON.stringify(msg));

  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "ping") {
      return;
    }
    if (data.message) {
      console.log(data.message);
    }
  };
  socket.onclose = function (event) {
    console.log("Socket closed");
  };
  socket.onerror = function (event) {
    console.log("Socket error", event);
  };
}
createSocket();