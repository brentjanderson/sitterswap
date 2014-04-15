Template.profile.userEmail = function() {
	var u = Meteor.user();
	if (u && u.emails) {
		return u.emails[0].address;
	} else {
		return u.services.facebook.email;
	}
	return '';
};

Template.profile.userFullName = function(){
	var u = Meteor.user();
	if (u !== undefined && u.profile)
		return u.profile.name;
	return '';
};

Template.profile.userPhone = function(){
	var u = Meteor.user();
	if (u !== undefined && u.profile)
		if(u.profile.phone !== undefined)
			return u.profile.phone;
	return '';
};

Template.profile.userLink = function(){
	var u = Meteor.user();
	if (u !== undefined)
		return u._id;
	return '';
};

Template.profile.swapperName = function(id){
	var swapper = Meteor.users.findOne(id);
	if(swapper !== null && swapper.profile){
		return swapper.profile.name;
	}
	return swapper.emails[0].address;
};

Template.profile.formatDate = function(date){
	var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

	var curr_date = date.getDate();
	var curr_month = date.getMonth();
	var curr_year = date.getFullYear();
	return curr_date + " " + m_names[curr_month] + " " + curr_year;
}

Template.profile.swappers = function() {
	return SwapShips.find({approved: true, u2:Meteor.userId()}).fetch()
};

Template.profile.pendingSwappers = function(){
	return SwapShips.find({approved: false, u2:Meteor.userId()}).fetch()
};

Template.profile.requestedSwappers = function(){
	return SwapShips.find({approved: false, u1:Meteor.userId()}).fetch()
};

Template.profile.events({
	'click button.update': function(event){
		console.log('fired');
		Meteor.users.update({_id:Meteor.userId()},{$set:{"profile.name": $("#userName").val(), "profile.phone": $("#userPhone").val()}})
	},
	'click button.approve': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		SwapShips.update({_id:swapship._id},{$set:{approved:true, cDate: new Date()}});
		SwapShips.insert({approved:true, snooze:false, u1:swapship.u2, u2:swapship.u1, pDate: new Date(), cDate: new Date()})
	},
	'click button.reject': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		if(confirm("Are you sure you want to reject this offer?")){
			SwapShips.remove({_id:swapship._id});
		}
	},
	'click button.snooze': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		SwapShips.update({_id:swapship._id},{$set:{snooze:true}});
	},
	'click button.unsnooze': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		SwapShips.update({_id:swapship._id},{$set:{snooze:false}});
	},
	'click button.recind': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		if(confirm("Are you sure you want to recind this offer?")){
			SwapShips.remove({_id:swapship._id});
		};
	},
	'click button.remove': function(event){
		var swapship = SwapShips.findOne({_id:event.target.getAttribute("id")});
		if(confirm("Are you sure you want to stop swapping?")){
			SwapShips.remove({_id:swapship._id});
			SwapShips.remove({_id:SwapShips.findOne({u2:swapship.u1, u1:swapship.u2})._id});
		}
	}

});

Template.profile.absoluteUrl = function() {
	return Meteor.absoluteUrl();
};

Template.profile.rendered = function() {
    try {
        FB.XFBML.parse();
    }catch(e) {}
};