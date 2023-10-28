function updateCartCount() {
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));

    if (checkLogin) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                let count = 0;
                for (let j = 0; j < users[i].cart.length; j++) {
                    count += users[i].cart[j].quantity;
                }
                document.getElementById("cart-count").textContent = count;
            }
        }
    }
}

// Gọi hàm để cập nhật số lượng sản phẩm trong giỏ hàng khi trang được tải
updateCartCount();






