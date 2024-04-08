document.addEventListener("DOMContentLoaded", () => {
  let propertyToEdit = JSON.parse(sessionStorage.getItem("propertyToEdit"));
  let propertyData = JSON.parse(sessionStorage.getItem("propertyData"));

  // Function to populate the edit form fields with data from session storage
  const populateFormFields = () => {
    document.getElementById("propertyId").value = propertyToEdit.propertyId;
    document.getElementById("address").value = propertyToEdit.address;
    document.getElementById("neighborhood").value = propertyToEdit.neighborhood;
    document.getElementById("squarefeet").value = propertyToEdit.squarefeet;
    document.getElementById("parking").value = propertyToEdit.parking;
    document.getElementById("publicTranspo").value =
      propertyToEdit.publicTranspo;
  };

  // Populate the form fields initially
  populateFormFields();

  const form = document.getElementById("editForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Update the table row with new values from the form
    const updatedValues = [
      form.propertyId.value,
      form.address.value,
      form.neighborhood.value,
      form.squarefeet.value,
      form.parking.value,
      form.publicTranspo.value,
    ];

    // Find the currently editing row by propertyId
    const currentEditingRow = document.querySelector(
      `#propertyBody tr[data-property-id="${updatedValues[0]}"]`
    );

    if (currentEditingRow) {
      // Update the cells of the table row
      const cells = currentEditingRow.querySelectorAll("td");

      cells[1].textContent = updatedValues[1];
      cells[2].textContent = updatedValues[2];
      cells[3].textContent = updatedValues[3];
      cells[4].textContent = updatedValues[4];
      cells[5].textContent = updatedValues[5];
    } else {
      console.log("Can't locate the row.");
    }

    // Update data in propertyData with the updated values
    const index = propertyData.findIndex(
      (prop) => prop.propertyId === propertyToEdit.propertyId
    );
    if (index !== -1) {
      propertyData[index].address = updatedValues[1];
      propertyData[index].neighborhood = updatedValues[2];
      propertyData[index].squarefeet = updatedValues[3];
      propertyData[index].parking = updatedValues[4];
      propertyData[index].publicTranspo = updatedValues[5];
    }

    // Update propertyData in sessionStorage
    sessionStorage.setItem("propertyData", JSON.stringify(propertyData));

    // Redirect to the owner-property.html page
    window.location.href = "owner-property.html";
  });

  // Handle back button click
  document.getElementById("backEdit").addEventListener("click", () => {
    // Redirect to the owner-property.html page
    window.location.href = "owner-property.html";
  });
});
