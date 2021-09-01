// --- RECEIVING MESSAGEES ---
window.onload = function () {
  console.log("ONLOAD");

  // Setup event listener that logs message when parent window receives message from iframe
  window.addEventListener("message", (event) => {
    // console.log(event);
    console.log(event.data);
    alert("I got a message:\n" + JSON.stringify(event.data, null, 2));
  });

  // // Jake's fancy listener
  // window.addEventListener('message', (event) => {
  //   const {data = {}} = event;
  //   const {type = ''} = data;
  //   if(type === 'sendMessage'){
  //     console.log(data);
  //   }
  // });
};
