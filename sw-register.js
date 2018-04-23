//register
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(registration => {
      console.log("SW registered");
    })
    .catch(err => {
      console.log("SW error", err);
    });
}