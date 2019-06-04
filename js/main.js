/* -------------------- Navbar Colour Class -------------------- */

// On scroll display the navbar correctly
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $("#navbar").addClass("nav-scroll");
         $("#nav-brand").addClass("brand-color");
      }
      if ($(this).scrollTop() < 100) {
         $("#navbar").removeClass("nav-scroll");
         $("#nav-brand").removeClass("brand-color");
      }
   });
});

/* -------------------- Scroll into View -------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Select all anchor elements
    anchor.addEventListener('click', function (e) { // Listen for click on anchor
        e.preventDefault(); // Prevent reload
        document.querySelector(this.getAttribute('href')).scrollIntoView({ // Scroll to '#' attribute smoothly
            behavior: 'smooth'
        });
    });
});

/* -------------------- Toggle Nav -------------------- */
function toggleNav(){
	let navItems = $(".nav-item");
	navItems.toggle(500);
	navItems.toggleClass("nav-toggled");
}

/* -------------------- Active Links -------------------- */
$(document).ready(function() {
		$(window).scroll(function() {
		    var scroll = $(window).scrollTop() + 1, // Distance scrolled from top
				portfolioOffset = $('#portfolio').offset().top - 100, // Top of portoflio section
				aboutOffset = $('#about').offset().top - 100, // Top of about section
				contactOffset = $("#contact").offset().top - 100; // Top of contact section
			// Home Section
			if (scroll < portfolioOffset) {
				$("#home-link").addClass("active-link");
		    }
			// Portfolio Section
		    if (scroll >= portfolioOffset) {
		        $("#portfolio-link").addClass("active-link");
				$("#home-link").removeClass("active-link");
		    } else {
		        $("#portfolio-link").removeClass("active-link");
		    }
			// About Section
			if (scroll >= aboutOffset) { 
		        $("#about-link").addClass("active-link"); 
				$("#portfolio-link").removeClass("active-link");
		    } else { 
		        $("#about-link").removeClass("active-link");
		    }
			// Contact Section
			if(scroll >= contactOffset){
				$("#contact-link").addClass("active-link"); 
				$("#about-link").removeClass("active-link");
		    } else { 
		        $("#contact-link").removeClass("active-link");
		    }		
		});
});

