 const phrase = "Good morning Ma, Ma please i want to inform you of my plans for the moment, Am intending to start learning js frameWorks by March 2024, reason being that from 8 jan, i will be writing my Main Second semester exam and it will be taking 2 weeks and i want to use my second semester holiday, to really practice alot of js projects especially this Api thing, so by God's grace march, i will start learning the frameworks..... Don't be offended ma, Am doing this, so i can get to really understand the language and myself via practice hours very well.....Thanks for understanding ";
    const container = document.getElementById("letter-container");

    function displayLetters() {
      container.innerHTML = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index >= phrase.length) {
          clearInterval(interval);
          setTimeout(displayLetters, 2000); // Wait for 2 seconds before starting again
          return;
        }

        if (phrase[index] === " ") {
          const space = document.createElement("span");
          space.className = "space";
          container.appendChild(space);
        } else {
          const letter = document.createElement("span");
          letter.className = "letter";
          letter.textContent = phrase[index];
          container.appendChild(letter);
        }

        index++;
      }, 100);
    }

    displayLetters();