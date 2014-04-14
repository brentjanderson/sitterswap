Template.profile.userEmail = function() {
	var u = Meteor.user();
	if (u !== undefined)
		return u.emails[0].address;
	return '';
};

Template.profile.userFullName = function(){
	var u = Meteor.user();
	if (u !== undefined)
		return u.profile.name;
	return '';
}

Template.profile.userPhone = function(){
	var u = Meteor.user();
	if (u !== undefined)
		return u.profile.phone;
	return '';
}

Template.profile.userLink = function(){
	var u = Meteor.user();
	if (u !== undefined)
		return u._id;
	return '';
}

Template.profile.swapperName = function(id){
	var swapper = Meteor.users.findOne(id);
	if(swapper !== null){
		return swapper.profile.name;
	}
	return id;
}

Template.profile.swappers = function() {
	return SwapShips.find({approved: true, u2:Meteor.userId()}).fetch()
}

Template.profile.pendingSwappers = function(){
	return SwapShips.find({approved: false, u2:Meteor.userId()}).fetch()
}

Template.profile.requestedSwappers = function(){
	return SwapShips.find({approved: false, u1:Meteor.userId()}).fetch()
}

Template.profile.events({
	'click button.approve': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		SwapShips.update({_id:swapship._id},{$set:{approved:true, cDate: new Date()}});
		SwapShips.insert({approved:true, snooze:false, u1:swapship.u2, u2:swapship.u1, pDate: new Date(), cDate: new Date()})
	},
	'click button.snooze': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		SwapShips.update({_id:swapship._id},{$set:{snooze:true}});
	},
	'click button.unsnooze': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		SwapShips.update({_id:swapship._id},{$set:{snooze:false}});
	},
	'click button.remove': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		SwapShips.remove({_id:swapship._id});
		SwapShips.remove({_id:SwapShips.findOne({u2:swapship.u1, u1:swapship.u2})._id});
	}

})