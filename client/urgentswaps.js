Template.profile.userFullName = function(){
	var u = Meteor.user();
	if (u !== undefined && u.profile)
		return u.profile.name;
}

Template.profile.swapperName = function(id){
	var swapper = Meteor.users.findOne(id);
	if(swapper !== null && swapper.profile){
		return swapper.profile.name;
	}
	return id;
}