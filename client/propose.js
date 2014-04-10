Template.propose.swapperName = function(id){
	var swapper = Meteor.users.findOne(id);
	if(swapper !== null){
		return swapper.profile.name;
	}
	return id;
}

Template.propose.events({
	'click button.propose': function(event){
		console.log('fired');
		var user = Meteor.users.findOne({_id:event.target.getAttribute("id")});
		console.log(user);
		SwapShips.insert({approved:false, u1:Meteor.userId(), u2:user._id, pDate: new Date()});
	}

})