// Select elements
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");

// Theme toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  // Update button icon & aria-pressed
  const isLight = body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙 Dark Mode" : "☀️ Bright Mode";
  themeToggle.setAttribute("aria-pressed", isLight);
});

// Hamburger menu toggle
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
  navList.classList.toggle("show");
});

const skills = document.querySelectorAll('.skill');

const options = {
  threshold: 0.5
};

const animateSkill = (entry) => {
  const progress = entry.target.querySelector('.progress');
  const percentageText = entry.target.querySelector('.percentage');
  const maxProgress = progress.getAttribute('data-progress');
  let currentProgress = 0;

  if (entry.isIntersecting) {
    const interval = setInterval(() => {
      if (currentProgress >= maxProgress) {
        clearInterval(interval);
      } else {
        currentProgress++;
        progress.style.width = currentProgress + "%";
        percentageText.textContent = currentProgress + "%";
      }
    }, 20); // speed of animation
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkill(entry);
      observer.unobserve(entry.target); // Run only once
    }
  });
}, options);

skills.forEach(skill => {
  observer.observe(skill);
});
