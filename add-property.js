document.addEventListener("DOMContentLoaded", () => {
  const propertyTableBody = document.getElementById("propertyBody");
  const propertyForm = document.getElementById("propertyForm");

  // Retrieve property data from session storage if it exists
  let propertyData = JSON.parse(sessionStorage.getItem("propertyData")) || [];

  // Function to append new data to the existing table
  const appendData = (newProperty) => {
    const newRow = document.createElement("tr");

    // Populate the new row with data from the newProperty object
    newRow.innerHTML = `
      <td>${newProperty.propertyId}</td>
      <td>${newProperty.address}</td>
      <td>${newProperty.neighborhood}</td>
      <td>${newProperty.squarefeet}</td>
      <td>${newProperty.parking}</td>
      <td>${newProperty.publicTranspo}</td>
      <td>
      <button class="editPropertyBtn" data-property-id="${newProperty.propertyId}">Edit</button>
      <button class="deleteBtn">Delete</button>        <button class="deleteBtn">Delete</button>
      <button class="detailBtn" onclick="location.href='add-workspace.html'">Add Workspace</button>
      <button class="detailBtn" onclick="location.href='owner-workspace.html'">View Workspace</button>
      </td>
    `;

    // Append the new row to the table body
    propertyTableBody.appendChild(newRow);
  };

  // Handle form submission
  propertyForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values from the form
    const address = document.getElementById("address").value;
    const neighborhood = document.getElementById("neighborhood").value;
    const squarefeet = parseInt(document.getElementById("squarefeet").value);
    const parking = document.getElementById("parking").value;
    const publicTranspo = document.getElementById("publicTranspo").value;

    // Construct a new property object
    const newProperty = {
      propertyId: propertyData.length + 1, // Generate unique ID for the new property
      address: address,
      neighborhood: neighborhood,
      squarefeet: squarefeet,
      parking: parking,
      publicTranspo: publicTranspo,
    };

    // Add the new property to the propertyData array
    propertyData.push(newProperty);

    // Save the updated propertyData array to session storage
    sessionStorage.setItem("propertyData", JSON.stringify(propertyData));

    // Append the new property to the table
    appendData(newProperty);

    // Clear form fields
    propertyForm.reset();
  });

  // Handle save button click
  document.getElementById("savePropertyBtn").addEventListener("click", () => {
    window.location.href = "owner-property.html";
  });

  // Handle back button click
  document.getElementById("back").addEventListener("click", () => {
    window.location.href = "owner-property.html";
  });
  // Handle add button click
  document
    .getElementById("addPropertyBtn")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("addWorkspaceBtn")) {
        console.log("ID ", propertyId);
        if (propertyId) {
          const propertyId = event.target.getAttribute("propertyId");
          document.getElementById("propertyId").value = propertyId; // Set propertyId in the hidden input field
          console.log("ID ", propertyId);
        }
      }
      window.location.href = "add-property.html";
    });

  // Initial data append
  propertyData.forEach((property) => {
    appendData(property);
  });
});
