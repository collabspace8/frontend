// Function to fetch workspaces for a property
const fetchWorkspaces = async (propertyId) => {
  try {
    const response = await fetch(`/api/properties/${propertyId}/workspaces`);
    if (!response.ok) {
      throw new Error("Failed to fetch workspaces");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    // Handle error
  }
};

// Function to append new data to the existing table
const appendData = (propertyId, newWorkspace) => {
  const workspaceTableBody = document.getElementById("workspaceBody");

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
      <button class="editWorkspaceBtn">

      Edit
      </button>
      <button class="deleteWorkspaceBtn">Delete</button>
    </td>
  `;
  workspaceTableBody.appendChild(newRow);
};

// Function to extract propertyId from URL query parameters
const getPropertyIdFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get('propertyId');
  if (!propertyId) {
    console.error('PropertyId not found in URL query parameters');
  }
  return propertyId;
};

// Use this function to fetch workspaces for a specific property and append them to the table
const appendWorkspacesForProperty = async () => {
  const propertyId = getPropertyIdFromUrl();
  if (!propertyId) {
    console.error('PropertyId not found in URL query parameters');
    return;
  }

  try {
    const workspaces = await fetchWorkspaces(propertyId);
    workspaces.forEach((workspace) => {
      appendData(propertyId, workspace);
    });
  } catch (error) {
    console.error('Error fetching workspaces:', error);
  }
};

// When the page loads, fetch and append workspaces for the property
document.addEventListener("DOMContentLoaded", async () => {
  await appendWorkspacesForProperty();

  const workspaceForm = document.getElementById("workspaceForm");

  // Handle form submission for adding a workspace
  workspaceForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const propertyId = getPropertyIdFromUrl();
    if (!propertyId) {
      console.error('PropertyId not found in URL query parameters');
      return;
    }

    const type = document.getElementById("type").value;
    const capacity = document.getElementById("capacity").value;
    const smoking = document.getElementById("smoking").value;
    const available = document.getElementById("available").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;

    // Construct a new workspace object
    const newWorkspace = {
      propertyId: propertyId,
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
        appendData(propertyId, insertedWorkspace);

        // Clear form fields
        workspaceForm.reset();
      } else {
        console.error('Failed to add workspace:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding workspace:', error);
    }
  });
});
