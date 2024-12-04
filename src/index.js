function checkGender() {
    // Prompting the user for their gender
    let gender = prompt("Please enter your gender (Male or Female):");
  
    // Checking if the user is a "Female"
    if (gender.toLowerCase() === "female") {
      alert("You are a girl!👧🏽");
    }
    // ing if the user is a "Male"
    else if (gender.toLowerCase() === "male") {
      alert("You are a boy! 👦🏽");
    }
    // If the user is not a  male or female
    else {
      alert("Wrong input! Please enter either 'Male' or 'Female'.");
    }
  }
  
  // Calling the function
  checkGender();
  