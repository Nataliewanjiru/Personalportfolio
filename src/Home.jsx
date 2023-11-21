import "./App.css"
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const statements = [
      "I am a frontend Developer",
      "I am a backend Developer",
      "I do Web hosting",
    ];

    let index = 0;
    let charIndex = 0;
    let timer;

    function typeWriter() {
      const changingTextElement = document.getElementById("changingText");
      const currentStatement = statements[index];

      if (changingTextElement && charIndex < currentStatement.length) {
        changingTextElement.textContent += currentStatement.charAt(charIndex);
        charIndex++;
        timer = setTimeout(typeWriter, 90); // Adjust typing speed (100 milliseconds here)
      } else {
        index = (index + 1) % statements.length;
        charIndex = 0;
        if (changingTextElement) {
          changingTextElement.textContent = ''; // Clear the content for the next statement
        }
        timer = setTimeout(typeWriter, 1000); // Wait before starting the next statement (1000 milliseconds here)
      }
    }

    // Call the function to start the typing effect
    typeWriter();

    // Cleanup function to clear the timer
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="homePageParent">
      <h1>Natalie Wanjiru</h1>
      <p id="changingText">I am a developer</p>
    </div>
  );
};

export default Home;
