var notify;
document.addEventListener("eventPromotion", function(e) {
  alert("triggered");
  notify = new Notification(e.detail.title, {
    body: e.detail.body, // Nội dung thông báo
    icon: e.detail.icon, // Hình ảnh
    tag: e.detail.tag // Đường dẫn
  });
});

// notify = new Notification(
//     "Hít hà",
//     {
//         body: "e.detail.body", // Nội dung thông báo
//         icon: "./Images/Home/favicon.png", // Hình ảnh
//         tag: "./promotion-detail.php?MAKM="// Đường dẫn
//     }
// );

notify.onclick = function() {
  window.location.href = this.tag; // Di chuyển đến trang cho url = tag
};

/***************************************************************************************************************** */
/*********************************CÁC HÀM XỬ LÝ NGOÀI HỖ TRỢ THÊM CHO SERVICEWORKER*********************************/
/***************************************************************************************************************** */
//Hàm xin cấp quyền truy cập thông báo
$(document).ready(function() {
  // Nếu trình duyệt không hỗ trợ thông báo
  //if(Notification.permission=="default"
  // if(Notification.permission=="granted"||Notification.permission=="denied"){
  // 		return;
  // }

  if (!isEmptyUsername) {
    if (!window.Notification) {
      alert(
        "Trình duyệt của bạn không hỗ trợ Thông báo, bạn hãy lựa chọn các trình duyệt Chrome hoặc Firefox để có những trải nghiệm tốt nhất!"
      );
    }
    // Ngược lại trình duyệt có hỗ trợ thông báo
    else if (Notification.permission !== "granted") {
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
  }
});

//Hàm xuất thông báo
function displayNotification() {
  if (Notification.permission == "granted") {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: "Here is a notification body!", //Nội dung thông báo
        icon: "./Images/Home/favicon.png", //Hình ảnh kèm theo
        tag: "./promotion-detail.php?MAKM=" + "KM0001", //đường dẫn thông báo, dùng khi click vào
        image: "./Images/Promotion/item-0.jpg",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {
            action: "explore",
            title: "Explore this new world",
            icon: "Images/sort/details_open.png"
          },
          {
            action: "close",
            title: "Close notification",
            icon: "Images/sort/details_close.png"
          }
        ]
      };
      reg.showNotification("Hello world!", options);
    });
  }
}

/***************************************************************************************************************** */
/***************************************************************************************************************** */
