import consumer from "channels/consumer"

consumer.subscriptions.create("AlertsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Hello from AlertsChannel!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
