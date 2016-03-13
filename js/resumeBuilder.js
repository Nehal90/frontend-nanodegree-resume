//author = "Ahmed Nehal"

//making sure that unwanted characters like < and > don't get through. 
 var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

//JSON data for bio 

 var bio = {
 	"name" : "Ahmed Nehal",
 	"role" : "Application Developer",
    "welcomeMessage" : "Hello World! Welcome to my resume page.",
 	"contacts" : {
 		"mobile" : "201-362-5832",
 		"email" : "an425@live.com",
 		"github" : "Nehal90",
        "linkedin" : "www.linkedin.com/anehal",
 		"location" : "Jersey City"
 	},
 	"skills" : {
 		"0" : "<p2>Programming Languages:</p2> Java**, Python**, C++*, Android, Swift, JCL",
        "1" : "<p2>Database Systems:</p2> MySQL**, PostgreSQL**, SqlAlchemy*, DB2",
        "2" : "<p2>Scripts: </p2> UNIX**, Linux** (Ubuntu), Git Bash**, Rexx, OMVS",
        "3" : "<p2>WebDevelopment:</p2> HTML5**, CSS**, JavaScript*, jQuery*, XML*, JSON*, Bootstrap*, AngularJS*",
        "4" : "<p2>IDE:</p2> Eclipse J2EE**, ISPF**, Xcode*, Android Studio*, JetBrains PyCharm*, NetBeans*",
        "5" : "<p2>Tools:</p2> GitHub**, Vagrant**, Jenkins*, SourceTree*, HP UFT*, HP Fortify*, Apache Tomcat*",
        "6": "<p2>Frameworks:</p2> OOP**, Spring*, Flask*, JAX-RS, ORM, MVC",
        "7" : "<p2>AgileMethodologies:</p2> Scrum**, Kanban*, XP, Pair Programming"
    },
 	"bioPic" : "images/me.jpg"
 }
 
 //JSON data for work
 
  var work = {
 	"jobs" : 
   [
       
    {
 		"employer" : "UPS",
 		"city" : "Paramus, New Jersey",
 		"title" : "Application Developer",
 		"dates" : "July 2015 - February 2016",
 		"description" : "Working on Front end to create platform independent responsive UI."
 	}, 
 	{
 		"employer" : "CA Technologies",
 		"city" : "Ewing, New Jersey",
 		"title" : "Software Engineer",
 		"dates" : "July 2015 - February 2016",
 		"description" : "Developed prototype for a new product using Java, JavaScript, Java Servlets, Maven, Eclipse, C++, DB2, and Tomcat 7.0, which was the highlight of CA World 2015.<br />Implemented RESTful web service using Sprint framework retrieving data from Mainframe repositories 10 to 20 times faster compared to existing product.<br />Worked on implementing a new UI that will support all modern web browsers and mobile devices."
 	}, 
 	{
 		"employer" : "CA Technologies",
 		"city" : "Ewing, New Jersey",
 		"title" : "Associate Software Engineer",
 		"dates" : "June 2014 - June 2015",	
 		"description" : "Helped complete CA Spool’s v12.0 project a month prior to deadline.<br />Fixed customer reported issues and handled several POCs for Spool, resulting in successfully signing new contracts with customers.<br />Assisted teammates in removing their obstacles, improving team productivity by 30%."
 	},
    {
 		"employer" : "Novartis",
 		"city" : "East Hanover, New Jersey",
 		"title" : "Internship",
 		"dates" : "May 2011 - November 2011",	
 		"description" : "Created a new HTML based intranet homepage for the Global Decision Support (GDS).<br />Tracked and analyzed the timecard entries of GDS personnel, reporting irregular cases to the manager.<br />Assigned, updated and terminated projects supervised by GDS to keep the system up to date and consistent."
 	}
   ]
 }

