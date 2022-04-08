const Testimonials = [
  {
    name: "First Last",
    image: "https://picsum.photos/200/300",
    text: "A bunch of text that will be said talking about how great I am at making websites and running digital marketing campaigns for them",
    weblink: "",
    LIlink: "",
    FBlink: "",
    IGlink: "",
  },
  {
    name: "First Last",
    image: "https://picsum.photos/200/300",
    text: "A bunch of text that will be said talking about how great I am at making websites and running digital marketing campaigns for them",
    weblink: "",
    LIlink: "",
    FBlink: "",
    IGlink: "",
  },
  {
    name: "First Last",
    image: "https://picsum.photos/200/300",
    text: "A bunch of text that will be said talking about how great I am at making websites and running digital marketing campaigns for them",
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
    </div>  
`;
  });
};

loadTestimonials();
