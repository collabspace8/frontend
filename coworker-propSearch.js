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


// Declare tableBody globally
var tableBody;

document.addEventListener("DOMContentLoaded", function() {
    tableBody = document.getElementById("propertyDataTable");
    var searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", function (event) {
        event.preventDefault();
    
        // Get input values
        var addressInput = document.getElementById("address").value.toLowerCase();
        var neighborhoodInput = document.getElementById("neighborhood").value.toLowerCase();
        var minSquareFeetInput = parseInt(document.getElementById("minSquareFeet").value) || 0;
        var maxSquareFeetInput = parseInt(document.getElementById("maxSquareFeet").value) || Infinity;
        var parkingInput = document.getElementById("parking").value;
        var publicTranspoInput = document.getElementById("publicTranspo").value;
        var minCapacityInput = parseInt(document.getElementById("minCapacity").value) || 0;
        var maxCapacityInput = parseInt(document.getElementById("maxCapacity").value) || Infinity;
        var minPriceInput = parseFloat(document.getElementById("minPrice").value) || 0;
        var maxPriceInput = parseFloat(document.getElementById("maxPrice").value) || Infinity;
        var fromDate = document.getElementById("fromDate").value;
        var toDate = document.getElementById("toDate").value;
        var smokingInput = document.getElementById("smoking").value;
        var termInput = document.getElementById("term").value;
    
        tableBody.innerHTML = "";
    
        var filteredProperties = propertyData.filter(function (property) {
            var propertyMatch = (!addressInput || property.address.toLowerCase().includes(addressInput)) &&
                (!neighborhoodInput || property.neighborhood.toLowerCase().includes(neighborhoodInput)) &&
                (property.squareFeet >= minSquareFeetInput && property.squareFeet <= maxSquareFeetInput) &&
                (!parkingInput || property.parking === parkingInput) &&
                (!publicTranspoInput || property.publicTranspo === publicTranspoInput);
    
            var associatedWorkspaces = workspaceData.filter(function (workspace) {
                return workspace.propertyId === property.propertyId;
            });
    
            var workspaceMatch = associatedWorkspaces.some(function (workspace) {
                var workspaceAvailable = new Date(workspace.available);
                var fromDateObj = fromDate ? new Date(fromDate) : null;
                var toDateObj = toDate ? new Date(toDate) : null;
    
                var isAvailableFrom = !fromDateObj || workspaceAvailable >= fromDateObj;
                var isAvailableTo = !toDateObj || workspaceAvailable <= toDateObj;
    
                return (workspace.capacity >= minCapacityInput &&
                    workspace.capacity <= maxCapacityInput) &&
                    (!smokingInput || workspace.smoking === smokingInput) &&
                    (!termInput || workspace.term === termInput) &&
                    ((!isNaN(minPriceInput) && !isNaN(maxPriceInput)) ||
                        (workspace.price >= minPriceInput && workspace.price <= maxPriceInput)) &&
                    isAvailableFrom && isAvailableTo;
            });
    
            return propertyMatch && (workspaceMatch || associatedWorkspaces.length === 0);
        });
    
        // Render filtered properties
        if (filteredProperties.length > 0) {
            filteredProperties.forEach(function (property) {
                var row = document.createElement("tr");
                row.innerHTML = `<td>${property.propertyId}</td><td>${property.address}</td>
                <td>${property.neighborhood}</td><td>${property.squareFeet}</td><td>${property.parking}</td>
                <td>${property.publicTranspo}</td><td><button class="viewWorkspaceBtn" data-id="${property.propertyId}">View Workspace</button></td>`;
                tableBody.appendChild(row);
            });
        } else {
            var noDataRow = document.createElement("tr");
            var noDataCell = document.createElement("td");
            noDataCell.colSpan = 7;
            noDataCell.textContent = "No property available";
            noDataCell.style.textAlign = "center";
            noDataRow.appendChild(noDataCell);
            tableBody.appendChild(noDataRow);
        }
    });



// Add event listener to handle clicks on the "View Workspace" button
tableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("viewWorkspaceBtn")) {
        var propertyId = event.target.dataset.id;
        
        // Redirect to coworker-workSpace.html with propertyId as query parameter
        window.open("coworker-workSpace.html?propertyId=" + propertyId);
    }
});


// Function to sort the search results table by neighborhood
function SortTable(column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("propertyTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("td")[getColumnIndex(column)].innerText.toLowerCase();
            y = rows[i + 1].getElementsByTagName("td")[getColumnIndex(column)].innerText.toLowerCase();

            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// Function to get the column index based on the column name
function getColumnIndex(columnName) {
    var headers = document.getElementById("propertyTable").rows[0].cells;
    for (var i = 0; i < headers.length; i++) {
        if (headers[i].textContent.toLowerCase() === columnName.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

    // Add event listener to the sort button
    var sortButton = document.getElementById("sortButton");
    sortButton.addEventListener("click", function() {
        SortTable("Neighborhood");
    });
    

// Clear Filters Button Functionality
var clearFiltersBtn = document.getElementById("clearFiltersBtn");
clearFiltersBtn.addEventListener("click", function () {
    document.getElementById("address").value = "";
    document.getElementById("neighborhood").value = "";
    document.getElementById("minSquareFeet").value = "";
    document.getElementById("maxSquareFeet").value = "";
    document.getElementById("parking").value = "";
    document.getElementById("publicTranspo").value = "";
    document.getElementById("minCapacity").value = "";
    document.getElementById("maxCapacity").value = "";
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    document.getElementById("fromDate").value = "";
    document.getElementById("toDate").value = "";
    document.getElementById("smoking").value = "";
    document.getElementById("term").value = "";
    tableBody.innerHTML = ""; // Clear the table content
});

//Function for Log Out Button
document.getElementById("logoutBtn").addEventListener("click", function() {
  window.location.href = "index.html"; 
});


});