//JSON data for projects 
  
  var projects = {
	"school_projects" : 
  [
	{
		"name" : "JavaScript Project",
        "githubLink":"https://github.com/Nehal90/js_project",
		"skillsUsed" : "Java, JavaScript, MS Access",
        "description" : "Built a banking website that does following: - Authenticate user name and password. - Retrieve user's checking and saving accounts information and transaction history from database. - Let users do activities such as deposit, withdraw, transfer. - Keep track of user activity and log them in transaction history log."
	},
    {
		"name" : "CSS Project",
        "githubLink":"https://github.com/Nehal90/css_project",
		"skillsUsed" : "Adobe Dream Weaver, Flash, Photoshop, Illustrator, JavaScript",
        "description" : "Built a complete website from scratch using Dreamweaver, Photoshop, Flash, JavaScript that illustrates different aspect of the country, Bangladesh."
	},
	{
		"name" : "SQL Project",
        "githubLink":"https://github.com/Nehal90/sql_project",
		"skillsUsed" : "MySQL",
        "description" : "Created a database for fire department employees and equipment and wrote bunch of queries to solve different problems."
	}
  ],	
    
"nanodegree_projects":
  [
    {
     "name" : "Conference_Central",
     "website":"https://conference-central-1222.appspot.com/",
     "githubLink":"https://github.com/Nehal90/Conference_Central",
     "skillsUsed":"Python, Google App Engine, Google Datastore, Google Developer Console",    
     "description":"In this project I learn how to develop a cloud-based API server to support a provided conference organization application that exists on the web as well as a native Android application. The API supports the following functionality found within the app: user authentication, user profiles, conference information and various manners in which to query the data."    
    },
      
    {
     "name" : "Catalog App",
     "website":"http://catelog-web.herokuapp.com",
     "githubLink":"https://github.com/Nehal90/item-catalog",
     "skillsUsed":"Python, Flask, SqlAlchemy, Sqlite, HTML5, CSS, OAuth2.0",    
     "description":"Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database."   
    },
      
    {
     "name" : "Restaurant Menu App",
     "website":"http://restaurant-web.herokuapp.com",
     "githubLink":"https://github.com/Nehal90/Full-Stack-Restaurant-Menu",
     "skillsUsed":"Python, Flask, SqlAlchemy, Sqlite, HTML5, CSS, OAuth2.0",    
     "description":"Developed a restaurant menu website using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database."   
    },
      
    {
     "name" : "Linux Server Configuration",
     "githubLink":"No Github Repository.",
     "skillsUsed":"Python, SSH, Linux, Ubuntu, Apache, PostgreSQL, Fail2ban, Sysstat",    
     "description":"Installed and configured all required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server, including Apache Web Server and PostgreSQL database server."    
    },
      
    {
     "name" : "Tournament Results",
     "githubLink":"https://github.com/Nehal90/fullstack-nanodegree-vm",
     "skillsUsed":"Python, PostgreSQL, Relational Database",    
     "description":"Built a PostgreSQL relational database scheme to store the results of a game tournament. Also provided a number of queries to efficiently report the results of the tournament and determine the winner."    
    },
      
    {
     "name" : "Movie Trailer Website",
     "githubLink":"https://github.com/Nehal90/Python-Movie-Trailer",
     "skillsUsed":"Python, HTML5, CSS",    
     "description":"Server-side code written in Python to store a list of my favorite movies, including box art imagery and a movie trailer URL. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers."    
    },
      
    {
     "name" : "Personal App Portfolio",
     "githubLink":"https://github.com/Nehal90/my-app-portfolio",
     "skillsUsed":"Java, Android UI Basics, Event Listeners",    
     "description":"Designed and built an app that shows off the projects created as part of the Android Developer Nanodegree program."    
    }
  ]
}

//JSON data for education
  
  var education = {
	"schools" : 
    [
        {
            "name": "Fairleigh Dickinson University",
            "city" : "Teaneck, New Jersey",
            "degree" : "Bachelor of Science",
            "major" : "Computer Science",
            "minor" : "Mathematics",
            "attended" : "2013 "
        },
        {
            "name" : "Udacity",
            "city" : "Udacity.com",
            "degree" : "Nanodegree",
            "major" : "Full Stack Web Development",
            "attended" : "2016 "
        }
    ]
}

//processing data for bio section 
  
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

//appending data to the HTML page

 $("#header").prepend(formattedRole)
             .prepend(formattedName);
 $("#topContacts").append(formattedMobile)
                  .append(formattedEmail)
                  .append(formattedGithub)
                  .append(formattedLocation);
 $("#footerContacts").append(formattedMobile)
                  .append(formattedEmail)
                  .append(formattedLinkedIn);
 $("#header").append(formattedBioPic);
 $("#header").append(formattedMessage);
 $("#header").append(HTMLskillsStart);

     for(skill in bio.skills)
     {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
 	    $("#skills").append(formattedSkill + "<br />");
     
     }
 
function displayWork()
{
    
    for(job in work.jobs)
     {  
        $("#workExperience").append(HTMLworkStart);
         
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
 	    $(".work-entry:last").append(formattedEmployerTitle)
                             .append(formattedLocation)
                             .append(formattedDates)
                             .append(formattedDescription);
         
     }
    
}

education.display = function()
{
    for(school in education.schools)
     {  
        $("#education").append(HTMLschoolStart);
         
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].attended);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
 	    $(".education-entry:last").append(formattedSchool)
                             .append(formattedLocation)
                             .append(formattedDegree)
                             .append(formattedDates)
                             .append(formattedMajor);
         
     }
}

projects.display = function(){
    
    if(projects.school_projects.length > 0)
        {
            for(project in projects.school_projects)
             {  
                $("#projects").append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.school_projects[project].name);
                var formattedGithub = HTMLprojectGithub.replace("%data%", projects.school_projects[project].githubLink);
                var formattedSkills = HTMLprojectSkills.replace("%data%", projects.school_projects[project].skillsUsed);
                var formattedDesc = HTMLprojectDescription.replace("%data%", projects.school_projects[project].description);
                $(".project-entry:last").append(formattedTitle)
                                        .append(formattedGithub)
                                        .append(formattedSkills)
                                        .append(formattedDesc);   
             }
        }

    if(projects.school_projects.length > 0)
    {

        for(project in projects.nanodegree_projects)
         {  
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.nanodegree_projects[project].name);
            var formattedGithub = HTMLprojectGithub.replace("%data%", projects.nanodegree_projects[project].githubLink);
            var formattedSkills = HTMLprojectSkills.replace("%data%", projects.nanodegree_projects[project].skillsUsed);
            var formattedDesc = HTMLprojectDescription.replace("%data%", projects.nanodegree_projects[project].description);
            $(".project-entry:last").append(formattedTitle)
                                    .append(formattedGithub)
                                    .append(formattedSkills)
                                    .append(formattedDesc);

         }
    }
}


$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});

function inName(name)
{
	name =  bio.name.trim().split(" ");
    console.log(name);
	name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    var newName = name[0] + " " + name[1];
	return newName;
};



function locationizer(work_obj){
    var locationArray = [];
    
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].city;
        locationArray.push(newLocation);
    }
    
    return locationArray;    
}

//adding the displays for work, education and projects

displayWork();
education.display();
projects.display();

//appending internationalization button to the page
$('#main').append(internationalizeButton);

//appending google map to the page
$("#mapDiv").append(googleMap);