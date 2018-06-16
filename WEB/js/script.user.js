var selected = -1;

//-------------Model thêm tin khuyến mãi
//Lấy ra những hình ảnh được thêm
function showUploadedItem(source) {
    var list = document.getElementById("uploaded-image");
  
    var img = document.createElement("img");
    //img.style.width="100%";
    img.setAttribute("width", "100px");
    img.setAttribute("height", "auto");
    img.src = source;
    list.appendChild(img);
  }
  //Bắt sự kiện khi thêm ảnh mới
  var imageLocal = [];
  function themAnhDT(th){
      var i, img, reader, file;
      var localLen = th.files.length;
      if(localLen>5){
        alert("Bạn đã tải lên quá nhiều ảnh!\nHệ thống chỉ ghi nhận TỐI ĐA 5 ảnh đầu tiên!");
        localLen = 5;
      }
      //document.getElementById("uploaded-image").innerHTML = "...";
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
  function addTinDang() {
    var dat = [];
    var error = false;
    var errorList = [];
    // var optionSelected = document.getElementById("");
    // optionSelected.options[optionSelected.selectedIndex].value;

    dat[0] = MAKH;
    dat[1] = document.getElementById("tieude").value;//
    dat[2] = document.getElementById("loai").value;
    dat[3] = document.getElementById("danhmuc1").value;
    dat[4] = document.getElementById("danhmuc2").value;
    dat[5] = document.getElementById("giaban").value;//
    dat[6] = document.getElementById("tinhtrang").value;    
                                                        //
    dat[8] = document.getElementById("slogan").value;
    dat[9] = document.getElementById("mota").value;
    dat[10] = document.getElementById("ptgd").value;

    if (dat[1] == "") {
      error = true;
      errorList.push("Tiêu đề");
    }
    if (parseInt(dat[5]) < 0||dat[5]=="") {
      error = true;
      errorList.push("Giá bán(mua) không âm");
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
          dat2[0] = MAKH;
          dat2[1] = document.getElementById("tieude").value;
          dat2[2] = selected;

          
          var formDat = new FormData();
          formDat.append("anhDauVao", file);
          dat2 = JSON.stringify(dat2);
          formDat.append("data", dat2);
          formDat.append("nguon", "td");
          var request = $.ajax({
            url: "../xulyphp/xulyAnh.php",
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
        dat[7] = imageNames.substring(1,imageNames.length);
        $.ajax({
          url: "../xulyphp/nhapcsdl.php",
          data: { inputFunction: "themTinDang", info: dat },
          type: "post",
          success: function(output) {
            if (output == "1.successfully2.successfully3.successfully") {
              document.getElementById("addition-result").className =
                "alert alert-success";
              document.getElementById("addition-result").innerHTML =
                "<strong>Thành công!</strong> Tin đăng đã được khởi tạo.";
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
  