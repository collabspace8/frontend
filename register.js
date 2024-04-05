document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        form.reset(); // Clear the form
      } else {
        console.error("Error registering:", response.statusText);
      }
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  });
