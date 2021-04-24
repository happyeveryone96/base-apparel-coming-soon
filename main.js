const emailBtn = document.getElementById("email-button");


emailBtn.addEventListener('click', function (event) {
    const email = document.getElementById('email');
    const emailVal = email.value;
    const alertEmail = document.getElementById('alert-email');
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    event.preventDefault();
    if (emailVal == "") {
        // document.getElementById('alert-email').innerHTML = "이메일을 입력하세요";
        email.placeholder = "이메일을 입력하세요";
    } 
    else if (emailVal.match(regExp) != null) {
        document.getElementById('alert-email').innerHTML = "입력 완료";
    } else {
        document.getElementById('alert-email').innerHTML = "이메일 형식에 맞지 않습니다.";
        alertEmail.style.left = '350px';

    }
});