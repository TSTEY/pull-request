// let cpb = document.getElementById('cpb')
// let p = document.querySelector('#container p')

// cpb.addEventListener('click', function(){
//     p.textContent = 'Bexrux be quiet';
//     p.textContent = 'Если не угомонишься получишь по жопе. Понял ?';
// })

// let cpb = document.getElementById('cpb')
// let ul = document.querySelector('#container ul')
// let li = document.querySelector('#container li')

// cpb.addEventListener('click', function(){
//     let item = document.createElement('li')
//     li.appendChild = 'Bexrux be quiet';
// })

function copyForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;

    let copyContainer = document.getElementById('copyContainer');
    copyContainer.innerHTML = `
        <div class="form-container">
            <h2>Copied Data</h2>
            <form>  
                <p>Username</p>
                <input type="text" value="${username}">
                
                <p>Email</p>
                <input type="email" value="${email}">
                
                <p>Password</p>
                <input type="password" value="${password}">
                
                <p>Repeat Password</p>
                <input type="password" value="${repeatPassword}">
            </form>
        </div>
    `;
}




