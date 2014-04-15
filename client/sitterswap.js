Template.homepage.events({
	'click a': function(e, t) {
		if ($('.login-close-text')[0]) {
			$('.login-close-text').click();
		} else {
			$('#login-sign-in-link').click();
		}
		e.preventDefault();
	}
});