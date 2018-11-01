
function openLinkedin() {
    let redirectWindow = window.open('https://www.linkedin.com/in/magnus-kull-87186b121/', '_blank');
    redirectWindow.location
};

function openGitHub() {
    let redirectWindow = window.open('https://github.com/HungKuen', '_blank');
    redirectWindow.location
};

function sendmail() {
    let redirectWindow = window.location.href = 'mailto:magnus.kull@sanitarium.se?subject=Läste ditt CV nyss&body=Hej Magnus,';
    redirectWindow.location
};

