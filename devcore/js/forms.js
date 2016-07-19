
// FORM UPLOAD DISPLAY FILENAME
$(window).load(function () {
    var intervalFunc = function () {
        $('.upload-file-path').html($('#file-type').val());
    };
    $('.upload').on('click', function () {
        $('input[type="file"]').click();
        setInterval(intervalFunc, 1);
        return false;
    });
});