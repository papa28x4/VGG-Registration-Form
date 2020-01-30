
let name, email, password, confirmPwd;
const submit = document.querySelector('#submit');
submit.addEventListener('click', signup);

function signup(e){
	
	name = document.querySelector('#signup_name').value;
	email = document.querySelector('#signup_email').value;
	password = document.querySelector('#signup_password').value;
	confirmPwd = document.querySelector('#confirm_password').value;
	let pattern = /^.{8,16}$/
	if(name.trim() && email.trim() && password && confirmPwd){
		e.preventDefault();
		if(pattern.test(password) && pattern.test(confirmPwd)){
			if(password === confirmPwd){
				console.log(`Your Name is ${name}`);
				console.log(`Your Email is ${email}`)
				console.log(`Your Password is ${password}`)
				console.log(`Your Confirm Password is also ${confirmPwd}`)
				alert('You have successfully signed up. See console for details')
			}else{
				alert('Password and Confirm Password do not match')
			}
		}else{
			if(!pattern.test(password)){
				alert(`Password has ${password.length} characters. It should be between 8 and 16`);
			}else if(!pattern.test(confirmPwd)){
				alert(`Confirm Password has ${confirmPwd.length} characters. It should be between 8 and 16`);
			}
		}
	}
}


