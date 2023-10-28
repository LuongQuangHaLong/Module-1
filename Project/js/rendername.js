function renderName() {
    let checkLogin = localStorage.getItem('userId');
    let users = JSON.parse(localStorage.getItem('users'));
    if (checkLogin && checkLogin.length > 0) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                document.getElementsByClassName('container-login')[0].innerHTML =
                    `
                    <div>
                    <p class="container text-light"><span class="material-symbols-outlined">
                    person</span> ${users[i].name} </p>
                    <a class="" href="javascript:void(0)" onclick="logout()" rel="sponsored">Thoát </a>
                    </div>
                `
            }
        }
    } else {
        document.getElementsByClassName('container-login')[0].innerHTML =
            `
        <div class="w-100 d-flex justify-content-between">
            <div class="container-login">
                    <a class="container text-light" href="login.html" rel="sponsored"> Đăng Nhập </a>
                    <a class="container text-light" href="register.html" rel="sponsored"> Đăng Kí </a>

            </div>
        </div>    
        `
    }
}
function logout() {
    // Xóa thông tin đăng nhập khỏi localStorage hoặc cơ sở dữ liệu khác (nếu sử dụng)
    localStorage.removeItem('userId');
    // Chuyển hướng về trang chưa đăng nhập (index.html hoặc trang khác)
    window.location.href = "../pages/index.html";
}
renderName()