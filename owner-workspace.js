document.addEventListener("DOMContentLoaded", () => {
  const workspaceTableBody = document.getElementById("workspaceBody");
  const workspaceForm = document.getElementById("workspaceForm");
  const modal = document.getElementById("confirmationModal");

  // Retrieve workspace data from session storage if it exists, initialize as an empty object
  let propertyWorkspaceData =
    JSON.parse(sessionStorage.getItem("propertyWorkspaceData")) || {};

  // Function to append new data to the existing table
  const appendData = (propertyId, newWorkspace) => {
    const newRow = document.createElement("tr");
    newRow.setAttribute("data-property-id", propertyId);
    newRow.setAttribute("data-workspace-id", newWorkspace.workspaceId);

    // Populate the new row with data from the newWorkspace object
    newRow.innerHTML = `
      <td>${propertyId}</td>
      <td>${newWorkspace.workspaceId}</td>
      <td>${newWorkspace.type}</td>
      <td>${newWorkspace.capacity}</td>
      <td>${newWorkspace.smoking}</td>
      <td>${newWorkspace.available}</td>
      <td>${newWorkspace.term}</td>
      <td>${newWorkspace.price}</td>
      <td>
        <button class="editWorkspaceBtn">Edit</button>
        <button class="spacedeleteBtn">Delete</button>
      </td>
    `;
    workspaceTableBody.appendChild(newRow);

    // Add event listener to the edit button
    const editButton = newRow.querySelector(".editWorkspaceBtn");
    editButton.addEventListener("click", () => {
      // Redirect to the edit page with appropriate parameters
      const workspaceId = newWorkspace.workspaceId;
      window.location.href = `edit-workspace.html?propertyId=${propertyId}&workspaceId=${workspaceId}`;
    });

    // Add event listener to the delete button
    const deleteButton = newRow.querySelector(".spacedeleteBtn");
    deleteButton.addEventListener("click", () => {
      // Show the confirmation modal
      modal.style.display = "block";

      // Handle confirm delete
      document.getElementById("confirmDelete").addEventListener("click", () => {
        // Get the row to be deleted
        const row = deleteButton.closest("tr");
        const propertyId = row.getAttribute("data-property-id");
        const workspaceId = row.getAttribute("data-workspace-id");

        // Remove the workspace from the propertyWorkspaceData
        propertyWorkspaceData[propertyId] = propertyWorkspaceData[
          propertyId
        ].filter((workspace) => workspace.workspaceId !== workspaceId);

        // Update sessionStorage
        sessionStorage.setItem(
          "propertyWorkspaceData",
          JSON.stringify(propertyWorkspaceData)
        );

        // Remove the row from the table
        row.remove();

        // Close the modal
        modal.style.display = "none";
      });
    });
  };

  // Iterate over each property ID in propertyWorkspaceData
  for (const propertyId in propertyWorkspaceData) {
    if (propertyWorkspaceData.hasOwnProperty(propertyId)) {
      // Retrieve the workspace data for the current property ID
      const storedWorkspaceData = propertyWorkspaceData[propertyId] || [];

      // Append existing workspace data for the current property to the table
      storedWorkspaceData.forEach((workspace) => {
        appendData(propertyId, workspace);
      });
    }
  }

  // Handle form submission
  workspaceForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values from the form
    const propertyId = document.getElementById("propertyId").value;
    const type = document.getElementById("type").value;
    const capacity = document.getElementById("capacity").value;
    const smoking = document.getElementById("smoking").value;
    const available = document.getElementById("available").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;

    // Retrieve existing workspace data for the current property ID, initialize as an empty array if not present
    const workspaceData = propertyWorkspaceData[propertyId] || [];

    // Construct a new workspace object
    const newWorkspace = {
      workspaceId: workspaceData.length + 1, // Increment workspace ID for the current property
      type: type,
      capacity: capacity,
      smoking: smoking,
      available: available,
      term: term,
      price: price,
    };

    // Add the new workspace to the workspaceData array for the current property
    workspaceData.push(newWorkspace);

    // Update the workspace data for the current property in the propertyWorkspaceData object
    propertyWorkspaceData[propertyId] = workspaceData;

    // Save the updated propertyWorkspaceData object to session storage
    sessionStorage.setItem(
      "propertyWorkspaceData",
      JSON.stringify(propertyWorkspaceData)
    );

    // Append the new workspace to the table
    appendData(propertyId, newWorkspace);

    // Clear form fields
    workspaceForm.reset();
  });

  // Event delegation for handling clicks on dynamically created buttons
  workspaceTableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("editWorkspaceBtn")) {
      event.preventDefault();

      const propertyId = event.target
        .closest("tr")
        .getAttribute("data-property-id");

      const workspaceId = event.target
        .closest("tr")
        .getAttribute("data-workspace-id");

      // Check if propertyWorkspaceData contains data for the given propertyId
      if (propertyWorkspaceData.hasOwnProperty(propertyId)) {
        // Retrieve the workspaceToEdit from the array of workspaces for the propertyId
        const workspaceToEdit = propertyWorkspaceData[propertyId].find(
          (workspace) => workspace.workspaceId.toString() === workspaceId
        );
        if (workspaceToEdit) {
          // Save workspaceToEdit to session storage
          sessionStorage.setItem(
            "workspaceToEdit",
            JSON.stringify(workspaceToEdit)
          );
          // Optionally, save propertyId for reference
          sessionStorage.setItem("currentPropertyId", propertyId);
          // Navigate to edit page
          window.location.href = "edit-workspace.html";
        } else {
          console.error("Workspace not found for the given workspaceId.");
        }
      } else {
        console.error("No workspace data found for the given propertyId.");
      }
    }
  });
});
