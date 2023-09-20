
honk_dir_uri = "/static/audio/UGG-Honk/"

honks = [
    'Honk4.ogg', 
    'Honk-glass2.ogg', 
    'Honk-H8.ogg', 
    'Honk-glass1.ogg', 
    'Honk-H5.ogg', 
    'Honk-muffled2.ogg', 
    'Honk3.ogg', 
    'Honk-muffled3.ogg', 
    'Honk-glass4.ogg', 
    'Honk-H3.ogg', 
    'Honk-muffled1.ogg', 
    'Honk-lid1.ogg', 
    'Honk-H7.ogg', 
    'Honk-glass3.ogg', 
    'Honk1.ogg', 
    'Honk-lid2.ogg', 
    'Honk-H2.ogg', 
    'Honk-lid3.ogg', 
    'Honk-H4.ogg', 
    'Honk2.ogg', 
    'Honk-H1.ogg', 
    'Honk-H6.ogg'
];



window.onload = (event) => {
    honk_trigger = document.querySelector("#honk_trigger");
    honk_trigger.addEventListener("click",  () => {
        
        indx = Math.floor(Math.random() * honks.length);
        aud_fname = honks[indx];

        aud = new Audio(honk_dir_uri + aud_fname);
        aud.play();

    });
};
