gsap.to(".box",{
  y:150,
  repeat:-1,
  yoyo:"true",
  duration:1.5,
  borderRadius:"50%",
  ease:"back.inOut",
  stagger:{
    amount:.3,
    from:"center",
    ease:"circ"
  }
})

