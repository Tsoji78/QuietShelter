https://phppot.com/php/contact-us-page/ contact page draft
https://codepen.io/sanketbodke/pen/bGRVKYr?editors=0100(about page)
https://www.youtube.com/watch?v=NlFLuynxWFA&ab_channel=Divinector(Our partners page)
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