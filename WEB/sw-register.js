//register
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
  .register("./service-worker.js")
  .then(registration => {
    console.log("SW registered");
    //Xin thông báo
    if (!window.Notification) {
      alert(
        "Trình duyệt của bạn không hỗ trợ Thông báo, bạn hãy lựa chọn các trình duyệt Chrome hoặc Firefox để có những trải nghiệm tốt nhất!"
      );
      return;
    }
    // Ngược lại trình duyệt có hỗ trợ thông báo
    if (Notification.permission !== "granted") {
      // Gửi lời mời cho phép thông báo
      Notification.requestPermission().then(function(p) {
        // Nếu không cho phép
        if (p === "denied") {
          alert(
            "Bạn đã không cho phép thông báo trên trình duyệt, xin hãy cho phép thông báo trên trình duyệt để nhận các thông báo mới nhất!"
          );
        }
        // Ngược lại cho phép
        else {
          //alert('Bạn đã cho phép thông báo trên trình duyệt, hãy bắt đầu thử Hiển thị thông báo.');
        }
      });
    }
    //lấy endpoint
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        window.gauntface.CONSTANTS.APPLICATION_KEYS.publicKey
      )
    };

    return registration.pushManager.subscribe(subscribeOptions);
  })
  .then(function(pushSubscription) {
    console.log(
      "Received PushSubscription: ",
      JSON.stringify(pushSubscription)
    );
    // const subscriptionObject = {
    //   endpoint: pushSubscription.endpoint,
    //   keys: {
    //     p256dh: pushSubscription.getKeys('p256dh'),
    //     auth: pushSubscription.getKeys('auth')
    //   }
    // };
    //alert(JSON.stringify(pushSubscription));
    subscriptionObject = JSON.stringify(pushSubscription);
    var id ="";
    if(location.href.match("/admin/")){
      id ="NV0000";
      if(nv&&nv[0]["MANV"]){
        id = nv[0]["MANV"];
      }
    }else{
      id ="KH0000";
      if(MaKH&&MaKH!=""){
        id = MaKH;
      }
    }
    

    sendSubscriptionToServer(id, pushSubscription);
    return pushSubscription;
  })
  .catch(err => {
    console.log("SW error", err);
  });
}


//Ép kiểu base64 thành Uint8 để gửi lên server 
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

//Lưu vào csdl
function sendSubscriptionToServer(id, subscription) {
  //alert(JSON.stringify(subscription));

  $.ajax({
      url : "./xulyphp/xulythongbao.php",
      type : "post",
      dateType:"text",
      data :{ callFunction: "nhapJsonSubscription", id: id, data: JSON.stringify(subscription) }, 
      success: function(output) {
        //alert(output);
      }
  });
}

