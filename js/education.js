$(document).ready(function () {
/*
 *Set id date to last modified month and year
 */
    let myDate = document.lastModified;
    let month
    switch(parseInt(myDate.slice(0,2))) {
        case 1:
            month = "Januari";
            break;
        case 2:
            month = "Februari";
            break;
        case 3:
            month = "Mars";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "Maj";
            break;
        case 6:
            month = "Juni";
            break;
        case 7:
            month = "Juli";
            break;
        case 8:
            month = "Augusti";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "Oktober";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;

    }
    document.getElementById("date").innerHTML = ("Uppdaterades: " + month + " " + myDate.slice(6,10));

/*
 *Makes so it can only show one education at a time
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





