// Hero Slider
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let index = 0;
let autoPlay = true;
let slideInterval;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
  });
  index = i;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

if (rightArrow && leftArrow) {
  rightArrow.addEventListener("click", () => {
    nextSlide();
    resetTimer();
  });

  leftArrow.addEventListener("click", () => {
    prevSlide();
    resetTimer();
  });
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetTimer() {
  clearInterval(slideInterval);
  if (autoPlay) startAutoSlide();
}

if (autoPlay && slides.length > 1) startAutoSlide();

// Service card animation on scroll
const cards = document.querySelectorAll(".service-card");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add("visible");
    }
  });
});

// Responsive Navbar Hamburger
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const closeNav = document.querySelector('.close-nav');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeNav && navLinks) {
    closeNav.addEventListener('click', function () {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  // Close nav when clicking outside
  window.addEventListener('click', function (e) {
    if (
      navLinks &&
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Dropdown toggle for mobile
  const dropdowns = document.querySelectorAll('.dropdown > a');
  dropdowns.forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('open');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial-item");
  const prevBtn = document.querySelector(".arrow-t.prev");
  const nextBtn = document.querySelector(".arrow-t.next");

  let currentIndex = 0;

  // Function to show testimonial
  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  // Next button
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
      currentIndex = 0; // loop back to first
    }
    showTestimonial(currentIndex);
  });

  // Prev button
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = testimonials.length - 1; // loop back to last
    }
    showTestimonial(currentIndex);
  });

  // Auto-slide (optional)
  setInterval(() => {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
      currentIndex = 0;
    }
    showTestimonial(currentIndex);
  }, 6000); // every 6 seconds
});


// Newsletter form submit
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if(email) {
        alert('Thank you for subscribing, ' + email + '!');
        this.reset();
      }
    });
  }
});
// Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.tab-section');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Hide all sections
        sections.forEach(section => section.style.display = 'none');

        // Activate clicked tab
        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        document.getElementById(target).style.display = 'block';
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");

  const options = {
    threshold: 0.5
  };

  const startCount = (counter) => {
    const targetStr = counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    const decimalPlaces = parseInt(counter.getAttribute("data-decimal")) || 0;

    let target = parseFloat(targetStr);
    let start = 0;
    let duration = 2000; // in ms
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      let current = start + (target - start) * (progress / duration);
      if (progress >= duration) {
        current = target;
      }
      // Format number
      if (decimalPlaces > 0) {
        counter.innerText = current.toFixed(decimalPlaces) + suffix;
      } else {
        counter.innerText = Math.floor(current) + suffix;
      }
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  // Use IntersectionObserver so counting starts when section is visible
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCount(counter);
        obs.unobserve(counter);
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });
});

  document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.testimonial-item');
  const prevBtn = document.querySelector('.arrow.prev');
  const nextBtn = document.querySelector('.arrow.next');
  let currentIndex = 0;
  const total = items.length;

  function showTestimonial(index) {
    items.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + total) % total;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % total;
    showTestimonial(currentIndex);
  });

  // Optionally auto-cycle every few seconds
  // Uncomment if you want auto-slide
  /*
  setInterval(function() {
    currentIndex = (currentIndex + 1) % total;
    showTestimonial(currentIndex);
  }, 5000);
  */

  // Initially show first
  showTestimonial(currentIndex);
});

// ...existing code...

// Hamburger and mobile nav
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-nav-overlay');

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }
  function openMobileNav() {
    mobileNav.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (hamburger && mobileNav && overlay) {
    hamburger.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
    overlay.addEventListener('click', closeMobileNav);
  }

  // Dropdown toggle for mobile
  mobileNav.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');
    });
  });

  // Close mobile nav on link click (except dropdown toggles)
  mobileNav.querySelectorAll('a:not(.dropdown > a)').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
});

// ...rest of your JS remains unchanged...
// document.addEventListener("DOMContentLoaded", () => {
//   const showcase = document.querySelector(".page-service-image-showcase");
//   const images = showcase.querySelectorAll("img");
//   let index = 0;

//   // Hide all except the first
//   images.forEach((img, i) => {
//     img.style.display = i === 0 ? "block" : "none";
//   });

//   function showSlide(i) {
//     index = (i + images.length) % images.length;

//     images.forEach((img, idx) => {
//       img.style.display = idx === index ? "block" : "none";
//     });
//   }

//   // Auto-slide every 3s (remove if you only want manual)
//   setInterval(() => showSlide(index + 1), 3000);
// });



  document.addEventListener("DOMContentLoaded", () => {
    const showcases = document.querySelectorAll(".page-service-image-showcase");

    showcases.forEach(showcase => {
      const images = showcase.querySelectorAll("img");
      let index = 0;

      // make sure only the first is visible
      images.forEach((img, i) => {
        img.style.display = i === 0 ? "block" : "none";
      });

      // slideshow loop
      setInterval(() => {
        images[index].style.display = "none";   // hide current
        index = (index + 1) % images.length;    // move to next
        images[index].style.display = "block";  // show next
      }, 3000); // change every 3s
    });
  });



  
    document.addEventListener('DOMContentLoaded', () => {
        const skillBars = document.querySelectorAll('.progress-bar-line');

        /**
         * The Intersection Observer callback function.
         * @param {IntersectionObserverEntry[]} entries - An array of observed elements' entries.
         * @param {IntersectionObserver} observer - The observer instance.
         */
        const animateSkills = (entries, observer) => {
            entries.forEach(entry => {
                // Check if the element is currently visible in the viewport
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    // Get the target percentage from the data attribute
                    const level = bar.getAttribute('data-skill-level');
                    
                    // Set the width to trigger the CSS transition
                    bar.style.width = `${level}%`;
                    
                    // Stop observing after animation is triggered
                    observer.unobserve(bar);
                }
            });
        };

        // Options for the observer: 0.1 means trigger when 10% of the element is visible
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 
        };

        // Create the observer instance
        const observer = new IntersectionObserver(animateSkills, observerOptions);

        // Start observing each skill bar
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    });

