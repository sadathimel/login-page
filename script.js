// let timeLine = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

// timeLine
//     .from(".element-2", { y: "-100%", })
//     .to(".element-2", { y: -30, })
//     .to(".element-2", { y:0, })
//     .from(".element-3", { opacity: 0,duration:2 }, ">=-2.5")

//     .from(".element-4", { x: "200px", }, ">=-2.5")

let validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

var email = document.querySelector(".email");
var pass = document.querySelector(".pass");
var submit = document.querySelector(".submit");

email.addEventListener("keydown", (e) => {
  emailvalue = e.target.value;
  if (validateEmail(emailvalue)) {
    submit.classList.add("disabled");
    submit.classList.remove("hidden");
    pass.removeAttribute("disabled");
  }
});
pass.addEventListener("keydown", (e) => {
  if (e.key >= 0) {
    submit.classList.remove("disabled");
    // submit.classList.add("hidden");
  }
});
