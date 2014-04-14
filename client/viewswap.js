Template.viewswap.swapRequestor = function() {
	var swap = Router.current().data();
	
	if (!swap) {
		return;
	}

	var userObj = Meteor.users.findOne({_id: swap.ownerId});
	userObj.profile = (userObj.profile) ? userObj.profile : {};


	var requestor = {
		name: userObj.profile.name,
		email: userObj.emails[0],
		phone: userObj.profile.phone
	};

	return requestor;
};