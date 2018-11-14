$(document).ready(function () {
/*
 *Makes so only one education is displayed
 */
    $("#toggleTechnicalSkills").click(function () {
        $('.hideBlock').css('display','none');
        $(".technicalSkills").toggle();
    });
    $("#toggleUniversityCourses").click(function () {
        $('.hideBlock').css('display','none');
        $(".universityCourses").toggle();
    });
    $("#toggleOtherITCourses").click(function () {
        $('.hideBlock').css('display','none');
        $(".otherITCourses").toggle();
    });
    $("#toggleLeadershipEducation").click(function () {
        $('.hideBlock').css('display','none');
        $(".leadershipEducation").toggle();
    });
    $("#toggleOtherMerits").click(function () {
        $('.hideBlock').css('display','none');
        $(".otherMerits").toggle();
    });
/*
 *Hides the education by clicking on the headline
 */
    $(".toggleTechnicalSkills").click(function () {
        $(".technicalSkills").toggle();
    });
    $(".toggleUniversityCourses").click(function () {
        $(".universityCourses").toggle();
    });
    $(".toggleOtherITCourses").click(function () {
        $(".otherITCourses").toggle();
    });
    $(".toggleLeadershipEducation").click(function () {
        $(".leadershipEducation").toggle();
    });
    $(".toggleOtherMerits").click(function () {
        $(".otherMerits").toggle();
    });
});
