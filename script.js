function showPreview(event){
    if(event.target.files.length>0){
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("image");
        preview.src = src;
    }
}
// Simulated plant identification function (replace with actual logic)
function identifyPlant(imageData) {
    // Simulate an asynchronous request (replace with actual API call)
    setTimeout(() => {
        // Simulated identification result (replace with actual result)
        const identificationResult = "The plant is identified as: <strong>Tulsi (Holy Basil)</strong>";

        // Display the identification result
        displayResult(identificationResult);
    }, 2000); // Simulate a 2-second delay (adjust as needed)
}

// Display the identification result
function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result;
}

// Handle file input change
document.getElementById("imageInput").addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageData = e.target.result;

            // Call the identification function with the image data
            identifyPlant(imageData);
        };

        reader.readAsDataURL(file);
    }
});
