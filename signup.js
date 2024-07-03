// console.log('ram');
//chcek crruer
const currUser = JSON.parse(localStorage.getItem("currentUser"));
const users = JSON.parse(localStorage.getItem("users")) || [];
console.warn(users);
if(currUser){
    window.location.href = 'index.html'
}

// signup page js code
let signupDetails = document.getElementById('signup').addEventListener('click',function (event) {
    event.preventDefault();
    //check status
    let  sName = document.getElementById('sn-error')
    let  semail = document.getElementById('se-error')
    let  spasd = document.getElementById('sp-error')
    //value check
    const username = document.getElementById('signup-username').value;
    const email    = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    let supError   = document.getElementById('signup-error')
 
  if(username ==="" || email==="" || password ===""){
    supError.innerText="All fields are required"
    supError.className = 'text-danger'
    return
}else{
  supError.innerText="";
    let obj = {username,email,password}
    users.push(obj)
    localStorage.setItem('users',JSON.stringify(users));
    supError.innerText="Signup successfull"
    supError.className = 'text-success'
    window.location.href = 'login.html'
}

// const details = JSON.parse(localStorage.getItem("user"));
// details.forEach(event => {
//     if (event.username === username && event.email === email && event.password === password) {
//         supError.innerText = "User already exist";
//         supError.className = 'text-danger'
//     }
// });

});



console.log(signupDetails); 

// // navbar riponsive  code
// let navbar = document.getElementById('img-clicks')
// navbar.addEventListener('click',function (e) {
//   e.preventDefault()
//   let navItems = document.getElementById('ris-nav-icon')
//   navItems.innerHTML = `
//               <div class="nav-icons">
//                 <div class="catagory-section"><a href="index.html">Clothes</a> </div>
//                 <div class="catagory-section"><a href="fake1.html">Accessories</a></div>
//                 <div class="catagory-section"><a href="index.html">Furniture</a> </div>
//                 <div class="catagory-section"><a href="fake1.html">Groceries</a> </div>
//               </div>
//   `
// })



// login page js code

// const lusername = document.getElementById('login-username').value;
// const lpassword = document.getElementById('login-password').value;
// let   lError   = document.getElementById('login-error')

// let gtindex = document.getElementById('login-btn')

// gtindex.addEventListener('click',function (event) {
//     event.preventDefault()
//     if (lusername&&lpassword === '') {
//         lError.innerHTML = 'plese fill the fields'
//         lError.className = 'text-danger'
      
//     }
//     if (localStorage.getItem(username&&password ===lusername&&lpassword )) {
//         lError.innerHTML = 'login Successfull'
//         lError.className = 'text-success'
//         window.location.href = 'index2.html';

//     }  else {
//         lError.innerHTML = 'User not found'
//         lError.className = 'text-danger'
//     }
// })