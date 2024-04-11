document.addEventListener("DOMContentLoaded", () => {
  const workspaceTableBody = document.getElementById("workspaceBody");
  const workspaceForm = document.getElementById("workspaceForm");

  // Function to append new data to the existing table
  const appendData = (newWorkspace) => {
    const newRow = document.createElement("tr");
    newRow.dataset.workspaceId = newWorkspace.workspaceId; // Set data attribute for workspace ID

    // Populate the new row with data from the newWorkspace object
    newRow.innerHTML = `
      <td>${newWorkspace.propertyId}</td>
      <td>${newWorkspace.workspaceId}</td>
      <td>${newWorkspace.type}</td>
      <td>${newWorkspace.capacity}</td>
      <td>${newWorkspace.smoking}</td>
      <td>${newWorkspace.available}</td>
      <td>${newWorkspace.term}</td>
      <td>${newWorkspace.price}</td>
      <td>
        <button class="spaceeditBtn">Edit</button>
        <button class="spacedeleteBtn">Delete</button>
      </td>
    `;
    workspaceTableBody.appendChild(newRow);

    // Add event listener for edit button click
    newRow.querySelector(".spaceeditBtn").addEventListener("click", () => {
      editWorkspace(newWorkspace);
    });

    // Add event listener for delete button click
    newRow.querySelector(".spacedeleteBtn").addEventListener("click", () => {
      deleteWorkspace(newWorkspace.workspaceId);
    });
  };

  // Handle form submission
  workspaceForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values from the form
    const propertyId = document.getElementById("propertyId").value; // Get property ID
    const type = document.getElementById("type").value;
    const capacity = document.getElementById("capacity").value;
    const smoking = document.getElementById("smoking").value;
    const available = document.getElementById("available").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;

    // Construct a new workspace object
    const newWorkspace = {
      propertyId: propertyId, // Include property ID in workspace data
      type: type,
      capacity: capacity,
      smoking: smoking,
      available: available,
      term: term,
      price: price,
    };

    try {
      // Send a POST request to add the workspace
      const response = await fetch('/add-workspace', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWorkspace)
      });

      if (response.ok) {
        // Retrieve inserted workspace data from the response
        const insertedWorkspace = await response.json();

        // Append the new workspace to the table
        appendData(insertedWorkspace);

        // Clear form fields
        workspaceForm.reset();
      } else {
        console.error('Failed to add workspace:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding workspace:', error);
    }
  });

  // Function to handle editing an existing workspace
  const editWorkspace = (workspace) => {
    // Implement your edit workspace logic here
    console.log("Editing workspace:", workspace);
  };

  // Function to handle deleting an existing workspace
  const deleteWorkspace = async (workspaceId) => {
    try {
      // Send a DELETE request to delete the workspace
      const response = await fetch(`/workspaces/${workspaceId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Remove the workspace from the table
        const workspaceRow = document.querySelector(`#workspaceBody tr[data-workspace-id="${workspaceId}"]`);
        if (workspaceRow) {
          workspaceRow.remove();
        }
      } else {
        console.error('Failed to delete workspace:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting workspace:', error);
    }
  };

  // Handle save button click
  document.getElementById("saveWorkspaceBtn")?.addEventListener("click", () => {
    window.location.href = "owner-property.html";
  });

  // Handle back button click
  document.getElementById("back").addEventListener("click", () => {
    window.location.href = "owner-property.html";
  });

  // Retrieve property ID from URL parameters and set it in the form
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("propertyId");
  document.getElementById("propertyId").value = propertyId;
});
