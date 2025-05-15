document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const formData = new FormData(this); 
    let output = "" 
    output += `출력되는 아이디 : ${formData.get('user_id')}\n` 
    output += `출력되는 패스워드 : ${formData.get('password')}\n`
    output += `출력되는 히든의 요소 : ${formData.get('user_id2')}\n`
    document.getElementById('output').textContent = output

})

document.getElementById('signupBtn').addEventListener('click', function() {
    alert('회원가입 페이지로 이동합니다.');
})

document.getElementById('id_pass').addEventListener('click', function() {
    alert('아이디 / 패스워드 찾기 페이지로 이동합니다.');
})