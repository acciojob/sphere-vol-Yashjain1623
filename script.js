function volume_sphere() {
    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;
    const volumeElement = document.getElementById('volume');
    
    // Parse and validate the input
    const radius = parseFloat(radiusInput);
    if (isNaN(radius) || radius < 0) {
        // If invalid, display 'NaN'
        volumeElement.value = 'NaN';
        return;
    }
    
    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Display the volume rounded to four decimal places
    volumeElement.value = volume.toFixed(4);
}

// Attach the function to the form submit event
document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    volume_sphere(); // Call the function to calculate and display the volume
});


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
