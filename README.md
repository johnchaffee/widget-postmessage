# widget-postmessage

Sample app that demonstrates the postMessage API used by the Zipwhip Widget.
 
- Parent window (index.html) embeds the Zipwhip Widget iframe (embed.zipwhip.com). 
- The parent window registers for an event listener "message".
- When a text message is sent from the Widget, it posts an event to the parent window. 
- The parent window receives the event and displays an alert and console message showing the contents of the event.data it received from the Widget.
