document.addEventListener("DOMContentLoaded", () => {
  // Enhanced counter animation
  const counters = document.querySelectorAll(".counter");
  
  const animateCounter = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 150; // Slightly faster animation
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('counter')) {
          animateCounter(entry.target);
        }
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe counters and other elements
  counters.forEach(counter => {
    observer.observe(counter);
  });

  // Add fade-in class to elements for animation
  const animatedElements = document.querySelectorAll('.stat, .feature, .contact-box, .price-box');
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Header scroll effect
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  });

  // Enhanced smooth scrolling
  window.scrollToBottom = function() {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Add subtle parallax effect to hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Enhanced hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('.stat, .feature, .contact-box, .price-box');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });
});

// Function to scroll to bottom of page
function scrollToBottom() {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Function to redirect to BookMyShow
function redirectToBookMyShow() {
  window.open('https://in.bookmyshow.com/events/music-for-meals/ET00444205', '_blank');
}