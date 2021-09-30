// --- RECEIVING MESSAGEES ---
// // Setup event listener that logs when parent window receives message from child iframe
window.addEventListener("message", (event) => {
  console.log(event);
  const { data = {} } = event; // event.data
  const { type = "" } = data; // data.type
  if (type === "sendMessage") {
    console.log("sendMessage:");
    console.log(data);
    alert("A message has been sent:\n" + JSON.stringify(event.data, null, 2));
  }
  if (type === "unreadCount") {
    console.log("unreadCount:");
    console.log(data);
    alert("The unread count may have changed:\n" + JSON.stringify(event.data, null, 2));
  }
});
