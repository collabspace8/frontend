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

        // Make AJAX request to backend to search properties and workspaces
        fetch("http://localhost:3000/coworker-propertySearch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address: addressInput,
                neighborhood: neighborhoodInput,
                minSquareFeet: minSquareFeetInput,
                maxSquareFeet: maxSquareFeetInput,
                parking: parkingInput,
                publicTranspo: publicTranspoInput,
                minCapacity: minCapacityInput,
                maxCapacity: maxCapacityInput,
                minPrice: minPriceInput,
                maxPrice: maxPriceInput,
                fromDate: fromDate,
                toDate: toDate,
                smoking: smokingInput,
                term: termInput
            })
        })
        .then(response => response.json())
        .then(filteredProperties => {
            // Clear previous data
            tableBody.innerHTML = "";

            // Render filtered properties and their associated workspaces
            if (filteredProperties.length > 0) {
                filteredProperties.forEach(function (property) {
                    var row = document.createElement("tr");
                    row.innerHTML = `<td>${property.propertyId}</td><td>${property.address}</td>
                    <td>${property.neighborhood}</td><td>${property.squareFeet}</td><td>${property.parking}</td>
                    <td>${property.publicTranspo}</td><td><button class="viewWorkspaceBtn" data-id="${property.propertyId}">View Workspace</button></td>`;
                    tableBody.appendChild(row);

                    // Render associated workspaces
                    property.workspaces.forEach(function(workspace) {
                        var workspaceRow = document.createElement("tr");
                        workspaceRow.innerHTML = `<td>${workspace.workspaceId}</td><td>${workspace.type}</td>
                        <td>${workspace.capacity}</td><td>${workspace.smoking}</td><td>${workspace.available}</td>
                        <td>${workspace.term}</td><td>${workspace.price}</td>`;
                        tableBody.appendChild(workspaceRow);
                    });
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
        })
        .catch(error => {
            console.error("Error searching properties:", error);
        });
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

    // Function for Log Out Button
    document.getElementById("logoutBtn").addEventListener("click", function() {
        window.location.href = "index.html"; 
    });
});
