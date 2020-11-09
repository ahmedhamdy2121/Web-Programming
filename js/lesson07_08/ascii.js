/* File created by Ahmed Hamdy at 11/8/2020. */

const FONT_SIZE = [];
FONT_SIZE["Tiny"] = "7pt";
FONT_SIZE["Small"] = "10pt";
FONT_SIZE["Medium"] = "12pt";
FONT_SIZE["Large"] = "16pt";
FONT_SIZE["Extra Large"] = "24pt";
FONT_SIZE["XXL"] = "32pt";

(function () {

    "use strict";

    window.onload = function () {
        document.getElementById("start").onclick = startAnimation;
        document.getElementById("stop").onclick = stopAnimation;
        document.getElementById("fontsize").onchange = changeSize;
        document.getElementById("turbo").onchange = alterSpeed;
        document.getElementById("help").onclick = openHelp;
        document.getElementById("close").onclick = closeHelp;
    };

    let index;
    let frames;
    let speed = 250;
    let timer;
    let userText = "";

    /**
     * init frame, index, and timer. However, it doesn't init the speed or the font
     */
    function init() {
        index = 0;
        frames = null;
        timer = null;
    }

    /**
     * this function is only called when the start button is clicked by the user
     */
    function startAnimation() {
        const selectAnimation = document.getElementById("animation");
        const animationText = selectAnimation.options[selectAnimation.selectedIndex].text;

        // preserving user text
        userText = document.getElementById("text-area").value;

        // check for custom animation
        const animationValue = animationText === "Custom"? userText: ANIMATIONS[animationText];

        // update buttons enable ans disable
        alterEnableDisable();

        // split the frames
        init();
        frames = animationValue.split("=====\n");

        startTimer();
    }

    /**
     * this function is starting the animation internally
     */
    function startTimer() {
        timer = setInterval(function () {
            if (index < frames.length) {
                const textArea = document.getElementById("text-area");
                textArea.value = frames[index];
                index++;
            } else {
                index = 0;
            }
        }, speed);
    }

    /**
     * this function is only called when the stop button is clicked by the user
     */
    function stopAnimation() {
        clearInterval(timer);
        init();

        // update buttons enable ans disable
        alterEnableDisable();

        // returning user text
        if (userText.trim().length > 0)
            document.getElementById("text-area").value = userText;
        userText = "";
    }

    /**
     * this function can be called anytime and it is used to alter the
     * button / select enable status
     */
    function alterEnableDisable () {
        document.getElementById("start").disabled ^= true;
        document.getElementById("stop").disabled ^= true;
        document.getElementById("animation").disabled ^= true;
        document.getElementById("text-area").readOnly ^= true;
    }

    /**
     * this function is only called when the user change the font size
     * from the drop down list
     */
    function changeSize() {
        const selectAnimSize = document.getElementById("fontsize");
        const type = selectAnimSize.options[selectAnimSize.selectedIndex].text;

        document.getElementById("text-area").style.fontSize = FONT_SIZE[type];
    }

    /**
     * this function is only called when the speed checkbox clicked
     */
    function alterSpeed() {
        // alter the speed
        speed = speed === 250? 50: 250;

        // update the speed, will not stop the animation!
        if (timer !== null) {
            clearInterval(timer);
            startTimer();
        }
    }

    /**
     * show the help box
     */
    function openHelp() {
        document.getElementById("help-text").style.display = "block";
    }

    /**
     * hide the help box
     */
    function closeHelp() {
        document.getElementById("help-text").style.display = "none";
    }

}());