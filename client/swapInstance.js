Template.swapInstance.events({
	'click .btn-swap': function(e, t) {
		// Indicate that this person wants to take the swap
        var message = t.find('textarea').value;
        if (message.length > 0) {
            SwapOpps.update(this._id, {$set: {sitterId: Meteor.userId(), sitterNotes: message}});
        } else {
            SwapOpps.update(this._id, {$set: {sitterId: Meteor.userId()}});
        }
        Toast.success('You have requested this swap!');
        Router.go('viewswap', {id: this._id});
	}
});

Template.swapInstance.panelStyle = function() {
    console.log(this);
    if (this.urgent) {
        return "warning";
    } else if (this.sitterId) {
        return "success";
    } else {
        return "info";
    }
};

Template.swapInstance.swapRequestor = function() {
    var swap = this // Router.current().data();

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

Template.swapInstance.sitter = function() {
    var swap = this;
    if (!swap || !swap.sitterId) {
        return;
    }

    var sitterObj = Meteor.users.findOne({_id: swap.sitterId });
    if (!sitterObj) {
        return;
    }

    sitterObj.profile = sitterObj.profile || {};

    var sitter = {
        name: sitterObj.profile.name
    };
    
    if (swap.sitterId === Meteor.userId()) {
        sitter.name = "You";
    }

    return sitter;
};