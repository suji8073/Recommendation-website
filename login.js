function press() {
  if (window.event.keyCode == 13) {
    login_check();
  }
}

function login_check() {
  const input_ID = document.getElementById("ID").value;
  const input_PW = document.getElementById("PW").value;

  if (input_ID == "") {
    Swal.fire({
      icon: "error",
      text: "이메일을 입력하세요.",
      timer: 1500,
    });
    document.getElementById("ID").focus();
  } else if (input_PW == "") {
    Swal.fire({
      icon: "error",
      text: "보안코드를 입력하세요.",
      timer: 1500,
    });
    document.getElementById("PW").focus();
  } else {
    fetch(
      "https://api.airtable.com/v0/appyJbFaZcmTQCGLQ/Table%201?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer keyTvIqUQEHqc8ufv",
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Unable ");
        }
      })
      .then((data) => {
        //{password: 'test1234', rec2: '5', rec1: '3', email: 'test22@kw.ac.kr'}
        var i;
        for (i = 0; i < data.records.length; i++) {
          if (
            data.records[i].fields.email === input_ID &&
            data.records[i].fields.password === input_PW
          ) {
            //로그인 성공
            console.log("로그인 성공");
            sessionStorage.setItem("user_email", data.records[i].fields.email);
            sessionStorage.setItem("user_pw", data.records[i].fields.password);
            sessionStorage.setItem("rec1", data.records[i].fields.rec1);
            sessionStorage.setItem("rec2", data.records[i].fields.rec2);
            sessionStorage.setItem("rec3", data.records[i].fields.rec3);

            var user_email = sessionStorage.getItem("user_email");
            var user_pw = sessionStorage.getItem("user_pw");

            console.log(user_email);
            console.log(user_pw);

            Swal.fire({
              icon: "success",
              text: "로그인에 성공하셨습니다!",
              timer: 1500,
            }).then(function () {
              location.href = "./index.html";
            });
          } else {
            //로그인 실패
            console.log("로그인 실패");
            Swal.fire({
              icon: "error",
              text: "로그인 실패. 다시 입력해주세요.",
              timer: 1500,
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
