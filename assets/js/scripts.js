var mod_pagespeed = "(function($){\"use strict\";$(window).load(function(){$('#loader').delay(300).fadeOut('slow');$('#loader-container').delay(200).fadeOut('slow');$('body').delay(300).css({'overflow':'visible'});});jQuery('.dropdown').hover(function(){jQuery(this).find('.dropdown-menu').stop(true,true).delay(200).fadeIn();},function(){jQuery(this).find('.dropdown-menu').stop(true,true).delay(200).fadeOut();});})(jQuery);";

// Show and hide passwords
function togglePassword(passwordInput, passwordBtn, oldClass, newClass) {
	passwordBtn.classList.toggle(newClass);
	if (passwordBtn.classList.contains(newClass)) {
		passwordBtn.classList.remove(oldClass);
		passwordInput.type = 'text';
	}
	else {
		passwordBtn.classList.add('fa-eye');
		passwordInput.type = 'password';
	};
}

function showPassword() {
	const passwordInput = document.querySelector('#password');
	const passwordBtn = document.querySelector('.password-btn');
	const oldClass = 'fa-eye';
	const newClass = 'fa-eye-slash';

	togglePassword(passwordInput, passwordBtn, oldClass, newClass)
}