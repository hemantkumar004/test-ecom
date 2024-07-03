const currUser = JSON.parse(localStorage.getItem("currentUser"));

if(currUser){
    window.location.href = 'index.html'
}
let gtindex = document.getElementById('login-btn')

gtindex.addEventListener('click', function (event) {
    const lusername = document.getElementById('login-username').value;
    const lpassword = document.getElementById('login-password').value;
    let lerror = document.getElementById('login-error')
    let lgn_name_error = document.getElementById('lgn-name-error')
    let lgn_pasd_error = document.getElementById('lgn-pasd-error')

   
    const details = JSON.parse(localStorage.getItem("users"));

//    if (lusername === '') {
//         lgn_name_error.innerHTML = 'plese fill the field'
//         lgn_name_error.className = 'text-danger'
//     }else if (lpassword === '') {
//         lgn_pasd_error.innerHTML = 'plese fill the field'
//         lgn_pasd_error.className = 'text-danger'
//     }
     if (lusername === '' || lpassword === '') {
        // lgn_name_error.innerHTML = 'plese fill the field'
        // lgn_name_error.className = 'text-danger'
        // lgn_pasd_error.innerHTML = 'plese fill the field'
        // lgn_pasd_error.className = 'text-danger'
        lerror.innerHTML = 'plese fill all the fields'
        lerror.className = 'text-danger'
        return
    } 

    details.forEach(user => {
        if (user.password === lpassword && user.username === lusername) {
            let newObj = {
                isLoggin:true,
                name:user.username
            }
            localStorage.setItem("currentUser",JSON.stringify(newObj))
            window.location.href = 'index.html';
            return
         }

    });
    
    lerror.innerText = 'Invalid username or password!';
})