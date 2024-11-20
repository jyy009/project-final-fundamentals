import "./styles.css";


document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body after a delay to trigger the transition
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100  ); // Adjust the delay as needed

  });