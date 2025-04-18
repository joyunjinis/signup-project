// 아이디 데이터 저장
const storedUserData = localStorage.getItem("userData");
const userData = storedUserData ? JSON.parse(storedUserData) : {};

// 비밀번호 유효성 검사 함수 (수정된 정규표현식)
function validatePassword(password) {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordPattern.test(password);
}

// 회원가입 코드
function signup() {
  const usernameEl = document.getElementById("username");
  const passwordEl = document.getElementById("password");

  if (!usernameEl || !passwordEl) {
    alert("입력 요소를 찾을 수 없습니다.");
    return;
  }

  const username = usernameEl.value.trim();
  const password = passwordEl.value;

  // 아이디 중복 체크
  if (userData[username]) {
    alert("이미 존재하는 아이디입니다.");
    return;
  }

  // 비밀번호 유효성 검사
  if (!validatePassword(password)) {
    alert(
      "비밀번호는 최소 8자 이상, 하나 이상의 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다."
    );
    return;
  }

  // 회원가입 성공
  userData[username] = { password: password };
  localStorage.setItem("userData", JSON.stringify(userData));
  alert("성공적으로 회원가입이 되었습니다.");

  // finish.html로 이동
  window.location.href = "finish.html";
}

// 저장된 아이디 데이터 보기
function showUserData() {
  console.log(userData);
}

// 이벤트 등록
document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.getElementById("signup-btn");
  if (signupBtn) signupBtn.onclick = signup;
});
