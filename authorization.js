let signInForm = document.querySelector('#signIn') 
signInForm.addEventListener('submit', (event) => { 
    event.preventDefault(); 
    let username = signInForm.querySelector('#username') 
    let password = signInForm.querySelector('#password') 
 
    fetch('http://localhost:8080/user') 
    .then(response => response.json()) 
    .then(data => { 
    let user = data.find(u => u.username == username.value && u.password == password.value) 
    if(user) { 
    // msg("jfiasnd"); 
     
     alert('you are logged in')
        // alert(`welcome ${user.username}`) 
        // localStorage.setItem('user', JSON.stringify(user)) 
    } else { 
        alert('неверные данные') 
    } 
    }) 
}) 
 
let signUpForm = document.querySelector('#signUp') 
signUpForm.addEventListener('submit', (e) => { 
    e.preventDefault(); 
    let username = signInForm.querySelector('#username') 
    let password = signInForm.querySelector('#password') 
    let newUser = { 
        username: username.value, 
        password: password.value, 
    } 
    fetch('http://localhost:8080/user', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json' 
        } , 
        body: JSON.stringify(newUser) 
    }) 
    .then(response => response.json()) 
    .then(data => { 
        alert('You sucsecfully sign up' ); 
    }) 
})
