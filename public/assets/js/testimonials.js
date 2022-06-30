const Testimonials = [
  {
    name: "Darius Clark",
    image: "../images/i-75.png",
    text: "Griffin didn't just build me a great website, but designs awesome logos, as well as social media posts. His work has resulted in sales multiplying more than my wildest dreams. But most importantly he is super dependable no matter the issue that comes up. I highly recommend this talented kid. 5 stars for sure!",
    weblink: "https://cpaexamtutoring.com/",
    LIlink: "https://www.linkedin.com/in/i75/",
    FBlink: "https://www.facebook.com/darius.clark.54",
  },
  {
    name: "Michael Toohey",
    image: "https://picsum.photos/200/300",
    text: "When Covid started I got very bored and decided to start twitch streaming, however I had no logos or emotes for my stream. That's where Griffin came in, creating me awesome designs I can now use for my platform. Very timely, and very quality. Thanks Griff!",
    weblink: "",
    LIlink: "",
    FBlink: "",
    IGlink: "",
  },
];

const testimonialSection = document.querySelector(".testimonial-section");

const loadTestimonials = () => {
  Testimonials.map((testimonial, i) => {
    testimonialSection.innerHTML += `<div class="testimonial-box">
    <div class="name-area">
      <div class="circle-img" style="background: url(${testimonial.image})"></div>
      <h3>${testimonial.name}</h3>
    </div>
    <div class="text-area">
      <p>${testimonial.text}</p>
    </div>
    <div class='their-socials'>
    <a href=${testimonial.LIlink}><i class="fab fa-linkedin"></i></a>
    <a href=${testimonial.IGlink}><i class="fab fa-instagram"></i></a>
    <a href=${testimonial.FBlink}><i class="fab fa-facebook"></i></a>
    </div>  
    </div>  
`;
  });
};

loadTestimonials();
