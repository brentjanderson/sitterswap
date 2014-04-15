Template.homedash.swapOpps = function() {
    return SwapOpps.find({urgent: {$not: true}, sitterId: {$not: 1}}).count();
};

Template.homedash.urgentSwaps = function() {
    return SwapOpps.find({urgent: true, sitterId: {$not: 1}}).count();
};

Template.homedash.plannedSwaps = function() {
    return SwapOpps.find({sitterId: Meteor.userId()}).count({});
};