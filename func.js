
function toggleFlashcard(element) {
    // Toggle the class 'flipped' on the parent element
    element.classList.toggle('flipped');
}


const typingEffectLoop = {
    textArray: [
        "you've made it to sneha's portfolio website!",
        "i'm sneha, a data scientist",
        "n I L L I N I 💙 🧡",
        " a full-stack developer",
      ],
  
    index: 0,
    isDeleting: false,
    text: "",
    speed: 100,
  
    type: function () {
      if (!this.isDeleting) {
        this.addLetters();
      } else {
        this.removeLetters();
      }
    },
  
    addLetters: function () {
      var currentText = this.textArray[this.index];
      if (this.index == 3 || this.index == 2) {
        currentText = "i'm sneha, a" + this.textArray[this.index].substring(this.textArray[this.index].indexOf(","));
      }
      this.text = currentText.substring(0, this.text.length + 1);
      this.updateText();
    },
  
    removeLetters: function () {
      var currentText = this.textArray[this.index];
      if (this.index == 3 || this.index == 2) {
        currentText = "i'm sneha, a" + this.textArray[this.index].substring(this.textArray[this.index].indexOf(","));
      }
      this.text = currentText.substring(0, this.text.length - 1);
      this.updateText();
    },
  
    updateText: function () {
      let typedText = '';
      let colorIndex = 0;
      const colors = ['navy', '#f04a00']; // Define the colors to alternate
      
      for (let i = 0; i < this.text.length; i++) {
        let letter = this.text[i];
        if (letter === 'I' || letter === 'L' || letter === 'N') {
          typedText += `<span style="color: ${colors[colorIndex]};">${letter}</span>`;
          colorIndex = (colorIndex + 1) % colors.length; // Alternate colors
        } else {
          typedText += letter;
        }
      }
      if (this.text == "") {
        document.getElementById("typingEffect").innerHTML = `<span>&nbsp; </span>`;
      } else {
        document.getElementById("typingEffect").innerHTML = `<span>${typedText}</span>`;
      }
      let delta = this.speed;
      if (this.isDeleting) {
        delta /= 1.5;
      }
      if (!this.isDeleting && this.text.length >= this.textArray[this.index].length && (this.index == 0 || this.index == 1)) {
        delta = 2000;
        this.isDeleting = true;
      } else if (!this.isDeleting && this.text.length >= this.textArray[this.index].length + "I'm Sneha, a".length) {
        delta = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.text === "") {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.textArray.length;
        delta = 500;
      } else if (this.isDeleting && this.text == "I'm Sneha, a" && (this.index == 1 || this.index == 2)) {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.textArray.length;
        delta = 500;
      }
      setTimeout(this.type.bind(this), delta);
    },
  };
  window.onload = function () {
    typingEffectLoop.type();
  }
