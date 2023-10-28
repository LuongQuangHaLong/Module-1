/* function đăng nhập */
function login() {
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    for (let i = 0; i < users.length; i++) {
        if(users[i].name==name && users[i].password==password){
            localStorage.setItem("userId",users[i].id)
            window.location.href="../pages/index.html"
        }
    }
        document.getElementById("error-message").textContent = "Tài khoản hoặc mật khẩu không đúng!";
        return; // Dừng hàm login() tại đây
    }
    // Xóa thông báo lỗi nếu có
    document.getElementById("error-message").textContent = "";
