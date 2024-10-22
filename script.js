
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

//Testing
//<script>
  // Open Modal
  //function openModal() {
    //document.getElementById('subscriptionModal').style.display = 'flex';
  //}

  // Close Modal
  //function closeModal() {
   // document.getElementById('subscriptionModal').style.display = 'none';
  //}

  // Handle form submission
  //document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    //event.preventDefault();
    //const email = document.getElementById('email').value;

    // Send data to backend or display a success message
    //alert(`Thank you for subscribing with ${email}!`);
    //closeModal();
  //});
//</script>
// Function to open the modal
// Modal functionality
 // Back to Top Button functionality
 const backToTopButton = document.getElementById('backToTop');

 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         backToTopButton.style.display = 'block';
     } else {
         backToTopButton.style.display = 'none';
     }
 };

 backToTopButton.addEventListener('click', function() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 });

 function openModal() {
     const modal = document.getElementById('subscribeModal');
     modal.style.display = 'flex';
     setTimeout(() => modal.classList.add('active'), 10);
 }

 function closeModal() {
     const modal = document.getElementById('subscribeModal');
     modal.classList.remove('active');
     setTimeout(() => modal.style.display = 'none', 300);
 }

 // Close modal when clicking outside
 document.getElementById('subscribeModal').addEventListener('click', (e) => {
     if (e.target === e.currentTarget) closeModal();
 });

 // Handle form submission
 document.getElementById('subscribeForm').addEventListener('submit', (e) => {
     e.preventDefault();
     // Add your form submission logic here
     closeModal();
 });


