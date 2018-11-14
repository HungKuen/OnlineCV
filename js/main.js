$(document).ready(function () {
/*
 *Set id date to last modified day, month and year
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
    document.getElementById("date").innerHTML = ("Senaste uppdatering av sidan "+ myDate.slice(3,5) +" "+ month + " " + myDate.slice(6,10));
 })

