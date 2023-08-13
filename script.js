document.getElementById("fetchButton").addEventListener("click", function() {
    fetchRandomPhoto()
        .then(photoUrl => {
            displayPhoto(photoUrl);
        })
        .catch(error => {
            console.error("Error fetching photo:", error);
            document.getElementById("photoContainer").innerHTML = "Error fetching photo.";
        });
});

async function fetchRandomPhoto() {
    const accessKey = "qdofhMBaQuWrDJ7YhyDWq5d7HBNIF0sLkn-0toLOkvE"; // Replace with your Unsplash access key
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
    const photoData = await response.json();
    return photoData.urls.regular;
}

function displayPhoto(photoUrl) {
    const photoContainer = document.getElementById("photoContainer");
    photoContainer.innerHTML = `<img src="${photoUrl}" alt="Random Photo">`;
}
