export function animation() {
  gsap.to("header h2", {
    y: 10,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "elastic.inOut(1,0.3)",
  });
}
