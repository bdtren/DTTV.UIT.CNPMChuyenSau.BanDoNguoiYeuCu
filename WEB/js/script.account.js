//Lấy ra hình ảnh được thêm
function showUploadedItem(source) {
    var list = document.getElementById("uploaded-image");
    list.innerHTML = "";
  
    var img = document.createElement("img");
    //img.style.width="100%";
    img.setAttribute("width", "120px");
    img.setAttribute("height", "auto");
    img.src = source;
    list.appendChild(img);
  }
  //Bắt sự kiện khi thêm ảnh mới
  var imageLocal = [];
  function themAvatar(th){
      var i, img, reader, file;
      var localLen = th.files.length;
      if(localLen>1){
        alert("Bạn đã tải lên quá nhiều ảnh!\nHệ thống chỉ ghi nhận TỐI ĐA 1 ảnh đầu tiên!");
        localLen = 1;
      }
      for (i = 0; i < localLen; i++) {
        file = th.files[i];
        if (!file.type.match(/image.*/)) {
          alert(
            "Sai định dạng, định đạng hình ảnh cho phép: jpg, jpeg, png, bmp, gif, svg"
          );
          continue;
        }
        reader = new FileReader();
        reader.onloadend = function(e) {
          showUploadedItem(e.target.result);
        };
        reader.readAsDataURL(file);
        imageLocal.push(file);
  
      }
  }
  //Thêm khuyến mãi mới
  function addKhuyenMai() {
    var dat = [];
    var error = false;
    var errorList = [];
  
    dat[0] = nv[0]["MANV"];
    dat[1] = document.getElementById("ipTitle").value;
    dat[2] = document.getElementById("ipStartday").value;
    dat[3] = document.getElementById("ipEndday").value;
    dat[5] = document.getElementById("ipContent").value;
  
    if (dat[1] == "") {
      error = true;
      errorList.push("Tiêu đề");
    }
    if (new Date(dat[2]) > new Date(dat[3])) {
      error = true;
      errorList.push("(Ngày bắt đầu lớn hơn ngày kết thúc)");
    } else {
      if (dat[2] == "") {
        error = true;
        errorList.push("Ngày bắt đầu");
      }
      if (dat[3] == "") {
        error = true;
        errorList.push("Ngày kết thúc");
      }
    }
    if (imageLocal.length==0) {
      error = true;
      errorList.push("Ảnh minh họa");
    }
    if (dat[5] == "") {
      error = true;
      errorList.push("Nội dung khuyến mãi");
    }
    if (error) {
      document.getElementById("addition-result").className = "alert alert-danger";
      document.getElementById("addition-result").innerHTML =
        '<a class="close" onclick="$(this).parent().hide()">&times;</a>\n<strong>Thất bại!</strong> vui lòng điền thông tin <i>' +
        errorList.join(", ") +
        "</i>";
  
      $("#addition-result").show();
      return;
    }
  
      //Up load hình ảnh
      var imageNames = "";
      var promises=[];
  
      for(var i = 0;i<imageLocal.length;i++){
        file = imageLocal[i];
        var dat2 = [];
          dat2[0] = nv[0]["MANV"];
          dat2[1] = document.getElementById("ipTitle").value;
          dat2[2] = document.getElementById("ipStartday").value.replace(/\-/g, "");
          dat2[3] = document.getElementById("ipEndday").value.replace(/\-/g, "");
          //alert(JSON.stringify(dat));
          
          var formDat = new FormData();
          formDat.append("anhDauVao", file);
          dat2 = JSON.stringify(dat2);
          formDat.append("data", dat2);
          var request = $.ajax({
            url: "../../xulyphp/xulyAnh.php",
            data: formDat,
            type: "post",
            processData: false,
            contentType: false,
            cache: false,
            success: function(output) {
              imageNames += (i == 0) ? "" : ";";
              imageNames += output;
              //showUploadedItem(output);
              //alert(imageNames);
            }
          });
          promises.push(request);
      }
      $.when.apply(null, promises).done(function(){
        //alert(imageNames);
        dat[4] = imageNames.substring(1,imageNames.length);
        $.ajax({
          url: "../../xulyphp/xulyAdmin.php",
          data: { callFunction: "themKhuyenMai", data: dat },
          type: "post",
          success: function(output) {
            if (output == "successfully") {
              document.getElementById("addition-result").className =
                "alert alert-success";
              document.getElementById("addition-result").innerHTML =
                "<strong>Thành công!</strong> Khuyến mãi đã được khởi tạo.";
            } else {
              document.getElementById("addition-result").className =
                "alert alert-danger";
              document.getElementById("addition-result").innerHTML =
                "<strong>Thất bại!</strong> Không thể lưu kết quả, mã lỗi:" + output;
            }
            $("#addition-result").show();
          }
        });
     })
      
    
    //alert(JSON.stringify(dat));
    
  }
  