var user_email = sessionStorage.getItem("user_email");
window.onload = function start() {
  if (user_email !== null) {
    document.getElementById("login_y_n_main").innerHTML = user_email;
    document.getElementById("login_y_n_main").style.fontSize = "18px";
    document.getElementById("login_").innerHTML = user_email.split("@")[0];
  }
};

function login_check() {
  if (user_email !== null) {
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
          document.getElementById("login_").innerHTML = "Log in";
          sessionStorage.clear();
          location.href = "login.html";
        });
      }
    });
  } else {
    location.href = "login.html";
  }
}
