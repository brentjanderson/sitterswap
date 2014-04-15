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
	},
    'click button.btn-oops': function(e, t){
        if(confirm("Are you sure you can't make it?")){
            SwapOpps.update(this._id, {$unset: {sitterId:""}});
        }
    }
});

Template.swapInstance.panelStyle = function() {
    if(this.sitterId){
        return "success";
    }else if (this.urgent) {
        return "warning";
    } else {
        return "info";
    }
};

Template.swapInstance.isPlanned = function(){
    if(this.sitterId){
        return true;
    }
    return false;
}