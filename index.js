// --- RECEIVING MESSAGEES ---
window.onload = function () {
  console.log("ONLOAD");

  // // Setup event listener that logs when parent window receives message from child iframe
  window.addEventListener("message", (event) => {
    console.log(event);
    const { data = {} } = event;  // event.data
    const { type = "" } = data;  // data.type
    if (type === "sendMessage") {
      // console.log(data);
      alert("I got this message:\n" + JSON.stringify(event.data, null, 2));
    }
    if (type === "unreadCount") {
      // console.log(data);
      alert("Unread count changed!:\n" + JSON.stringify(event.data, null, 2));
    }
  });
};
