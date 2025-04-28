document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const heroTitle = document.querySelector(".hero h1");
  const originalText = "Welcome to My Portfolio";
  
  // Remove previous text if any
  heroTitle.innerHTML = "";

  // Create a typing cursor
  const cursor = document.createElement("span");
  cursor.className = "typing-cursor";
  heroTitle.appendChild(cursor);

  let i = 0;
  const typeSpeed = 100;
  const waitAfterComplete = 2000;

  function typeWriter() {
    if (i < originalText.length) {
      heroTitle.insertBefore(document.createTextNode(originalText.charAt(i)), cursor);
      i++;
      setTimeout(typeWriter, typeSpeed);
    } else {
      // After completing, reset after a pause
      setTimeout(() => {
        heroTitle.innerHTML = "";
        heroTitle.appendChild(cursor);
        i = 0;
        setTimeout(typeWriter, typeSpeed);
      }, waitAfterComplete);
    }
  }

  setTimeout(typeWriter, 500);
});
