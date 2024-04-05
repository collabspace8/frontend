document.addEventListener("DOMContentLoaded", () => {
  const workspaceForm = document.getElementById("workspaceForm");
  const propertyWorkspaceData =
    JSON.parse(sessionStorage.getItem("propertyWorkspaceData")) || {};

  // Retrieve propertyId from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("propertyId");

  // Function to populate form fields with workspace data
  const populateFormFields = (workspaceId) => {
    const workspace = findWorkspaceById(
      propertyWorkspaceData[propertyId],
      workspaceId
    );
    if (workspace) {
      document.getElementById("workspaceId").value = workspace.workspaceId;
      document.getElementById("type").value = workspace.type;
      document.getElementById("capacity").value = workspace.capacity;
      document.getElementById("smoking").value = workspace.smoking;
      document.getElementById("available").value = workspace.available;
      document.getElementById("term").value = workspace.term;
      document.getElementById("price").value = workspace.price;
    } else {
      console.error("Workspace not found for the given workspaceId.");
    }
  };

  // Handle form submission
  workspaceForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    // Retrieve input values from the form
    const workspaceId = document.getElementById("workspaceId").value;
    const type = document.getElementById("type").value;
    const capacity = document.getElementById("capacity").value;
    const smoking = document.getElementById("smoking").value;
    const available = document.getElementById("available").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;

    // Update the workspace data in propertyWorkspaceData
    const workspaces = propertyWorkspaceData[propertyId];
    const index = workspaces.findIndex(
      (workspace) => workspace.workspaceId === workspaceId
    );
    if (index !== -1) {
      workspaces[index] = {
        workspaceId,
        type,
        capacity,
        smoking,
        available,
        term,
        price,
      };
    }

    // Save the updated propertyWorkspaceData to session storage
    sessionStorage.setItem(
      "propertyWorkspaceData",
      JSON.stringify(propertyWorkspaceData)
    );

    // Redirect to the owner-workspace.html page
    window.location.href = "owner-workspace.html";
  });

  // Handle back button click
  document.getElementById("backEdit").addEventListener("click", () => {
    // Redirect to the owner-workspace.html page
    window.location.href = "owner-workspace.html";
  });

  // Handle edit button click in the workspace table
  document
    .getElementById("workspaceBody")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("editWorkspaceBtn")) {
        event.preventDefault();
        const workspaceId = event.target.dataset.workspaceId;
        populateFormFields(workspaceId);
      }
    });
});

// Function to find a workspace by ID within an array of workspaces
const findWorkspaceById = (workspaces, workspaceId) => {
  return workspaces.find((workspace) => workspace.workspaceId === workspaceId);
};
