Template.homedash.swapOpps = function() {
    return SwapOpps.find().count();
};

Template.homedash.urgentSwaps = function() {
    return SwapOpps.find().count({urgent: true});
};

Template.homedash.plannedSwaps = function() {
    return SwapOpps.find().count({});
};