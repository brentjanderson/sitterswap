Template.viewswap.swapRequestor = function() {
	var swap = Router.current().data();

	if (!swap) {
		return;
	}

	var userObj = Meteor.users.findOne({_id: swap.ownerId});
	if (!userObj) {
		return;
	}

	userObj.profile = userObj.profile || {};
	var userEmail = userObj.emails[0] || {};

	var requestor = {
		name: userObj.profile.name || "",
		email: userEmail.address,
		phone: userObj.profile.phone
	};

	return requestor;
};

Template.viewswap.sitter = function() {
	var swap = Router.current().data();
	var sitterObj = Meteor.users.findOne({_id: swap.sitterId });
	if (!sitterObj) {
		return;
	}

	sitterObj.profile = sitterObj.profile || {};

	var sitter = {
		name: sitterObj.profile.name
	};
	console.log(sitter);
	return sitter;
};