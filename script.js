//chcek crruer
const currUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currUser){
    window.location.href = 'login.html'
}

let loginPage = document.getElementById('logout-btn')
loginPage.addEventListener('click',function (event) {
    localStorage.removeItem("currentUser")
    // event.preventDefault()   
    window.location.href = 'login.html'
})

let indexpage = document.getElementById('user').innerHTML=currUser.name

// let indexpage = document.getElementById('main').innerHTML
// console.log(indexpage);
// let loginpage = document.getElementById('login-section')
// console.log(loginpage);
// let signpage = document.getElementById('signup-section')
// console.log(signpage);
// document.addEventListener("DOMContentLoaded", function() {
//     let chck = document.getElementById('main');
//     if (chck) {
//         console.log(chck.innerHTML);
//       } else {
//         console.log("Element with ID 'main-content' not found");
//       } 
//   });     
// let indexpage = window.location.href = 'index.html'
// let signuppage = window.location.href = 'signup.html'
// let loginpage = window.location.href = "login.html"
// window.addEventListener('load',function () {
//  indexpage.style.display = 'none'
//  window.location.href = signuppage    
// })



function loadProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            products = data.products;
            // filerData(products)
            showMoreProducts(products); 
        })
        .catch(error => console.error('Error fetching the products:', error));
}

function showMoreProducts(products) {
    const container = document.getElementById('product-row');
    let data = '';

    container.innerHTML = '';

    products.forEach((product) => {
      
        // if (index % 3 === 0) {
        //     data += '<div class="w-100"></div>'; 
        // }
        data += `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="p-card ">
                    <div class="p-img"><img src="${product.thumbnail}" alt="${product.title}"></div>
                    <hr>
                    <div class="p-title">${product.title}</div>
                    <div class="p-discrip">${product.description.slice(0, 37)}...</div>
                    <span class="p-price">₹ ${product.price }</span>
                    <span class="rating text-success">Rating: ${product.rating}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = data;
}

loadProducts();