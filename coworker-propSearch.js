
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

