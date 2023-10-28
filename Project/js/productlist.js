let productList = [
    {
        name: "ADIDAS YEEZY BOOST 350 V2 BELUGA REFLECTIVE 2021",
        image: "../img/shop_01.jpg",
        link: "../pages/shop-single1.html",
        size: "38 39 40 41 42",
        description: "ADIDAS YEEZY BOOST 350 V2 BELUGA REFLECTIVE 2021",
        brand:"Adidas",
        id: 1,
        rating: 4,
        color: "Xám Cam Đen",
        price: 8200000,
    },
    {
        name: "ADIDAS YEEZY BOOST 350 V2 BLACK RED 2017/2020",
        image: "../img/shop_02.jpg",
        link: "../pages/shop-single2.html",
        size: "38 39 40 41 42",
        description: "ADIDAS YEEZY BOOST 350 V2 BLACK RED 2017/2020",
        brand:"Adidas",
        id: 2,
        rating: 4,
        color: "Đen Đỏ",
        price: 8000000,
    },
    {
        name: "ADIDAS YEEZY WAVE RUNNER 700 SOLID GREY 2017",
        image: "../img/shop_03.jpg",
        link: "../pages/shop-single3.html",
        brand:"Adidas",
        description: "ADIDAS YEEZY WAVE RUNNER 700 SOLID GREY 2017",
        size: "38 39 40 41 42",
        id: 3,
        rating: 4,
        color: "Xám Cam Đen Trắng Xanh",
        price: 10700000,
    },
    {
        name: "NIKE AIR FORCE 1 LOW SUPREME WHITE 2020",
        image: "../img/shop_04.jpg",
        brand:"Nike",
        link: "../pages/shop-single4.html",
        size: "38 39 40 41 42",
        description: "NIKE AIR FORCE 1 LOW SUPREME WHITE 2020",
        id: 4,
        rating: 4,
        color: "Trắng",
        price: 4300000,
    },
    {
        name: "NIKE DUNK LOW RETRO WHITE BLACK PANDA 2021",
        image: "../img/shop_05.jpg",
        link: "../pages/shop-single5.html",
        brand:"Nike",
        size: "38 39 40 41 42",
        description: "NIKE DUNK LOW RETRO WHITE BLACK PANDA 2021",
        id: 5,
        rating: 4,
        color: "Trắng Đen",
        price: 3800000,
    },
    {
        name: "OFF-WHITE X NIKE AIR MAX 90 BLACK 2019",
        image: "../img/shop_06.jpg",
        link: "../pages/shop-single6.html",
        brand:"Nike",
        size: "38 39 40 41 42",
        description: "OFF-WHITE X NIKE AIR MAX 90 BLACK 2019",
        id: 6,
        rating: 4,
        color: "Đen Trắng",
        price: 11200000,
    },
];
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
// lưu sản phẩm trên local
localStorage.setItem("productList", JSON.stringify(productList));
let products = JSON.parse(localStorage.getItem("productList"));
function renderProducts(productList) {
    if (productList == undefined) {
        productList = [];
    }
    let text = "";
    for (let i = 0; i < productList.length; i++) {
        text +=
            `
            <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
                    <div class="card rounded-0">
                        <img class="card-img rounded-0 img-fluid" src="${productList[i].image}">
                            <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text-white mt-2" href="${productList[i].link}"><i
                                                    class="far fa-eye"></i></a></li>
                                        <li><button class="btn btn-success text-white mt-2" onclick="addToCart(${productList[i].id})"><i
                                                    class="fas fa-cart-plus"></i></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="${productList[i].link}" class="h3 text-decoration-none" style="color: red;">${productList[i].name}</a>
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li>Size: ${productList[i].size}</li>
                                    <li class="pt-2">
                                        <span
                                            class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span
                                            class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span
                                            class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span
                                            class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span
                                            class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p class="text-center mb-0">Giá: ${productList[i].price} Đồng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
   `
    }
    document.getElementById("product-list").innerHTML = text
}
renderProducts(products);
// function đi mua hàng
function addToCart(productId) {
    // console.log("productId", productId);
    let checkLogin = localStorage.getItem("userId");
    // biến checkLogin có giá trị là id của người dùng
    // lấy toàn bộ users ra
    let users = JSON.parse(localStorage.getItem("users"));
    // lấy toàn bộ danh sách sản phẩm
    let products = JSON.parse(localStorage.getItem("productList"));
    if (checkLogin) {
        // đã đăng nhập mới cho đi mua hàng
        // đi mua hàng dựa vào userId 
        // alert("đi mua hàng bình thường!")
        // mình có nhiều user thì phải lấy ra giỏ của user có id == checkLogin
        /*   let cartUser=users.filter((item)=>{
              return item.id==checkLogin;
          })
          console.log("cartUser", cartUser); */
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                // lấy ra giỏ hàng của user vừa đăng nhập
                //users[i].cart
                for (let j = 0; j < products.length; j++) {
                    if (products[j].id == productId) {
                        //... toán tử spread
                        // trước khi push phải xem sản phẩm đó đã có trong giỏ hàng hay chưa
                        // nếu có rồi thì tăng số lượng thôi.
                        // chưa có thì push vào bình thường
                        // users[i].cart.push({ ...products[j],quantity:1 });
                        // localStorage.setItem("users",JSON.stringify(users));
                        let result = users[i].cart.filter((item) => {
                            return item.id == productId;
                        })
                        if (result.length == 0) {
                            users[i].cart.push({ ...products[j], quantity: 1 });
                            localStorage.setItem("users", JSON.stringify(users));
                            showCount();
                        } else {
                            // users[i].cart[j].quantity == ++users[i].cart[j].quantity;
                            // localStorage.setItem("users", JSON.stringify(users));
                            for (let k = 0; k < users[i].cart.length; k++) {
                                if (users[i].cart[k].id == productId) {
                                    users[i].cart[k].quantity = ++users[i].cart[k].quantity;
                                    localStorage.setItem("users", JSON.stringify(users));
                                    showCount();
                                    break;
                                }
                            }
                        }
                    }
                }
            }

        }
    } else {
        // chưa đăng nhập không thể mua hàng
        alert("Bạn phải đăng nhập để đi mua hàng!")
        window.location.href="../pages/login.html"
    }
}
// function render count
function showCount() {
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                //users[i].cart
                let count=0;
                for (let j = 0; j < users[i].cart.length; j++) {
                    count += users[i].cart[j].quantity;  
                }
                document.getElementsByClassName("position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark")[0].innerHTML=count;
            }
        }

    }
}
showCount();

