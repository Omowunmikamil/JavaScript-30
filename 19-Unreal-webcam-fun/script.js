const video = document.querySelector('.player'); // Get the video element
const canvas = document.querySelector('.photo'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the canvas context
const strip = document.querySelector('.strip'); // Get the strip element
const snap = document.querySelector('.snap'); // Get the snap sound element

// Set the willReadFrequently attribute to true
ctx.canvas.willReadFrequently = true;

function getVideo() {
    // Get the webcam video
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }) // Get the webcam video
        .then(localMediaStream => { // If the webcam is accessed
            console.log(localMediaStream); // Log the webcam stream
            video.srcObject = localMediaStream; // Set the video's source to the webcam stream
            video.play(); // Play the video
        })
        .catch(err => { // If there's an error
            console.error('Error accessing webcam:', err); // Log the error
        });
}

function paintOnCanvas() {
    // Paint the video on the canvas
    const width = video.videoWidth; // Get the video width and height
    const height = video.videoHeight; // Get the video width and height
    canvas.width = width; // Set the canvas width and height to the video width and height
    canvas.height = height; // Set the canvas width and height to the video width and height

    // Return the interval so we can stop it later
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height); // Draw the video on the canvas
        let pixels = ctx.getImageData(0, 0, width, height); // Get the pixels from the canvas Or take the pixel data out of the canvas

        // pixels = redEffect(pixels); // Mess with the pixels

        // pixels = rgbSplit(pixels); // Mess with the pixels

        // ctx.globalAlpha = 0.7; // Set the transparency

        pixels = greenScreen(pixels); // Mess with the pixels

        ctx.putImageData(pixels, 0, 0); // Put the pixels back on the canvas

        // debugger; // Stop the script

    }, 16); // Every 16ms (60fps)
}

function takePhoto() {
    // Play the snap sound
    snap.currentTime = 0; // Rewind the sound
    snap.play(); // Play the sound

    // Take data out of the canvas
const data = canvas.toDataURL('image/jpeg'); // Returns base64 encoded image
const link = document.createElement('a'); // Create a link
link.href = data; // Set the link's href to the base64 image
link.setAttribute('download', 'incredibleLady'); // Set the link's download attribute to the image name
link.innerHTML = `<img src="${data}" alt="Incredible Lady" />`; // Set the link's innerHTML to an image tag with the base64 image
strip.insertBefore(link, strip.firstChild); // Insert the link into the strip
}

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100;  // Red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // Green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];  // Red
        pixels.data[i + 100] = pixels.data[i + 1]; // Green
        pixels.data[i - 150] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {}; // Create an object to hold the minimum and maximum green

    // Iterate over each input element with class 'rgb'
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value; // Set the object's property to the input's value
    });

    // Initialize variables inside the loop
    let red, green, blue, alpha;

    // Loop through each pixel
    for (let i = 0; i < pixels.data.length; i += 4) {
        red = pixels.data[i + 0]; // Get the red value
        green = pixels.data[i + 1]; // Get the green value
        blue = pixels.data[i + 2]; // Get the blue value
        alpha = pixels.data[i + 3]; // Get the alpha value

        // Check if the pixel values fall within the specified range
        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
            // If the pixel is within the range, set the alpha to 0 and take it out
            pixels.data[i + 3] = 0; // Set the alpha to 0
        }
    }

    return pixels; // Return the modified pixels
}



getVideo();

// Listen for the video to be ready
video.addEventListener('canPlay', paintOnCanvas);