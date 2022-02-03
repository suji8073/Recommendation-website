document.getElementById("login_y_n_main").innerHTML = "suzy8073@naver.com";
document.getElementById("login_y_n_main").style.fontSize = "18px";

function login_check() {
  if (document.getElementById("login_y_n_main").value != "Log in") {
    Swal.fire({
      text: "로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#BDBDBD",
      confirmButtonText: "로그아웃",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "로그아웃 되었습니다.",
          icon: "success",
          timer: 1500,
        }).then(function () {
          document.getElementById("login_y_n_main").innerHTML = "Log in";
          document.getElementById("login_y_n_main").style.fontSize = "24px";
        });
      }
    });
  } else {
    location.href = "login.html";
  }
}
