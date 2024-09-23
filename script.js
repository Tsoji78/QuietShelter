//active nav
const navItems = document.querySelectorAll('.navigation-item');

// Add click event listener to each nav item
navItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all nav items
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to the clicked nav item
    this.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");  
  });

  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".img-slide");
  const contents = document.querySelectorAll(".content");

  let currentSlide = 0;
  const intervalTime = 7000; // Adjust this value to change the interval time (in milliseconds)

  const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      slideNav(currentSlide);
  };

  // Function to switch to the next slide at regular intervals
  const startSlideShow = () => {
      setInterval(nextSlide, intervalTime);
  };

  var slideNav = function(manual) {
      btns.forEach((btn) => {
          btn.classList.remove("active");
      });

      slides.forEach((slide) =>{
          slide.classList.remove("active");
      });

      contents.forEach((content) =>{
          content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
  }

  btns.forEach((btn, i) =>{
      btn.addEventListener("click", () =>{
          slideNav(i);
          currentSlide = i;
      });
  });

  // Start the slideshow
  startSlideShow();
});



// donation page script
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const circularProgressElements = document.querySelectorAll('.circular-progress');

    circularProgressElements.forEach(element => {
        const progress = element.getAttribute('data-progress');
        element.style.setProperty('--progress', progress);
    });
});

//counter javascript

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 10000,
    easing:'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
/*nav*/
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".navigation__link");

  // Function to remove the active class from all links
  const removeActiveClasses = () => {
    navLinks.forEach(nav => nav.classList.remove("active"));
  };

  // Function to add the active class to the link matching the current URL
  const setActiveLink = () => {
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      if (link.getAttribute('') === currentPath) {
        link.classList.add("active");
      }
    });
  };

  // Add click event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      removeActiveClasses();
      this.classList.add("active");
    });
  });

  // Set the active link based on the current URL
  setActiveLink();
});

/*thematic area *//
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("dark-mode-toggle");
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  const sidebarToggle = document.querySelector(".sidebar-toggle");
  sidebarToggle.addEventListener("click", function () {
    document.body.classList.toggle("sidebar-visible");
  });

  const sidebar = document.querySelector(".sidebar");
  const readingProgressContainer = document.querySelector(
    ".reading-progress-container"
  );
  const headers = document.querySelectorAll(".post-content :is(h1, h2, h3)");

  headers.forEach((header, index) => {
    const headerId = header.id || `header${index + 1}`;
    header.id = headerId;
    header.setAttribute("tabindex", "0");

    const link = document.createElement("a");
    link.href = `#${headerId}`;
    link.textContent = header.textContent;
    link.className = "sidebar-link";
    link.dataset.headerId = headerId;

    sidebar.insertBefore(link, readingProgressContainer);
  });

  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetHeader = document.getElementById(targetId);

      if (targetHeader) {
        const headerOffset =
          targetHeader.getBoundingClientRect().top +
          window.pageYOffset -
          window.innerHeight / 2 +
          targetHeader.offsetHeight / 2;
        window.scrollTo({ top: headerOffset, behavior: "smooth" });
      }
    });
  });

  function handleScroll() {
    const headers = document.querySelectorAll(".post-content :is(h1, h2, h3)");
    let lastPassedHeaderId = null;

    headers.forEach((header) => {
      if (header.getBoundingClientRect().top < window.innerHeight / 2) {
        lastPassedHeaderId = header.id;
      }
    });

    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach((link) => {
      if (lastPassedHeaderId === link.dataset.headerId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    const firstHeader = document.querySelector(
      ".post-content :is(h1, h2, h3):first-of-type"
    );
    const content = document.querySelector(".post-content");
    const paragraphs = content.querySelectorAll("p");
    const lastParagraph = paragraphs[paragraphs.length - 1];

    const startOffset =
      firstHeader.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 2;
    const endOffset =
      lastParagraph.getBoundingClientRect().bottom +
      window.pageYOffset -
      window.innerHeight / 2;

    const scrollTop = window.pageYOffset;
    const scrollRange = endOffset - startOffset;
    const scrollPosition = scrollTop - startOffset;

    let progress = scrollPosition / scrollRange;
    progress = Math.max(0, Math.min(1, progress));

    document.querySelector(".reading-progress-bar").style.width =
      progress * 100 + "%";
  }

  document.addEventListener("scroll", throttle(handleScroll, 25));
});
