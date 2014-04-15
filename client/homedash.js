Template.homedash.swapOpps = function() {
    return Template.swaps.swaps().count();
};

Template.homedash.urgentSwaps = function() {
    return Template.urgentSwaps.swaps().count();
};

Template.homedash.plannedSwaps = function() {
    return Template.plannedSwaps.swaps().count();
};