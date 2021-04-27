const emailBtn = document.getElementById("email-button");


emailBtn.addEventListener('click', function (event) {
    const email = document.getElementById('email');
    const emailVal = email.value;
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const error = document.getElementById('error');
    event.preventDefault();
    if (emailVal == "") {
        document.getElementById('alert-email').innerHTML = "이메일을 입력하세요";
        error.style.display = "block";
    } 
    else if (emailVal.match(regExp) != null) {
        document.getElementById('alert-email').innerHTML = "입력 완료";
        document.getElementById('alert-email').style.bottom = "40px";
        error.style.display = "none";
    } else {
        document.getElementById('alert-email').innerHTML = "이메일 형식에 맞지 않습니다.";
        error.style.display = "block";
    }
});
