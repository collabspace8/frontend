document.addEventListener("DOMContentLoaded", async () => {
  const workspaceTableBody = document.getElementById("workspaceBody");
  const workspaceForm = document.getElementById("workspaceForm");
  const modal = document.getElementById("confirmationModal");

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
  };

  // Handle form submission
  workspaceForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values from the form
    const propertyId = document.getElementById("propertyId").value;
    const type = document.getElementById("type").value;
    const capacity = document.getElementById("capacity").value;
    const smoking = document.getElementById("smoking").value;
    const available = document.getElementById("available").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;

    try {
      // Send a POST request to the backend to add the workspace
      const response = await fetch("/api/add-workspace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId,
          type,
          capacity,
          smoking,
          available,
          term,
          price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add workspace");
      }

      // Retrieve the newly added workspace data from the response
      const newWorkspace = await response.json();

      // Append the new workspace to the table
      appendData(propertyId, newWorkspace);

      // Clear form fields
      workspaceForm.reset();
    } catch (error) {
      console.error(error);
      // Handle error
    }
  });

  // Event delegation for handling clicks on dynamically created buttons
  workspaceTableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("editWorkspaceBtn")) {
      // Handle edit button click
      // ...
    } else if (event.target.classList.contains("spacedeleteBtn")) {
      // Handle delete button click
      // ...
    }
  });
});
