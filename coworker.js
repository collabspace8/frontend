const propertyData = [
  {
    propertyId: 1,
    address: "123 Main St",
    neighborhood: "Downtown",
    squareFeet: 1500,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 2,
    address: "456 Granville St",
    neighborhood: "Residential",
    squareFeet: 1800,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 3,
    address: "789 Robson St",
    neighborhood: "Industrial",
    squareFeet: 1200,
    parking: "No",
    publicTranspo: "Yes",
  },
  {
    propertyId: 4,
    address: "101 Broadway Ave",
    neighborhood: "Downtown",
    squareFeet: 2000,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 5,
    address: "321 Davie St",
    neighborhood: "Residential",
    squareFeet: 1600,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 6,
    address: "222 Burrard St",
    neighborhood: "Downtown",
    squareFeet: 1700,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 7,
    address: "777 Hornby St",
    neighborhood: "Industrial",
    squareFeet: 1900,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 8,
    address: "888 Richards St",
    neighborhood: "Residential",
    squareFeet: 1400,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 9,
    address: "999 Mainland St",
    neighborhood: "Downtown",
    squareFeet: 2100,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 10,
    address: "777 Pacific Blvd",
    neighborhood: "Industrial",
    squareFeet: 1800,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 11,
    address: "123 Beach Ave",
    neighborhood: "Residential",
    squareFeet: 1500,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 12,
    address: "456 Hastings St",
    neighborhood: "Downtown",
    squareFeet: 1700,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 13,
    address: "789 Seymour St",
    neighborhood: "Industrial",
    squareFeet: 1600,
    parking: "No",
    publicTranspo: "Yes",
  },
  {
    propertyId: 14,
    address: "101 Alberni St",
    neighborhood: "Downtown",
    squareFeet: 2000,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 15,
    address: "321 Homer St",
    neighborhood: "Residential",
    squareFeet: 1800,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 16,
    address: "222 Pender St",
    neighborhood: "Downtown",
    squareFeet: 1900,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 17,
    address: "777 Main St",
    neighborhood: "Industrial",
    squareFeet: 2200,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 18,
    address: "888 Cambie St",
    neighborhood: "Residential",
    squareFeet: 1300,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 19,
    address: "999 Abbott St",
    neighborhood: "Downtown",
    squareFeet: 1900,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 20,
    address: "777 Dunsmuir St",
    neighborhood: "Industrial",
    squareFeet: 2000,
    parking: "Yes",
    publicTranspo: "Yes",
  }
];


