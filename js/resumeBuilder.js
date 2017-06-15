var bio = {
    "name": "Egor Suhadolsky",
    "role": "Web analyst",
    "contacts": {
        "mobile": "1234325",
        "email": "exmple@sdf.df",
        "github": "https://sdf.github.com/",
        "twitter": "https://mu.twitter.com/",
        "location": "Belarus, Minsk"
    },
    "biopic": "images/bioPic.png",
    "welcomeMessage": "Hi everyone!",
    "skills": ["web-analytics", "frontend", "java script"]
};

var education = {
    "schools": [{
        "name": "EHU",
        "location": "Vilnius, Lithuania",
        "degree": "Bachelor",
        "majors": ["Media"],
        "dates": "2006-2010",
        "url": "https://ehu.lt",
    }, {
        "name": "MGVRK",
        "location": "Belarus, Minsk",
        "degree": "Bachelor",
        "majors": ["Electronic"],
        "dates": "2004-2006"
    }],
    "onlineCourses": [{
        "title": "JavaScript",
        "school": "udacity",
        "dates": "2016-2017",
        "url": "https://udacity.com"
    }]
};

var work = {
    "jobs": [{
        "title": "Web analyst",
        "employer": "Seobility",
        "location": "Belarus, Minsk",
        "dates": "2016-2017",
        "description": "We get down so deep in the data that it is hard to remember the needs of management (or customers.) They have other things to do so if the analysis doesn’t come to them in a meaningful and easy format, they stop caring."
    }, {
        "title": "Web analyst",
        "employer": "Dgpro",
        "location": "Belarus, Minsk",
        "dates": "2015-2016",
        "description": "Work for data. Once your CEO or customer understands the metrics, you can improve upon them gradually, but don’t change the format (or heaven forbid, the metrics) arbitrarily."
    }]
};

var projects = {
    "projects": [{
        "title": "website",
        "dates": "2017",
        "description": "My first website",
        "images": ["http://img14.deviantart.net/cac3/i/2016/216/f/e/temp_website_progress__by_arlinnxaugust-dacly15.jpg"]
    }, {
        "title": "page-resume",
        "dates": "2017",
        "description": "My first page",
        "images": ["http://img14.deviantart.net/cac3/i/2016/216/f/e/temp_website_progress__by_arlinnxaugust-dacly15.jpg"]
    }]
};

bio.display = function() {
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
var count = 0;
while (count < bio.skills.length) {
    $("#header").append(HTMLskills.replace("%data%", bio.skills[count]));
    count++;
}
}

work.display = function() {
$("#workExperience").append(HTMLworkStart);
for (var job = 0; job < work.jobs.length; job++) {
    var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var workEmployerTtile = workEmployer + workTitle;
    $(".work-entry:last").append(workEmployerTtile.replace("%data%", work.jobs[job].employer));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
}
}

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
            }
        }
    }
};

education.display = function() {
    for (var ed = 0; ed < education.schools.length; ed++) {
        $("#education").append(HTMLschoolStart);
        var edName = HTMLschoolName.replace("%data%", education.schools[ed].name);
        var edDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
        var edNameDegree = edName + edDegree;
        $(".education-entry:last").append(edNameDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[ed].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[ed].location));
        for (var maj = 0; maj < education.schools[ed].majors.length; maj++) {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[ed].majors[maj]));
        }
    }

    for (var oc = 0; oc < education.onlineCourses.length; oc++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var ocName = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title);
        var ocSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].school);
        var ocNameDegree = ocName + ocSchool;
        $(".education-entry:last").append(ocNameDegree);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[oc].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[oc].url));
    }
};
$("#mapDiv").append(googleMap);
bio.display();
work.display();
projects.display();
education.display();

