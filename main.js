// Smooth Scroll Navigation
const navLinks = document.querySelectorAll('a[href^="#"]');

const smoothScroll = (anchor) => {
  const id = anchor.getAttribute("href");
  const target = document.querySelector(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(link);
  });
});

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (name.length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.length < 5) {
      alert("Message must be at least 5 characters.");
      return;
    }

    alert("Thank you! Your message has been received.");
    form.reset();
  });
});

// Sticky Header Effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("site-header");

  if (window.scrollY > 50) {
    header.classList.add("sticky-active");
  } else {
    header.classList.remove("sticky-active");
  }
});

// Scroll-To-Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
