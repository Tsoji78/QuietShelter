https://phppot.com/php/contact-us-page/ contact page draft
https://codepen.io/sanketbodke/pen/bGRVKYr?editors=0100(about page)
https://www.youtube.com/watch?v=NlFLuynxWFA&ab_channel=Divinector(Our partners page)
https://codepen.io/eyupucmaz/pen/oNbeXOb?editors=1100(donations page)
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveal.forEach((item) => {
        const bottomOfObject = item.offsetTop + item.offsetHeight;
        const bottomOfWindow = window.scrollY + window.innerHeight;
        if (bottomOfWindow > bottomOfObject) {
            item.classList.add("active");
        }
    });
});

// scroll reveal
window.addEventListener("scroll", reveal);

function reveal (){
    var reveals = document.querySelectorAll('.reveals');

    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
Donate button across blogs,story and gallery

Boardmeetings Photograph
office group Photograph
Why we are here
journey so far

<div class="team-box">
      <h1 class="heading">Meet Our Team</h1>

      <div class="wrapper">
        <div class="team-item">
          <img src="Images/Goodness.jpg" alt="">
          <h2>Mr Goodness Chama</h2>
          <p><em>Executive Chairman</em></p>
        </div>

        <div class="team-item">
          <img src="Images/Rebecca.jpg" alt="">
          <h2>Mrs Rebecca Ojochoko</h2>
          <p><em>Board Member</em></p>
        </div>

        <div class="team-item">
          <img src="Images/Cleron.jpg" alt="">
          <h2>Mr Jean Paul Cleron</h2>
          <p><em>Board Member</em></p>
        </div>

        <div class="team-item">
          <img src="Images/Chama.jpg" alt="">
          <h2>Mrs Wadiam Goodness</h2>
          <p><em>Executive Director</em></p>
        </div>

        <div class="team-item">
          <img src="Images/wisdom.jpg" alt="">
          <h2>Mr Wisdom Anuhu</h2>
          <p><em>Board Member</em></p>
        </div>

        <div class="team-item">
          <img src="Images/wisdom.jpg" alt="">
          <h2>Mrs Victoria Ezenduka</h2>
          <p><em>Board Member</em></p>
        </div>

        <div class="team-item">
          <img src="Images/Cleron.jpg" alt="">
          <h2>Mrs Esther Emmanuel</h2>
          <p><em>Board Member</em></p>
        </div>

      </div>
    </div>
    .team{
  background: rgb(253, 253, 253);
  background-size: auto;
  position: relative;
  border-radius: 0px;
}
.team-box{
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.team .heading{
  margin-bottom: 5rem;
  font-size: 5.5rem;
}
.team-box img{
  width: 9rem;
  border-radius: 50%;
  border: 3px solid cyan transparent;
  box-shadow: 0 0 25px rgb(41, 184, 240);
}
.wrapper{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:1rem;
}
.team-item{
  min-height: 50px;
  max-width: 450px;
  background: rgba(7, 39, 82, 0.842);
  border: 3px solid rgba(5, 30, 145, 0.2);
  border-radius: 2rem;
  margin: 0 2rem;
  padding: 30px 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  color: white;
  transition: 0.4s ease-in-out;
}
.team-item:hover{
  border: 3px solid white;
  transform: translateY(-10px)scale(1.03);
  box-shadow: 0 0 50px white;
} 
.team-item h2{
  font-size: 2.8rem;
  color: white;
}
.team-item p{
  font-size: 1.5rem;
}

@media(max-width:991px) {
  .team .wrapper{
      grid-template-columns: repeat(1,1fr);
  }
}


<div class="charity-container ">
      <div class="charity-type ">
        <div class="img-container">
          <img src="images/plas.jpg" alt=""  />
          <div class="img-content">
            <h3>vulnerable Kids</h3>
            <a
              href="#blog.html"
              class="btn btn-primary"
              target="blank"
              >Know more</a
            >
          </div>
        </div>
      </div>
      <div class="charity-type">
        <div class="img-container">
          <img src="images/spash.jpg" alt=""/>
          <div class="img-content">
            <h3>Empowerment</h3>
            <a
              href="#blog.html"
              class="btn btn-primary"
              target="blank"
              >know more</a
            >
          </div>
        </div>
      </div>
      <div class="charity-type">
        <div class="img-container">
          <img src="/red.jpg" alt="" />
          <div class="img-content">
            <h3>Gender Base Violence</h3>
            <a
              href=""
              class="btn btn-primary"
              target="blank"
              >Know more</a
            >
          </div>
        </div>
        <div class="charity-type">
          <div class="img-container">
            <img src="/red.jpg" alt="" />
            <div class="img-content">
              <h3>Gender Base Violence</h3>
              <a
                href=""
                class="btn btn-primary"
                target="blank"
                >Know more</a
              >
            </div>
          </div>
      </div>
    </div>

    <div class="team-container"> 
      <div class="team-box">
          <div class="imgBox">
              <img src="images/Goodness.jpg" alt="">
          </div>
          <div class="content">
              <h2>Mr Goodness Chama</br>
              <span>Executive chairman</span></h2>
          </div>
      </div>
      <div class="team-box">
          <div class="imgBox">
              <img src="images/Rebecca.jpg" alt="">
          </div>
          <div class="content">
              <h2>Mrs Rebecca Ojochoko</br>
              <span>Board Member</span></h2>
          </div>
      </div>
      <div class="team-box">
          <div class="imgBox">
              <img src="images/Cleron.jpg" alt="">
          </div>
          <div class="content">
              <h2>Mr Jean Paul Cleron</br>
              <span>Board Member</span></h2>
          </div>
      </div>
      <div class="team-box">
        <div class="imgBox">
            <img src="images/Chama.jpg" alt="">
        </div>
        <div class="content">
            <h2>Mrs Wadiam Goodness</br>
            <span>Executive Director</span></h2>
        </div>
      </div>
      <div class="team-box">
        <div class="imgBox">
            <img src="images/wisdom.jpg" alt="">
        </div>
        <div class="content">
            <h2>Mr Wisdom Anuhu</br>
            <span>Board Member</span></h2>
        </div>
      </div>
      <div class="team-box">
        <div class="imgBox">
            <img src="images/.jpg" alt="">
        </div>
        <div class="content">
            <h2>Mrs Victoria Ezenduka</br>
            <span>Board Member</span></h2>
        </div>
      </div>
      <div class="team-box">
        <div class="imgBox">
            <img src="images/.jpg" alt="">
        </div>
        <div class="content">
            <h2>Mrs Esther Emmanuel</br>
            <span>Board Member</span></h2>
        </div>
      </div>
  </div>

  <section class="donation-wrapper">
    <div class="card-grid-space">
        <div class="num">01</div>
        <a class="donation-card" href="" style="background-image: url('images/run.jpg');">
            <div>
                <h1>Climate Change</h1>
                <p>Learn how Climate change has made these kids vulnerable</p>
                <div class="tags">
                    <button class="tag">Blog</button>
                </div>
            </div>
        </a>
    </div>

    <div class="card-grid-space">
        <div class="num">02</div>
        <a class="donation-card" href="" style="background-image: url('images/afri.jpg');">
            <div>
                <h1>Health</h1>
                <p>Learn how we tackle health challenges where basic health facilities can't be afforded</p>
                <div class="tags">
                    <button class="tag">Blog</button>
                </div>
                
            </div>
        </a>
    </div>

    <div class="card-grid-space">
        <div class="num">03</div>
        <a class="donation-card" href="" style="background-image: url('images/spash.jpg');">
            <div>
                <h1>Agriculture</h1>
                <p>Learn how we empowered the youths in the Agricultural sector</p>
                <div class="tags">
                    <button class="tag">Blog</button>
                </div>
                
            </div>
        </a>
    </div>
</section>
.donation-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  margin-top: -120px;
  background-color: #d0d6d8;
  border-top: 40px;

}

.charity-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.charity-heading h1 {
  margin: 0;
  font-size: 2.5rem;
  color: #333;
}

.charity-heading p {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #555;
}

.card-grid-space {
  position: relative;
  width: calc(33.33% - 2rem);
  margin: 1rem;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.card-grid-space:hover {
  transform: translateY(-10px); /* Subtle hover effect */
}

.num {
  position: absolute;
  top: -10px;
  left: -10px;
  background: #f5ff6b;
  color: #221f1f;
  padding: 10px;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  z-index: 2;
}

.donation-card {
  display: block;
  position: relative;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.donation-card div {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  transition: 0.3s ease;
}

.donation-card div h1 {
  margin: 0;
  font-size: 1.5rem;
}

.donation-card div p {
  margin: 0;
  font-size: 1rem;
}

.donation-card div .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.donation-card:hover {
  background: rgba(94, 150, 255, 0.24);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
}

.tag {
  display: inline-block;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fcf9f9;
  margin: 20rem 10.5rem 15.5rem 18.5rem;

}

@media (max-width: 900px) {
  .card-grid-space {
    width: calc(50% - 2rem);
  }
}

@media (max-width: 600px) {
  .card-grid-space {
    width: calc(100% - 2rem);
  }
}

javascript
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

// contact address scripting

// reveal scrolling
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(revealOnScroll, options);

    revealElements.forEach(element => {
        observer.observe(element);
    });
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
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navigation.classList.toggle('active');
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navigation.classList.toggle('active');
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation menu on small screens
    const hamburger = document.getElementById("hamburger");
    const navigation = document.querySelector(".navigation");
  
    hamburger.addEventListener("click", function() {
      navigation.classList.toggle("active");
    });
  
    // Image slider functionality
    const slides = document.querySelectorAll(".img-slide");
    const contents = document.querySelectorAll(".content");
  
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((button, index) => {
      button.addEventListener("click", function() {
        // Toggle active class for navigation buttons
        navButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Toggle active class for slides and contents
        slides.forEach(slide => slide.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));
        slides[index].classList.add("active");
        contents[index].classList.add("active");
      });
    });
  });
 