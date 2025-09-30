const loginForm = document.querySelector('.login-form');
let email = document.getElementById('email');
let password = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    email: email.value,
    password: password.value
  }


  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-Type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
        alert('Login successful');
        email.value = '';
        password.value = '';
    }else{
        alert('Something went wrong');
    }

}

xhr.send(JSON.stringify(formData)); 

  
});












//  // Set current year
//     document.getElementById('currentYear').textContent = new Date().getFullYear();
    
//     // Email verification
//     function verifyEmail() {
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
      
//      if (email && password) {
//     // Send data to backend
//     fetch('http://localhost:3000/loginPage', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     })
//     .then(res => res.json())
//     .then(data => {
//       // Continue with your loading screen logic
//       document.getElementById('loadingScreen').style.display = 'flex';
//       document.getElementById('loginPage').style.display = 'none';
//       setTimeout(() => {
//         document.getElementById('loadingScreen').style.display = 'none';
//         document.getElementById('phoneVerificationPage').style.display = 'block';
//       }, 5000);
//     })
//     .catch(err => alert('Error saving details!'));
//   } else {
//     alert('Please fill in all fields');
//   }
// }

// // Phone verification
// function verifyPhone() {
//   const phone = document.getElementById('phone').value;

//   if (phone.length === 11) {
//         // Show loading screen for 3 seconds
//         document.getElementById('loadingScreen').style.display = 'flex';
//         document.getElementById('phoneVerificationPage').style.display = 'none';
        
//         setTimeout(() => {
//           document.getElementById('loadingScreen').style.display = 'none';
//           document.getElementById('errorScreen').style.display = 'flex';
//         }, 3000);
//       } else {
//         alert('Please enter a valid 10-digit phone number');
//       }
//     }
    
//     // Go back to login
//     function goBack() {
//       document.getElementById('phoneVerificationPage').style.display = 'none';
//       document.getElementById('loginPage').style.display = 'block';
//       document.getElementById('errorScreen').style.display = 'none';
//     }