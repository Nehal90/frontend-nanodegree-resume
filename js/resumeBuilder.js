/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //var name = "Ahmed Nehal"
 //var role = "Software Engineer"

 //var formattedName = HTMLheaderName.replace("%data%", name);
 //var formattedRole = HTMLheaderRole.replace("%data%", role);

 //$("#header").prepend(formattedRole);
 //$("#header").prepend(formattedName);

 var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

 var bio = {
 	"name" : "Ahmed Nehal",
 	"role" : "Application Developer",
 	"contacts" : {
 		"mobile" : "201-362-5832",
 		"email" : "an425@live.com",
 		"github" : "Nehal90",
        "linkedin" : "www.linkedin.com/anehal",
 		"location" : "Jersey City"
 	},
 	"skills" : {
 		"ProgrammingLanguages" : "Java**, Python**, C++*, Android, Swift, JCL",
        "Database Systems" : "MySQL**, PostgreSQL**, SqlAlchemy*, DB2",
        "Scripts" : "UNIX**, Linux** (Ubuntu), Git Bash**, Rexx, OMVS",
        "WebDevelopment" : "HTML5**, CSS**, JavaScript*, jQuery*, XML*, JSON*, Bootstrap*, AngularJS*",
        "IDE" : "Eclipse J2EE**, ISPF**, Xcode*, Android Studio*, JetBrains PyCharm*, NetBeans*",
        "Tools" : "GitHub**, Vagrant**, Jenkins*, SourceTree*, HP UFT*, HP Fortify*, Apache Tomcat*",
        "Frameworks": "OOP**, Spring*, Flask*, JAX-RS, ORM, MVC",
        "AgileMethodologies" : "Scrum**, Kanban*, XP, Pair Programming"
    },
 	"bioPic" : "images/me.jpg"
 }

 if (bio.skills.length > 0)
 {
 	$("#header").append(HTMLskillsStart);

 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 	$("#skills").append(formattedSkill);

 	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 	$("#skills").append(formattedSkill);

 	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 	$("#skills").append(formattedSkill);

 }


 //$("#main").append(bio.contacts.mobile);
 //$("#main").append(bio.contacts.email);
 //$("#main").append(bio.skills);


 var work = {
 	"jobs" : 
   [
       
    {
 		"employer" : "UPS",
 		"city" : "Paramus, New Jersey"
 		"title" : "Application Developer",
 		"dates" : "July 2015 - February 2016",
 		"description" : "Working on Front end to create platform independent reponsive UI."
 	}, 
 	{
 		"employer" : "CA Technologies",
 		"city" : "Ewing, New Jersey"
 		"title" : "Software Engineer",
 		"dates" : "July 2015 - February 2016",
 		"description" : "Developed prototype for a new product using Java, JavaScript, Java Servlets, Maven, Eclipse, C++, DB2, and Tomcat 7.0, which was the highlight of CA World 2015. Implemented RESTful web service using Sprint framework retrieving data from Mainframe repositories 10 to 20 times faster compared to existing product."
 	}, 
 	{
 		"employer" : "CA Technologies",
 		"city" : "Ewing, New Jersey"
 		"title" : "Associate Software Engineer",
 		"dates" : "June 2014 - June 2015",	
 		"description" : "Helped complete CA Spool’s v12.0 project a month prior to deadline. Fixed customer reported issues and handled several POCs for Spool, resulting in successfully signing new contracts with customers."
 	}
   ]
 }

//$("#main").append(work.current_job.title);
//$("#main").append(work.current_job.company);
//$("#main").append(work.current_job.city);
//$("#main").append(work.previous_job.title);
//$("#main").append(work.previous_job.company);
//$("#main").append(work.previous_job.city);


var education = {
	"schools" : 
    [
        {
            "name": "Fairleigh Dickinson University",
            "city" : "Teaneck, New Jersey",
            "degree" : "Bachelor of Science",
            "major" : "Computer Science",
            "minor" : "Mathematics",
            "graduated" : "2013"
        },
        {
            "name" : "Udacity",
            "degree" : "Full Stack Web Development Nanodegree",
            "graduated" : "2016"
        }
    ]
}

education["graduation_year"] = "May 2013";

//$("#main").append(education.school);
//$("#main").append(education.degree);
//$("#main").append(education.major);
//$("#main").append(education.graduation_year);

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


