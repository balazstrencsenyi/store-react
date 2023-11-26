import { auth } from 'your-firebase-config'; // Import the auth object from your Firebase configuration

function SignUp() {

  const handleSubmit = (event) => {
    // Prevent page from refreshing
    event.preventDefault();

    // Get form fields
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");

    // Get values from form fields
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Sign up user
    auth 
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    // Reset form fields
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="emailInput">Email:</label>
      <input type="email" id="emailInput" />

      <label htmlFor="passwordInput">Password:</label>
      <input type="password" id="passwordInput" />

      <label htmlFor="confirmPasswordInput">Confirm Password:</label>
      <input type="password" id="confirmPasswordInput" />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
