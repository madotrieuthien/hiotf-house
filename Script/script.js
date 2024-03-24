// Nav

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Thanh tìm kiếm
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-icon').onclick = () =>
{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

// Đăng nhập
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

// KIỂM TRA ĐĂNG NHẬP
function KiemtraThongTinDangNhap ()
{
  // Kiểm tra sđt dn:
  var SoDienThoai = document.getElementById("tel-dn");

  if(SoDienThoai.value=="")
  {
      alert("Vui lòng nhập số điện thoại của bạn.");
      SoDienThoai.focus();
      return false;
  }

  //Kiểm tra matkhau dn:
  var password = document.getElementById("password-dn");

  if(password.value=="")
  {
      alert("Bạn chưa nhập mật khẩu.");
      password.focus();
      return false;
  }
  // Thông bao khi thông tin hợp lệ
  alert("Đăng nhập thành công!")
  return true;
  
}

// QUÊN MẬT KHẨU
document.addEventListener('DOMContentLoaded', function() {
  var formQMK = document.getElementById('quenmatkhau');
  var formDK = document.getElementById('dangky');
  var showButton = document.getElementById('show-qmk'); //ấn link hiện
  var hideButton = document.getElementById('fa-xmark_QMK'); //ấn X ẩn
 

  showButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    formQMK.style.display = 'block'; // Hiển thị form
    loginForm.classList.remove('active');
    formDK.style.display = 'none';
  });

  hideButton.addEventListener('click', function() {
    formQMK.style.display = 'none';
  });
});

// KIỂM TRA QUÊN MẬT KHAU
function KiemTraThongTinDatLaiMatKhau ()
{
  // Kiểm tra sđt dn:
  var SoDienThoai = document.getElementById("tel-qmk");

  if(SoDienThoai.value=="")
  {
      alert("Vui lòng nhập số điện thoại của bạn.");
      SoDienThoai.focus();
      return false;
  }
  // Thông bao khi thông tin hợp lệ
  alert("Chúng tôi đã gửi mật khẩu mới đến số điện thoại của bạn! Hãy kiểm tra tin nhắn.")
  return true;
  
}



// ĐĂNG KÝ
document.addEventListener('DOMContentLoaded', function() {
  var formDK = document.getElementById('dangky');
  var showButton = document.getElementById('show-dangky'); //ấn link hiện
  var hideButton = document.getElementById('fa-xmark_DK'); //ấn X ẩn
  var formQMK = document.getElementById('quenmatkhau');

  showButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    formDK.style.display = 'block'; // Hiển thị form
    loginForm.classList.remove('active');
    formQMK.style.display = 'none';
  });

  hideButton.addEventListener('click', function() {
      formDK.style.display = 'none';
  });
});

// KIỂM TRA ĐĂNG KÝ
function KiemTraThongTinDangKy()
            {
                
                // Kiểm tra Họ tên:
                var hoTen = document.getElementById("username-dk");

                if(hoTen.value=="")
                {
                    alert("Vui lòng nhập Họ tên.");
                    hoTen.focus();
                    return false;
                }

                // Kiểm tra email
                var email = document.getElementById("email-dk");
                re=/\w+@\w+\.\w+/;
                if (email.value==""){
                alert("Bạn chưa nhập Email.") ;
                email.focus();
                return false;
                }
                else
                if(re.test(email.value)==false){
                alert("Email không đúng định dạng!");
                email.focus();
                return false;
                }


                // Kiểm tra SĐT
                var SoDienThoai =document.getElementById("tel-dk");

                if(SoDienThoai.value=="")
                {
                    alert("Số điện thoại không được bỏ trống.");
                    SoDienThoai.focus();
                    return false;
                }


                // Kiểm tra password
                
                var MatKhau = document.getElementById("password-dk");

                if(MatKhau.value=="")
                {
                    alert("Vui lòng nhập Mật khẩu.");
                    MatKhau.focus();
                    return false;
                }

                // Kiểm tra nhập lại mật khẩu

                 var NhapLaiMatKhau = document.getElementById("password1-dk");

                if(NhapLaiMatKhau.value=="")
                {
                    alert("Vui lòng nhập lại mật khẩu");
                    NhapLaiMatKhau.focus();
                    return false;
                }

                var password1 = document.getElementById('password-dk').value;
                var password2 = document.getElementById('password1-dk').value;

                if(password1 !== password2)
                {
                    alert("Mật khẩu nhập lại không trùng khớp");
                    NhapLaiMatKhau.focus();
                    return false;
                }
                 var checkboxDangky = document.getElementById("checkboxDk1");
                if(checkboxDk1.checked)
                {
                // Thông bao khi thông tin hợp lệ
                alert("Đăng ký thành công! Xin chúc mừng.")
                return true;
                }
                else
                {
                  alert("Hãy đọc điều khoản và Đồng ý")
                  return false;
                }
            }






// GIỎ HÀNG
let shoppingCart = document.querySelector('.giohang');

document.querySelector('#shopping-cart').onclick = () =>
{
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}


// Slider
var swiper = new Swiper(".home-slider", 
{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 
    {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: 
    {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  // Đêm Ngược
  function startCountdown() {
    var endDate = new Date("2024-04-10 00:00:00"); // Thời gian kết thúc
    var timerInterval = setInterval(function () {
        var now = new Date().getTime(); // Thời gian hiện tại

        var distance = endDate - now; // Tính khoảng cách

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = days + " ngày " + hours + " giờ "
            + minutes + " phút " + seconds + " giây ";

        // Kiểm tra nếu đếm ngược kết thúc
        if (distance < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "Hết thời gian!";
        }
    }, 1000); // Cập nhật mỗi giây
}

window.onload = function () {
    startCountdown();
};











  // Thanh cuộn và Menu
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>
{
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  section.forEach
  ( 
    sec =>
    {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');


      if(top >= offset && top < offset + height)
      {   
        
        navLinks.forEach
        (
          links =>
          {
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
          }
          
          
          
        )
        if(id==='thucuong' || id==='bakery' || id==='pizza')
          {
            document.querySelector('menu').classList.add('active');
          }
      }


    }
    
  )
}












// Footer Kiểm Tra Mail Nhận Khuyến Mãi

function KiemTraNhanKhuyenMai ()
{
        // Kiểm tra email
        var email = document.getElementById("email-khuyenmai");
        var message = document.getElementById('message-khuyenmai')
        re=/\w+@\w+\.\w+/;
        if (email.value==""){
        message.innerText = "Bạn chưa nhập Email";
        email.focus();
        return false;
        }
        else
        if(re.test(email.value)==false){
        message.innerText = "Email không đúng định dạng!";
        email.focus();
        return false;
        }
        // Thông bao khi thông tin hợp lệ
        alert("Đăng ký thành công! Xin chúc mừng.")
        return true;
}
