Template.propose.swapperName = function(id){
	var swapper = Meteor.users.findOne(id);
	if(swapper !== undefined && swapper.profile){
		if(swapper.profile.name !== undefined)
			return swapper.profile.name;
		return '-'
	}
	return id;
};

Template.propose.validUid = function(id){
	return id !== undefined;
};

Template.propose.alreadyExists = function(id){
	var swapShip = SwapShips.findOne({u1:Meteor.userId(), u2:id});
	return swapShip !== undefined;
};

Template.propose.isConfirmed = function(id){
	var swapShip = SwapShips.findOne({u1:Meteor.userId(), u2:id});
	return swapShip.approved;
};

Template.propose.events({
	'click button.propose': function(event){
		var user = Meteor.users.findOne({_id:event.target.getAttribute("id")});
		SwapShips.insert({approved:false, snooze:false, u1:Meteor.userId(), u2:user._id, pDate: new Date()});
	}
});