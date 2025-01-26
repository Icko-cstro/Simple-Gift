// components/Footer.js
export function Footer() {
  const footer = document.createElement('footer');


  // Lyrics array
  const lyrics = [
      "Happy Birthday to you!",
      "Happy Birthday to you!!",
      "Happy Birthday dear Riechelle!!",
      "Happy Birthday to you!!!"
  ];

  // Timing for each stanza in milliseconds
  const timings = [
      4000, // Time for the first stanza
      3500, // Time for the second stanza
      4000, // Time for the third stanza
      4000  // Time for the fourth stanza
  ];

  // Audio element with the provided link
  const audio = new Audio('https://res.cloudinary.com/drkmgpcad/video/upload/v1737909145/q5hjydohd3fjoeddldki.mp3');

  let currentLyricIndex = 0;
  let isPlaying = false; // Track whether the audio is playing
  let intervalId; // To store the interval ID for clearing later

  // Function to update lyrics
  const updateLyrics = () => {

      playButton.textContent = lyrics[currentLyricIndex]; // Update the button text
      currentLyricIndex = (currentLyricIndex + 1) % lyrics.length; // Loop through lyrics

      // Clear the previous interval and set a new one based on the current timing
      clearInterval(intervalId);
      intervalId = setTimeout(updateLyrics, timings[currentLyricIndex]); // Set the next update based on the timing
  };

  // Button to play/pause audio with the first stanza
  const playButton = document.createElement('button');
  playButton.textContent = lyrics[0]; // Set button text to the first stanza
  playButton.className = 'play-button'; // Add a class for styling
  playButton.style.marginTop = '10px'; // Optional styling

  playButton.addEventListener('click', () => {
      if (!isPlaying) {
          audio.play().then(() => {
              updateLyrics(); // Show the first lyric immediately
              intervalId = setTimeout(updateLyrics, timings[currentLyricIndex]); // Set the first timing
              isPlaying = true; // Set playing state to true
          }).catch(error => {
              console.error("Audio playback failed:", error);
          });
      } else {
          audio.pause(); // Pause the audio
          clearInterval(intervalId); // Clear the interval
          isPlaying = false; // Set playing state to false
      }
  });


  footer.appendChild(playButton); // Append play button to footer

  return footer;
}