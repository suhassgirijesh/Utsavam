document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".animate-on-scroll");

  if (animatedItems.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.18,
        }
      );

      animatedItems.forEach((item) => {
        observer.observe(item);
      });
    } else {
      animatedItems.forEach((item) => item.classList.add("visible"));
    }
  }

  const tickerTrack = document.querySelector(".ticker-track");
  if (tickerTrack) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
  }
});
