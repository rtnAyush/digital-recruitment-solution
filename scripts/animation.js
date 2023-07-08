const faders = document.querySelectorAll(".fade-in");

const appearOpt = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
            // appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOpt);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});