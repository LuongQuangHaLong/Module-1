/* function tạo id */
function uuid() {
    return Math.floor(Math.random() * 734738483784);
}
/* 

    TẠO FUNCTION ĐĂNG KÍ    
 */
let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {

    let mail = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let checkbox = document.getElementById("check").checked; // Kiểm tra ô checkbox
    if (password!=confirmPassword) {
        document.getElementById("error-message-check").textContent = "Mật khẩu xác nhận không đúng!";
        return; // Dừng hàm register() tại đây
    }
    // Xóa thông báo lỗi nếu có
    document.getElementById("error-message-check").textContent = "";
    if (!checkbox) {
        // Nếu ô checkbox không được chọn, hiển thị thông báo lỗi
        document.getElementById("error-message-check").textContent = "Bạn chưa xác nhận!";
        return; // Dừng hàm register() tại đây
    }
    // Xóa thông báo lỗi nếu có
    document.getElementById("error-message-check").textContent = "";
    
    let obj = {
        email: mail,
        name: name,
        password: password,
        id: uuid(),
        cart: [],
    }
    let check = users.filter((item) => {
        return item.email == mail
    })
    if (check.length == 0) {
        // tức là tài khoản chưa được đăng kí
        users.push(obj);
        localStorage.setItem("users", JSON.stringify(users));
        //khi đăng kí thành công chuyển sang trang đăng nhập
        window.location.href = "../pages/login.html"
    } else {
        alert("Tài khoản đã tồn tại!")
    }
}
/* let arr=[4,5,6];
let check=arr.filter((item)=>{
    return item==44
})
console.log(check); */