const workspaceData = [
  { 
  propertyId: 1,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_1@email.com",
  rating: 4.5,
  imageURL: "img/workspace1.jpg",
  },
  {
  propertyId: 1,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_1@email.com",
  rating: 4.2,
  imageURL: "img/workspace2.jpg",
  },
  {
  propertyId: 1,
  workspaceId: 3,
  type: "Study Room",
  capacity: 5,
  smoking: "Yes",
  available: "2024-03-20",
  term: "Daily",
  price: "800",
  contactInfo: "owner.contact_1@email.com",
  rating: 4.7,
  imageURL: "img/workspace3.jpg",
  },
  {
  propertyId: 1,
  workspaceId: 4,
  type: "Cubicle Space",
  capacity: 3,
  smoking: "No",
  available: "2024-03-25",
  term: "Daily",
  price: "500",
  contactInfo: "owner.contact_1@email.com",
  rating: 4.0,
  imageURL: "img/workspace4.jpg",
  },
  { 
  propertyId: 2,
  workspaceId: 1,
  type: "Office Room",
  capacity: 12,
  smoking: "No",
  available: "2024-05-15",
  term: "Monthly",
  price: "2200",
  contactInfo: "owner.contact_2@email.com",
  rating: 4.3,
  imageURL: "img/workspace5.jpg",
  },
  {
  propertyId: 2,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 8,
  smoking: "Yes",
  available: "2024-04-10",
  term: "Weekly",
  price: "1800",
  contactInfo: "owner.contact_2@email.com",
  imageURL: "img/workspace6.jpg",
  },
  {
  propertyId: 2,
  workspaceId: 3,
  type: "Cubicle Space",
  capacity: 4,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Daily",
  price: "600",
  contactInfo: "owner.contact_2@email.com",
  rating: 4.6,
  imageURL: "img/workspace8.jpg",
  },
  {
  propertyId: 3,
  workspaceId: 1,
  type: "Office Room",
  capacity: 10,
  smoking: "No",
  available: "2024-06-20",
  term: "Monthly",
  price: "1800",
  contactInfo: "owner.contact_3@email.com",
  rating: 4.1,
  imageURL: "img/workspace9.jpg",
  },
  {
  propertyId: 3,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 6,
  smoking: "Yes",
  available: "2024-04-15",
  term: "Weekly",
  price: "1200",
  contactInfo: "owner.contact_3@email.com",
  rating: 4.8,
  imageURL: "img/workspace10.jpg",
  },
{ 
  propertyId: 4,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_4@email.com",
  rating: 4.4,
  imageURL: "img/workspace13.jpg",
},
{ 
  propertyId: 5,
  workspaceId: 1,
  type: "Office Room",
  capacity: 12,
  smoking: "No",
  available: "2024-05-15",
  term: "Monthly",
  price: "2200",
  contactInfo: "owner.contact_5@email.com",
  rating: 4.9,
  imageURL: "img/workspace17.jpg",
},
{
  propertyId: 5,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 8,
  smoking: "Yes",
  available: "2024-04-10",
  term: "Weekly",
  price: "1800",
  contactInfo: "owner.contact_5@email.com",
  rating: 4.3,
  imageURL: "img/workspace18.jpg",
},
{ 
  propertyId: 6,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_6@email.com",
  rating: 4.7,
  imageURL: "img/workspace21.jpg",
},
{ 
  propertyId: 7,
  workspaceId: 1,
  type: "Office Room",
  capacity: 12,
  smoking: "No",
  available: "2024-05-15",
  term: "Monthly",
  price: "2200",
  contactInfo: "owner.contact_7@email.com",
  rating: 4.5,
  imageURL: "img/workspace25.jpg",
},
{
  propertyId: 7,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 8,
  smoking: "Yes",
  available: "2024-04-10",
  term: "Weekly",
  price: "1800",
  contactInfo: "owner.contact_7@email.com",
  rating: 4.2,
  imageURL: "img/workspace26.jpg",
},
{
  propertyId: 7,
  workspaceId: 3,
  type: "Study Room",
  capacity: 6,
  smoking: "No",
  available: "2024-03-25",
  term: "Daily",
  price: "900",
  contactInfo: "owner.contact_7@email.com",
  rating: 4.6,
  imageURL: "img/workspace27.jpg",
},
{ 
  propertyId: 8,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_8@email.com",
  rating: 4.4,
  imageURL: "img/workspace29.jpg",
},
{ 
  propertyId: 9,
  workspaceId: 1,
  type: "Office Room",
  capacity: 12,
  smoking: "No",
  available: "2024-05-15",
  term: "Monthly",
  price: "2200",
  contactInfo: "owner.contact_9@email.com",
  rating: 4.1,
  imageURL: "img/workspace33.jpg",
},
{
  propertyId: 9,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 8,
  smoking: "Yes",
  available: "2024-04-10",
  term: "Weekly",
  price: "1800",
  contactInfo: "owner.contact_9@email.com",
  rating: 4.8,
  imageURL: "img/workspace34.jpg",
},
{
  propertyId: 9,
  workspaceId: 3,
  type: "Study Room",
  capacity: 6,
  smoking: "No",
  available: "2024-03-25",
  term: "Daily",
  price: "900",
  contactInfo: "owner.contact_9@email.com",
  rating: 4.3,
  imageURL: "img/workspace35.jpg",
},
{
  propertyId: 9,
  workspaceId: 4,
  type: "Cubicle Space",
  capacity: 4,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Daily",
  price: "600",
  contactInfo: "owner.contact_9@email.com",
  rating: 4.5,
  imageURL: "img/workspace36.jpg",
},
{ 
  propertyId: 10,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_10@email.com",
  rating: 4.5,
  imageURL: "img/workspace37.jpg",
},
{
  propertyId: 10,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_10@email.com",
  rating: 4.2,
  imageURL: "img/workspace38.jpg",
},
{ 
  propertyId: 11,
  workspaceId: 1,
  type: "Office Room",
  capacity: 12,
  smoking: "No",
  available: "2024-05-15",
  term: "Monthly",
  price: "2200",
  contactInfo: "owner.contact_11@email.com",
  rating: 4.7,
  imageURL: "img/workspace41.jpg",
},
{
  propertyId: 11,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 8,
  smoking: "Yes",
  available: "2024-04-10",
  term: "Weekly",
  price: "1800",
  contactInfo: "owner.contact_11@email.com",
  rating: 4.0,
  imageURL: "img/workspace42.jpg",
},
{
  propertyId: 11,
  workspaceId: 3,
  type: "Study Room",
  capacity: 6,
  smoking: "No",
  available: "2024-03-25",
  term: "Daily",
  price: "900",
  contactInfo: "owner.contact_11@email.com",
  rating: 4.3,
  imageURL: "img/workspace43.jpg",
},
{ 
  propertyId: 12,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_12@email.com",
  rating: 4.6,
  imageURL: "img/workspace45.jpg",
},
{
  propertyId: 12,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_12@email.com",
  rating: 4.1,
  imageURL: "img/workspace46.jpg",
},
{
  propertyId: 12,
  workspaceId: 3,
  type: "Study Room",
  capacity: 5,
  smoking: "Yes",
  available: "2024-03-20",
  term: "Daily",
  price: "800",
  contactInfo: "owner.contact_12@email.com",
  rating: 4.8,
  imageURL: "img/workspace47.jpg",
},
{
  propertyId: 12,
  workspaceId: 4,
  type: "Cubicle Space",
  capacity: 3,
  smoking: "No",
  available: "2024-03-25",
  term: "Daily",
  price: "500",
  contactInfo: "owner.contact_12@email.com",
  rating: 4.4,
  imageURL: "img/workspace48.jpg",
},
{ 
  propertyId: 13,
  workspaceId: 1,
  type: "Office Room",
  capacity: 12,
  smoking: "No",
  available: "2024-05-15",
  term: "Monthly",
  price: "2200",
  contactInfo: "owner.contact_13@email.com",
  rating: 4.9,
  imageURL: "img/workspace49.jpg",
},
{ 
  propertyId: 14,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_14@email.com",
  rating: 4.3,
  imageURL: "img/workspace57.jpg",
},
{
  propertyId: 14,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_14@email.com",
  rating: 4.7,
  imageURL: "img/workspace58.jpg",
},
{
  propertyId: 14,
  workspaceId: 3,
  type: "Study Room",
  capacity: 5,
  smoking: "Yes",
  available: "2024-03-20",
  term: "Daily",
  price: "800",
  contactInfo: "owner.contact_14@email.com",
  rating: 4.5,
  imageURL: "img/workspace59.jpg",
},
{
  propertyId: 14,
  workspaceId: 4,
  type: "Cubicle Space",
  capacity: 3,
  smoking: "No",
  available: "2024-03-25",
  term: "Daily",
  price: "500",
  contactInfo: "owner.contact_14@email.com",
  rating: 4.2,
  imageURL: "img/workspace60.jpg",
},
{ 
  propertyId: 15,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_15@email.com",
  rating: 4.6,
  imageURL: "img/workspace61.jpg",
},
{
  propertyId: 15,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_15@email.com",
  rating: 4.4,
  imageURL: "img/workspace62.jpg",
},
{ 
  propertyId: 16,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_16@email.com",
  rating: 4.1,
  imageURL: "img/workspace65.jpg",
},
{
  propertyId: 16,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_16@email.com",
  rating: 4.8,
  imageURL: "img/workspace66.jpg",
},
{
  propertyId: 16,
  workspaceId: 3,
  type: "Study Room",
  capacity: 5,
  smoking: "Yes",
  available: "2024-03-20",
  term: "Daily",
  price: "800",
  contactInfo: "owner.contact_16@email.com",
  rating: 4.3,
  imageURL: "img/workspace67.jpg",
},
{ 
  propertyId: 17,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_17@email.com",
  rating: 4.5,
  imageURL: "img/workspace69.jpg",
},
{
  propertyId: 17,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_17@email.com",
  rating: 4.5,
  imageURL: "img/workspace70.jpg",
},
{ 
  propertyId: 18,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_18@email.com",
  rating: 4.5,
  imageURL: "img/workspace73.jpg",
},
{ 
  propertyId: 19,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_19@email.com",
  rating: 4.2,
  imageURL: "img/workspace77.jpg",
},
{
  propertyId: 19,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_19@email.com",
  rating: 4.7,
  imageURL: "img/workspace78.jpg",
},
{ 
  propertyId: 20,
  workspaceId: 1,
  type: "Office Room",
  capacity: 15,
  smoking: "No",
  available: "2024-04-30",
  term: "Monthly",
  price: "2000",
  contactInfo: "owner.contact_20@email.com",
  rating: 4.0,
  imageURL: "img/workspace81.jpg",
},
{
  propertyId: 20,
  workspaceId: 2,
  type: "Meeting Room",
  capacity: 10,
  smoking: "Yes",
  available: "2024-03-30",
  term: "Weekly",
  price: "1500",
  contactInfo: "owner.contact_20@email.com",
  rating: 4.3,
  imageURL: "img/workspace82.jpg",
},
{
  propertyId: 20,
  workspaceId: 3,
  type: "Study Room",
  capacity: 5,
  smoking: "Yes",
  available: "2024-03-20",
  term: "Daily",
  price: "800",
  contactInfo: "owner.contact_20@email.com",
  rating: 4.6,
  imageURL: "img/workspace83.jpg",
},
{
  propertyId: 20,
  workspaceId: 4,
  type: "Cubicle Space",
  capacity: 3,
  smoking: "No",
  available: "2024-03-25",
  term: "Daily",
  price: "500",
  contactInfo: "owner.contact_20@email.com",
  rating: 4.1,
  imageURL: "img/workspace84.jpg",
}  
];



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
  var propertyTable = document.getElementById("propertyTable").getElementsByTagName('tbody')[0];
  propertyTable.innerHTML = ""; // Clear existing data

  var uniqueProperties = {};
  propertyData.forEach(function(property) {
    if (!uniqueProperties.hasOwnProperty(property.propertyId)) {
      uniqueProperties[property.propertyId] = property;
    }
  });

  Object.values(uniqueProperties).forEach(function(property) {
    var row = propertyTable.insertRow();
    row.innerHTML = `
      <td>${property.propertyId}</td>
      <td>${property.address}</td>
      <td>${property.neighborhood}</td>
      <td>${property.squareFeet}</td>
      <td>${property.parking}</td>
      <td>${property.publicTranspo}</td>
      <td><button class="button" onclick="viewAvailableWorkspaces(${property.propertyId})">View Available Workspaces</button></td>
    `;
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
    <th>Workspace ID</th>
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



