Template.swapInstance.events({
	'click .btn-swap': function(e, t) {
		// Indicate that this person wants to take the swap

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