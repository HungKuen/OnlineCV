$(document).ready(function(){
    $("#toggleTelia").click(function(){
        $(".telia").toggle();
    });
    $(".toggleTelia").click(function(){
        $(".telia").toggle();
    });
    $("#toggleCybercom").click(function(){
        $(".cybercom").toggle();
    });
    $(".toggleCybercom").click(function(){
        $(".cybercom").toggle();
    });
    $("#toggleBevaka").click(function(){
        $(".bevaka").toggle();
    });
    $(".toggleBevaka").click(function(){
        $(".bevaka").toggle();
    });
    $("#toggleMitab").click(function(){
        $(".mitab").toggle();
    });

$(".toggleMitab").click(function(){
    $(".mitab").toggle();
});
    $("#toggleCoopHaga").click(function(){
        $(".coophaga").toggle();
    });
$(".toggleCoopHaga").click(function(){
    $(".coophaga").toggle();
});

$("#toggleLassesMatstuga").click(function(){
        $(".lasesmatstuga").toggle();
    });
$(".toggleLassesMatstuga").click(function(){
    $(".lasesmatstuga").toggle();
});

    $("#toggleTechnicalSkills").click(function () {
        $(".technicalSkills").toggle();
    });
    $(".toggleTechnicalSkills").click(function () {
        $(".technicalSkills").toggle();
    });
    $("#toggleUniversityCourses").click(function () {
        $(".universityCourses").toggle();
    });
    $(".toggleUniversityCourses").click( function() {
        $(".universityCourses").toggle();
    });
    $("#toggleOtherITCourses").click(function() {
        $(".otherITCourses").toggle();
    });
    $(".toggleOtherITCourses").click( function() {
        $(".otherITCourses").toggle();
    });
    $("#toggleLeadershipEducation").click(function() {
        $(".leadershipEducation").toggle();
    });
    $(".toggleLeadershipEducation").click(function() {
        $(".leadershipEducation").toggle();
    });
    $("#toggleOtherMerits").click(function() {
        $(".othermerits").toggle();
    });
    $(".toggleOtherMerits").click(function() {
        $(".othermerits").toggle();
    });



});
function openLinkedin() {
    let redirectWindow = window.open('https://www.linkedin.com/in/magnus-kull-87186b121/', '_blank');
    redirectWindow.location};
function openGitHub() {
    let redirectWindow = window.open('https://github.com/HungKuen', '_blank');
    redirectWindow.location};
function sendmail() {
     let redirectWindow =  window.location.href = 'mailto:magnus.kull@sanitarium.se?subject=Läste ditt CV nyss&body=Hej Magnus,';
     redirectWindow.location};





$('#utbildning').click(function() {
    let pageTitle = 'Magnus Kull CV | ' + $(this).html();
    $.address.value($(this).attr('href').replace(/^#/, ''));
    $.address.title(pageTitle);
});

$(document).ready(function() {
    let hash = document.location.hash.replace(/^#\//, '');
    if(hash) {
        $('nav a[href="#' + hash + '"]').trigger('click');
    }
});