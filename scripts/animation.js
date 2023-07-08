const faders = document.querySelectorAll(".fade-in");

const appearOpt = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
}

const appearOnScroll = new IntersectionObserver((entries) => {
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

const navContainer = document.querySelector('[data-navbar]');

const options = {
    threshold: 0,
    rootMargin: "-80px 0px 0px 0px",
}

const navLightTheme = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navContainer.classList.add('nav-bar-light');
        } else {
            navContainer.classList.remove('nav-bar-light');
        }
    })
}, options);

const forntContainer = document.querySelector('#fornt-container');
if (forntContainer) {
    navLightTheme.observe(forntContainer);
}

const navChanger = document.querySelector('#nav-changer');

if (navChanger) {
    navLightTheme.observe(navChanger)
}