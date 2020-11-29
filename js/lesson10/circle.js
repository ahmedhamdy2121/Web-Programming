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

        // circle grow and removal object
        const circleControl = (function() {

            // caching the circles
            let circleClass;

            // values from user
            let initDiameter, growthAmount, growthRate, numOfCircles;

            // timer
            let timer = null;

            function init(input) {
                initDiameter = parseInt(input.widthValue);
                growthAmount = parseInt(input.growthAmount);
                growthRate = parseInt(input.growthRate);
                numOfCircles = parseInt(input.growthRate);

                // update the list
                circleClass = $('.circle');

                setInitCircle();
            }

            function setInitCircle() {
                circleClass.css({
                    'height': initDiameter,
                    'width': initDiameter,
                    'border-radius': initDiameter / 2
                });
            }

            function grow() {
                circleClass.css({
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
            const startButtonObj = $('#startButton');

            const circleTemplate = '<div class = "circle"></div>';

            const initButtons = function() {
                stopButtonObj.prop('disabled',true);
                stopButtonObj.html('Stop');
                startButtonObj.prop('disabled', false);
            };

            // starting the animation
            startButtonObj.on('click', function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();

                // stop if any!
                circleControl.stopGrowing();
                stopButtonObj.prop('disabled',false);
                $(this).prop('disabled', true);

                // caching the form
                const formObj = $('form');

                // validation (not a good practice, I should check internally and not access HTML)
                formObj.find('input').each(((index, element) => {
                    if (parseInt($(element).val()) < parseInt($(element).attr('min')))
                        $(element).val(parseInt($(element).attr('min')));
                }));

                // take input from user
                const values = formObj.toObject();

                // adding other circles
                if ($('.circle').length !== 0)
                    --values.numOfCircles;
                addCircles(values.numOfCircles);

                circleControl.inputValues(values);
                circleControl.startGrowing();
            });

            // adding other circles
            function addCircles(val) {
                const mainArea = $('main');
                while (val-- > 0)
                    mainArea.append(circleTemplate);
            }

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
            // using event delegation
            $('main').on('click', '.circle', function() {
                $(this).remove();
                if ($('.circle').length === 0) {
                    circleControl.stopGrowing();
                    initButtons();
                }
            });

        })();

    });

})();