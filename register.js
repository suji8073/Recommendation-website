function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const password1 = document.getElementById("password1").value;

  if (password !== password1) {
    Swal.fire({
      icon: "error",
      text: "비밀번호가 일치하지 않습니다.",
      timer: 1500,
    });
  } else {
    var reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(email)) {
      Swal.fire({
        icon: "error",
        text: "이메일 형식이 맞지 않습니다.",
        timer: 1500,
      });
    } else {
      if (String(password).length < 8) {
        Swal.fire({
          icon: "error",
          text: "비밀번호는 8자 이상이여야 합니다.",
          timer: 1000,
        });
      } else {
        //회원가입!

        const data = {
          records: [
            {
              fields: {
                email: email,
                password: password,
                rec1: null,
                rec2: null,
                rec3: null,
              },
            },
          ],
        };

        const data1 = {
          records: [
            {
              id: "recNe4RsgOw5HNHDs",
              fields: {
                email: email,
                password: password,
                type: null,
                rec1: null,
                rec2: null,
                rec3: null,
                survey1: 0,
                survey2: 0,
                survey3: 0,
                survey_rec: 0,
              },
            },
          ],
        };

        let axiosConfig = {
          Authorization: "Bearer keyTvIqUQEHqc8ufv",
          "Content-Type": "application/json",
        };

        fetch("https://api.airtable.com/v0/appyJbFaZcmTQCGLQ/Table%201", {
          method: "POST",
          body: JSON.stringify(data),
          headers: axiosConfig,
        });

        fetch("https://api.airtable.com/v0/appyJbFaZcmTQCGLQ/Table%201", {
          body: JSON.stringify(data1),
          headers: axiosConfig,
          method: "PATCH",
        });

        Swal.fire({
          text: "회원가입이 완료되었습니다..",
          icon: "success",
          timer: 1500,
        }).then(function () {
          //location.href = "./login.html";
        });
      }
    }
  }
}
