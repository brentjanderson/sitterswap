Template.profile.userFullName = function(){
	var u = Meteor.user();
	if (u !== undefined)
		return u.profile.name;
}

Template.profile.swapperName = function(id){
	var swapper = Meteor.users.findOne(id);
	if(swapper !== null){
		return swapper.profile.name;
	}
	return id;
}