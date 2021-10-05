# widget-postmessage

Sample app that demonstrates the postMessage API used by the Zipwhip Widget.
 
- Parent window (index.html) embeds the Zipwhip Widget iframe (embed.zipwhip.com). 
- The parent window registers a javascript event listener for `message` events.
- The Widget sends a `message` event to the parent window when either of the following occur:
  - When a text message is sent from the Widget, it sends a `message` of type `sendMessage`.
  - When the Widget loads and when the unread count changes, it sends a `message` of type `unreadCount`.
- The parent window receives the event and logs a message in console showing the contents of the `event.data`.


## Resources:

- Tutorial - [How to Securely Send Messages Between Windows with postMessage](https://blog.teamtreehouse.com/cross-domain-messaging-with-postmessage)
- MDN Page -  [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
- [Sample App](https://johnchaffee.wiki/widget-postmessage/)