window.onload = function() {
    document.querySelector('.wel').classList.add('visible');
};

// Add event listeners for the clickable options
document.getElementById('goToRestRoom1').addEventListener('click', function() {
    transitionToVideo(document.getElementById('secondVideo')); // Play the second video
});

document.getElementById('goToRestRoom2').addEventListener('click', function() {
    transitionToVideo(document.getElementById('thirdVideo')); // Play the third video (rest2.mp4)
});

document.getElementById('goToFlash').addEventListener('click', function() {
    transitionToVideo(document.getElementById('fourthVideo')); // Play the fourth video (flash.mp4)
});

// Function to handle video transition
function transitionToVideo(videoToPlay) {
    const firstVideo = document.querySelector('.vid video:first-of-type');
    const goBackButton = document.getElementById('goBackButton');

    // Hide the first video and fade out
    firstVideo.style.opacity = '0';
    
    setTimeout(() => {
        firstVideo.style.display = 'none'; // Hide entrance video
        videoToPlay.currentTime = 0; // Reset the new video to the start
        videoToPlay.style.display = 'block'; // Show the new video
        videoToPlay.play(); // Start playing the new video
        videoToPlay.style.opacity = '1'; // Make sure the new video fades in
        goBackButton.style.display = 'block'; // Show the go-back button
    }, 1000); // Match this duration with the CSS transition duration
}

// Initially hide the second, third, fourth videos, and the go back button
document.getElementById('secondVideo').style.display = 'none';
document.getElementById('thirdVideo').style.display = 'none';
document.getElementById('fourthVideo').style.display = 'none';
document.getElementById('goBackButton').style.display = 'none';

// Add functionality for the go back button
document.getElementById('goBackButton').addEventListener('click', function() {
    const firstVideo = document.querySelector('.vid video:first-of-type'); // entrance video
    const secondVideo = document.getElementById('secondVideo');
    const thirdVideo = document.getElementById('thirdVideo');
    const fourthVideo = document.getElementById('fourthVideo');
    const goBackButton = document.getElementById('goBackButton');

    // Stop and hide any video that's currently playing
    const currentlyPlaying = document.querySelector('video[style*="display: block"]');
    if (currentlyPlaying) {
        currentlyPlaying.style.opacity = '0'; // Start fading out the currently playing video

        setTimeout(() => {
            currentlyPlaying.style.display = 'none'; // Hide the currently playing video
            currentlyPlaying.pause(); // Pause the currently playing video

            // Reset and play the entrance video
            firstVideo.style.display = 'block'; // Show the entrance video
            firstVideo.currentTime = 0; // Reset the entrance video to the start
            firstVideo.play(); // Start playing the entrance video
            firstVideo.style.opacity = '1'; // Ensure the entrance video is visible
            
            goBackButton.style.display = 'none'; // Hide the go back button
        }, 1000); // Match this duration with the CSS transition duration
    }
});
