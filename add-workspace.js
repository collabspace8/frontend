document.addEventListener("DOMContentLoaded", () => {
  const workspaceTableBody = document.getElementById("workspaceBody");
  const workspaceForm = document.getElementById("workspaceForm");

  // Retrieve workspace data from session storage if it exists, initialize as an empty object
  let propertyWorkspaceData =
    JSON.parse(sessionStorage.getItem("propertyWorkspaceData")) || {};

  // Function to append new data to the existing table
  const appendData = (propertyId, newWorkspace) => {
    const newRow = document.createElement("tr");

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
        <button class="spaceeditBtn">Edit</button>
        <button class="spacedeleteBtn">Delete</button>
      </td>
    `;
    workspaceTableBody.appendChild(newRow);
  };

  // Extract propertyId from URL parameters and set it in the input field
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("propertyId");
  if (propertyId) {
    // Check if propertyId is not null
    document.getElementById("propertyId").value = propertyId;
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
      propertyId: propertyId,
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

  // Handle save button click
  document.getElementById("saveWorkspaceBtn")?.addEventListener("click", () => {
    window.location.href = "owner-workspace.html";
  });

  // Handle back button click
  document.getElementById("back").addEventListener("click", () => {
    window.location.href = "owner-property.html";
  });

  // Append existing workspace data for the current property to the table on initial load
  const storedWorkspaceData = propertyWorkspaceData[propertyId] || [];
  storedWorkspaceData.forEach((workspace) => {
    appendData(propertyId, workspace);
  });
});
