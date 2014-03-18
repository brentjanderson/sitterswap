Template.profile.userEmail = function() {
	var u = Meteor.user();
	if (u !== undefined)
		return u.emails[0].address;
};