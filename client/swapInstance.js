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
    if (this.urgent) {
        return "warning";
    } else if (this.sitterId) {
        return "success";
    } else {
        return "info";
    }
};