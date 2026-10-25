

const urlParams = new URLSearchParams(window.location.search);
const selectedVehicle = urlParams.get("vehicle");

const vehicleInput = document.getElementById("vehicle");

if (vehicleInput && selectedVehicle) {
    vehicleInput.value = selectedVehicle;
}


const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customerName =
            document.getElementById("customerName").value.trim();

        const vehicleName =
            document.getElementById("vehicle").value.trim();

        const message =
            document.getElementById("bookingMessage");

        message.textContent =
            "Thank you, " + customerName +
            "! Your demo booking request for " +
            vehicleName + " has been submitted.";

        bookingForm.reset();
    });
}


const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
