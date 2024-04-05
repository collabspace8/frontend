document.addEventListener("DOMContentLoaded", () => {
  // Retrieve existing property data from session storage or initialize an empty array if none exists
  let propertyData = JSON.parse(sessionStorage.getItem("propertyData")) || [];

  const propertyTableBody = document.getElementById("propertyBody");

  // Function to append data to the table
  const appendData = () => {
    propertyTableBody.innerHTML = ""; // Clear previous data

    // Append data from propertyData array
    propertyData.forEach((property) => {
      appendRow(property);
    });
  };

  // Function to append a single row to the table
  const appendRow = (property) => {
    const newRow = document.createElement("tr");
    newRow.setAttribute("data-property-id", property.propertyId);

    newRow.innerHTML = `
      <td>${property.propertyId}</td>
      <td>${property.address}</td>
      <td>${property.neighborhood}</td>
      <td>${property.squarefeet}</td>
      <td>${property.parking}</td>
      <td>${property.publicTranspo}</td>
      <td>
        <button class="editPropertyBtn" data-property-id="${property.propertyId}">Edit</button>
        <button class="deleteBtn">Delete</button>
        <button class="addWorkspaceBtn" onclick="location.href='add-workspace.html?propertyId=${property.propertyId}'">Add Workspace</button>
        <button class="viewWorkspaceBtn" onclick="location.href='owner-workspace.html'">View Workspace</button>
      </td>
    `;
    propertyTableBody.appendChild(newRow);

    // Attach click event handler for the delete button in this row
    const deleteButton = newRow.querySelector(".deleteBtn");
    deleteButton.addEventListener("click", () => {
      const row = deleteButton.closest("tr"); // Get the closest table row
      const propertyId = row.getAttribute("data-property-id");

      // Show the confirmation modal
      modal.style.display = "block";

      // Handle confirm delete
      document.getElementById("confirmDelete").addEventListener("click", () => {
        // Remove the property from propertyData array
        propertyData = propertyData.filter(
          (property) => property.propertyId.toString() !== propertyId
        );

        // Update sessionStorage
        sessionStorage.setItem("propertyData", JSON.stringify(propertyData));

        // Remove the row from the table
        row.remove();

        // Close the modal
        modal.style.display = "none";
      });

      // Handle cancel delete
      document.getElementById("cancelDelete").addEventListener("click", () => {
        // Close the modal
        modal.style.display = "none";
      });
    });
  };

  // Handle add button click
  document.getElementById("addPropertyBtn").addEventListener("click", () => {
    window.location.href = "add-property.html";
  });

  // Event delegation for handling clicks on dynamically created buttons
  document.getElementById("propertyBody").addEventListener("click", (event) => {
    if (event.target.classList.contains("editPropertyBtn")) {
      event.preventDefault();
      const propertyId = event.target.getAttribute("data-property-id");

      const propertyToEdit = propertyData.find(
        (property) => property.propertyId.toString() === propertyId
      );
      if (propertyToEdit) {
        sessionStorage.setItem(
          "propertyToEdit",
          JSON.stringify(propertyToEdit)
        );
        // Navigate to edit page
        window.location.href = "edit-property.html";
      }
    } else if (event.target.classList.contains("deleteBtn")) {
      // Delete button clicked
      const row = event.target.closest("tr"); // Get the closest table row
      const propertyId = row.getAttribute("data-property-id");

      // Remove the property from propertyData array
      propertyData = propertyData.filter(
        (property) => property.propertyId.toString() !== propertyId
      );

      // Update sessionStorage
      sessionStorage.setItem("propertyData", JSON.stringify(propertyData));

      // Remove the row from the table
      row.remove();
    }
  });

  // Initial data append
  appendData();

  // Get the modal
  const modal = document.getElementById("confirmationModal");

  // Get the <span> element that closes the modal
  const span = document.querySelector(".close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
