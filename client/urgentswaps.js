Template.urgentSwaps.swaps = function() {
    return SwapOpps.find({ sitterId: {$exists: false}, urgent: true, ownerId: {$not: Meteor.userId()} },{transform: function(doc) {
    	// Get the name of the owner
    	var owner = Meteor.users.findOne({_id: doc.ownerId});
    	if (owner && owner.profile && owner.profile.name) {
    		doc.ownerName = owner.profile.name;
    	} else if (owner && owner.emails && owner.emails[0]) {
    		doc.ownerName = owner.emails[0].address;
    	}

    	// Format the times nicely
    	doc.startTimeFormatted = moment(doc.startTime).format('MMMM DD, YYYY [at] H:mm:ss A');
    	doc.endTimeFormatted = moment(doc.endTime).format('MMMM DD, YYYY [at] H:mm:ss A');
    	
    	return doc;
    }});
};