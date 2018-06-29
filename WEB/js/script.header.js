var notify;
document.addEventListener("eventPromotion", function(e){
    alert("triggered");
    notify = new Notification(
        e.detail.title,
        {
            body: e.detail.body, // Nội dung thông báo
            icon: e.detail.icon, // Hình ảnh
            tag: e.detail.tag // Đường dẫn
        }
    );
});

notify.onclick = function () {
    window.location.href = this.tag; // Di chuyển đến trang cho url = tag
}