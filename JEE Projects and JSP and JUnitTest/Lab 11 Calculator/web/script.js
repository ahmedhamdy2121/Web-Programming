/* File created by Ahmed Hamdy at 12/12/2020. */
(function index() {
    "use strict";

    // good reference
    // https://stackoverflow.com/questions/4112686/how-to-use-servlets-and-ajax

    // on window load (ready)
    $(function() {

        console.log("Starting functions in document.ready");

        // event handlers
        (function() {

            $('#calcForm').on('submit', function (event) {
                event.preventDefault();

                const $formData = $(this);

                $.ajax({
                    type:'POST',
                    data: $formData.serialize(),
                    dataType: 'JSON',
                    url: $formData.attr("action"),
                    success: function(responseJson){
                        $.each(responseJson, function(key, value) {
                            $('#' + key).val(value);
                        });
                    },
                    error: function(jqXHR) {
                        console.log(jqXHR);
                        alert(JSON.parse(jqXHR.responseText));
                    },
                    complete: function(){
                        // done
                    }
                });

            });

        })();

    });

})();