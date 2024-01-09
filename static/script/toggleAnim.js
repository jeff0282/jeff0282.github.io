
/*
Allow Animated Items with class ".toggleable-anim" to be clicked to pause/play
*/

window.onload = (event) => {
    const toggles = document.querySelectorAll(".toggleable-anim");
    toggles.forEach((element) => {
        element.title = "Click to Pause/Play animation";
        element.style.cursor = "pointer";
        element.addEventListener("click", (event) => {
            const running = element.style.animationPlayState === "running";
            element.style.animationPlayState = running ? 'paused' : 'running';
        });
    });
};