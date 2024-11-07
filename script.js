// script.js

// Function to handle form submission
async function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Capture the form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
      // Send data to the Vercel API route
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      // Check if the request was successful
      if (response.ok) {
        const result = await response.json();
        console.log("Server response:", result);
  
        // Display a message confirming data submission
        alert("Login data submitted successfully!");
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("There was an error submitting your login data. Please try again.");
    }
  
    // Optionally, clear the form
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
  }
  