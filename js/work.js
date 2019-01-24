$(document).ready(function () {
/*
 *Makes so only one employer is displayed
 */
	$("#togglePlanet4us").click(function () {
        $('.hideBlock').css('display','none');
        $(".planet4us").toggle();
    });
    $("#toggleCybercom").click(function () {
        $('.hideBlock').css('display','none');
        $(".cybercom").toggle();
    });
    $("#toggleTelia").click(function () {
        $('.hideBlock').css('display','none');
        $(".telia").toggle();
       });
    $("#toggleBevaka").click(function () {
        $('.hideBlock').css('display','none');
        $(".bevaka").toggle();
       });
    $("#toggleMitab").click(function () {
        $('.hideBlock').css('display','none');
        $(".mitab").toggle();
    });
    $("#toggleCoopHaga").click(function () {
        $('.hideBlock').css('display','none');
        $(".coophaga").toggle();
    });
    $("#toggleLassesMatstuga").click(function () {
        $('.hideBlock').css('display','none');
        $(".lasesmatstuga").toggle();
    });
/*
 *Hides the employer by clicking the showing employer title
 */
    $(".toggleCybercom").click(function () {
        $(".cybercom").toggle();
    });
    $(".toggleTelia").click(function () {
        $(".telia").toggle();
    });
    $(".toggleBevaka").click(function () {
        $(".bevaka").toggle();
    });
    $(".toggleMitab").click(function () {
        $(".mitab").toggle();
    });
    $(".toggleCoopHaga").click(function () {
        $(".coophaga").toggle();
    });
    $(".toggleLassesMatstuga").click(function () {
        $(".lasesmatstuga").toggle();
    });
});

