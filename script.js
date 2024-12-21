gsap.from(".firstPage", {
  y: 100,
  opacity: 0,
  duration: 1,
});
//  const scroll = new LocomotiveScroll({
//      el: document.querySelector("body"),
//      smooth: true,
//    });

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      faqItem.classList.toggle('active');
  });
});



gsap.from(".menu a", {
  y: -90,
  opacity: 0,
  duration: 0.1,
  stagger: 0.2,
});

gsap.from(".card", {
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    markers: false,
  },
});

gsap.from(".btns,.pge3txt,.stimg", {
    opacity:0,
    duration: 0.7,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".btns",
      start: "top 90%",
      end: "top 50%",
      scrub: true,
      markers: false,
    },
  });
  gsap.to("#page4 h1",{
    transform: "translateX(-190%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 65%",
        markers:false,
        end:"top -100%",
        scrub:2,
        pin:false
      
    }
})