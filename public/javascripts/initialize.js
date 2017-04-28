/**
 * Created by rakshithk on 4/23/17.
 */
$( document ).ready(function() {
    $('#header').load('/templates/header.html', function() {
    });

    $('#footer').load('/templates/footer.html');
});