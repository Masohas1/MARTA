gsap.registerPlugin(ScrollTrigger);

const menuItems = document.querySelectorAll(".menu ul li");

menuItems.forEach((item) => {
  const span = document.createElement("span");

  item.addEventListener("mouseenter", () => {
    gsap.to(span, { duration: 0.3, x: "0%" });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(span, {
      duration: 0.3,
      x: "101%",
      onComplete: () => {
        gsap.set(span, { x: "-101%" });
      },
    });
  });

  item.appendChild(span);
});
