/* File created by Ahmed Hamdy at 11/16/2020. */
(function maze() {
    "use strict";

    // on window load
    $(function() {

        // strings
        const winStr = "You won :) to play again click on 'S'!";
        const loseStr = "You lost :( click on 'S' to restart!";
        const gameStr = "Game started";

        // css classes
        // noinspection SpellCheckingInspection
        const lostCss = "youlose";
        // noinspection SpellCheckingInspection
        const winCss = "youwin";

        let isGameStarted;

        // cache
        const boundaries = $(".boundary");
        const statusDiv = $("#status");

        init();

        $("#start").on("click", (function () {

            init();

            // start the game
            isGameStarted = true;
            statusDiv.text(gameStr);

        }));

        $("#end").on("hover", (function () {

            // if game didn't start, do nothing
            if (! isGameStarted)
                return;

            // you WON!
            isGameStarted = false;
            boundaries.addClass(winCss);
            statusDiv.text(winStr);

        }));

        function gameOver() {

            // if game didn't start, don't do anything
            if (! isGameStarted)
                return;

            // you LOST!
            isGameStarted = false;
            boundaries.addClass(lostCss);
            statusDiv.text(loseStr);
        }

        function init() {
            isGameStarted = false;
            boundaries.removeClass(lostCss).removeClass(winCss);
        }

        // handle if hovered on boundary
        boundaries.on("hover", gameOver);

        // handle if player left the maze (prevent cheating)
        $("#maze").on("mouseleave", gameOver);

    });

})();