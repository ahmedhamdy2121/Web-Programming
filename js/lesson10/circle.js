/* File created by Ahmed Hamdy at 11/28/2020. */

// JQuery Plugin to pars the form data to/from object
// this is the first thing to be executed right after document.ready
(function($) {
    console.log("JQuery Plugins init()");

    $.fn.extend({
        toObject: function() {
            return $(this.serializeArray()).map(function() {
                return JSON.parse('{"' + this.name + '"' + ':' + '"' + this.value + '"}');
            }).get().reduce((a, b) => ({...a, ...b}), {});
        }
    });
})(jQuery);

(function maze() {
    "use strict";

    // on window load (ready)
    $(function() {

        console.log("Starting functions in document.ready");

        // caching the circle
        const circleObject = $('.circle');

        // circle grow and removal object
        const circleControl = (function() {

            // values from user
            let initDiameter, growthAmount, growthRate, numOfCircles;

            // timer
            let timer = null;

            function init(input) {
                initDiameter = parseInt(input.widthValue);
                growthAmount = parseInt(input.growthAmount);
                growthRate = parseInt(input.growthRate);
                numOfCircles = parseInt(input.growthRate);

                setInitCircle();
            }

            function setInitCircle() {
                circleObject.css({
                    'height': initDiameter,
                    'width': initDiameter,
                    'border-radius': initDiameter / 2
                });
            }

            function grow() {
                circleObject.css({
                    'height': (index, value) => {
                        return parseInt(value) + growthAmount + 'px'
                    },
                    'width': (index, value) => {
                        return parseInt(value) + growthAmount + 'px'
                    },
                    'border-radius': (index, value) => {
                        return parseInt(value) + growthAmount / 2 + 'px'
                    }
                });
            }

            function startAnimation() {
                timer = setInterval(grow, growthRate);
            }

            function stopAnimation() {
                clearInterval(timer);
            }

            return {
                startGrowing: startAnimation,
                stopGrowing: stopAnimation,
                inputValues: init
            }

        })();

        // event handlers
        (function() {

            const stopButtonObj = $('#stopButton');

            const initStop = () => stopButtonObj.html("Stop");

            // starting the animation
            $('#startButton').on('click', function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();

                // stop if any!
                circleControl.stopGrowing();
                initStop();

                // take input from user
                const values = $('form').toObject();
                circleControl.inputValues(values);

                circleObject.show();
                circleControl.startGrowing();
            });

            // stopping the animation
            stopButtonObj.on('click', function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();

                // stopping or resuming
                if (this.innerHTML === "Stop") {
                    circleControl.stopGrowing();
                    this.innerHTML = "Resume";
                } else {
                    circleControl.startGrowing();
                    this.innerHTML = "Stop";
                }
            });

            // removing and resetting the circle
            circleObject.on('click', function() {
                circleControl.stopGrowing();
                circleObject.hide();
                initStop();
            });

        })();

    });

})();