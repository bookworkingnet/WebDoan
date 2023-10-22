const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY >= headerHeight) {
        navigation.style.position = "fixed";
        navigation.style.top = "0";
    } else {
        navigation.style.position = "absolute";
        navigation.style.top = `${headerHeight}px`;
    }
});
