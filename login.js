const currUser = JSON.parse(localStorage.getItem("currentUser"));

if(currUser){
    window.location.href = 'index.html'
}
let gtindex = document.getElementById('login-btn')

gtindex.addEventListener('click', function (event) {
    const lusername = document.getElementById('login-username').value;
    const lpassword = document.getElementById('login-password').value;
    let lError = document.getElementById('login-error')
    const details = JSON.parse(localStorage.getItem("users"));
    // console.warn(details);

    if (lusername === '' || lpassword === '') {
        lError.innerHTML = 'plese fill the fields'
        lError.className = 'text-danger'
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
    
        lError.innerText = 'Invalid username or password!';
})