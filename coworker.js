


function search() {
  window.location.href = "coworker-propertySearch.html";
}

function viewRentedWorkspaceBtn() {
  window.location.href = "viewRentedWorkspace.html";
}


document.addEventListener("DOMContentLoaded", function() {
  populatePropertyTable();
});

function populatePropertyTable() {
  // Make a request to fetch property data from the backend API
  fetch("http://localhost:3000/properties")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch property data");
      }
      return response.json();
    })
    .then(propertyData => {
      // Once data is fetched, populate the property table
      var propertyTable = document.getElementById("propertyTable").getElementsByTagName('tbody')[0];
      propertyTable.innerHTML = ""; // Clear existing data

      if (propertyData.length === 0) {
        console.log("No properties found.");
        return;
      }

      propertyData.forEach(function(property) {
        var row = propertyTable.insertRow();
        row.innerHTML = `
        <td class="hidden">${property.propertyId}</td>
          <td>${property.address}</td>
          <td>${property.neighborhood}</td>
          <td>${property.squarefeet}</td>
          <td>${property.parking}</td>
          <td>${property.publicTranspo}</td>
          <td><button class="button" onclick="viewAvailableWorkspaces(${property.propertyId})">View Available Workspaces</button></td>
        `;
      });
    })
    .catch(error => {
      console.error("Error fetching property data:", error);
    });
}

function viewAvailableWorkspaces(propertyId) {
  var modal = document.getElementById("workspaceModal");
  var workspaceDetails = workspaceData.filter(workspace => workspace.propertyId === propertyId);

  var modalContent = modal.getElementsByClassName("modal-content")[0];
  modalContent.innerHTML = ""; // Clear existing data

  var table = document.createElement("table");
  table.classList.add("workspace-table");

  var header = table.createTHead();
  var headerRow = header.insertRow();
  headerRow.innerHTML = `
    <th>Type</th>
    <th>Capacity</th>
    <th>Smoking Allowed</th>
    <th>Available</th>
    <th>Term</th>
    <th>Price</th>
    <th>Contact Info</th>
    <th>Image</th>
  `;

  var body = table.createTBody();
  workspaceDetails.forEach(function(workspace) {
    var row = body.insertRow();
    row.innerHTML = `
      <td>${workspace.workspaceId}</td>
      <td>${workspace.type}</td>
      <td>${workspace.capacity}</td>
      <td>${workspace.smoking}</td>
      <td>${workspace.available}</td>
      <td>${workspace.term}</td>
      <td>${workspace.price}</td>
      <td class="email-cell"><span class="email">${workspace.contactInfo}</span></td>
      <td><img class="workspace-image" src="${workspace.imageURL}" alt="Workspace Image" style="max-width: 100px; max-height: 100px; cursor: pointer;"></td>
    `;
  });

  modalContent.appendChild(table);

  modal.style.display = "block";

  // Close the workspace modal when clicking outside
  modal.onclick = function(event) {
    if (!event.target.closest(".modal-content")) {
      modal.style.display = "none";
    }
  };

  // Add event listener for enlarging workspace images
  document.querySelectorAll(".workspace-image").forEach(image => {
    image.addEventListener("click", function() {
      var enlargedImageModal = document.getElementById("imageModal");
      var enlargedImage = document.getElementById("enlargedImage");

      enlargedImage.src = this.src;
      enlargedImageModal.style.display = "block";

      // Close the enlarged image modal when clicking outside the image
      enlargedImageModal.onclick = function(event) {
        if (event.target == enlargedImageModal) {
          enlargedImageModal.style.display = "none";
        }
      };
    });
  });
}

document.getElementById("logoutBtn").addEventListener("click", function() {
  window.location.href = "index.html"; 
});
