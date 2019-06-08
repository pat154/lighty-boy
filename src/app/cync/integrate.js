function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

window.addEventListener("DOMContentLoaded", function() {
  if (Cync) {
    const host = document.location.hostname;
    const webSocket = new WebSocket('ws://'+host+':8081');
    function attachListener() {
      Cync.on('play', (note) => {
        const hex = note.sampler.color;
        const colour = hexToRgb(hex);
        const action = {
          type: 'CYNC',
          action: {
            type: 'PLAY',
            id: hex,
            colour,
          }
        };
        try {
          webSocket.send(JSON.stringify(action));
        } catch (e) {
          alert(e);
        }
      });
    }
    if (webSocket.readyState !== 1) {
      webSocket.onopen = () => {
        attachListener();
      };
    } else {
      attachListener();
    }
  }
});