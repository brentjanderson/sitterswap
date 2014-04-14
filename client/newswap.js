Template.newswap.rendered = function() {
    $(this.find("#swapdate")).datepicker();
    $(this.findAll('input.time')).timepicker({
        showPeriod: true,
        showLeadingZero: true
      });
};

Template.newswap.events({
    'click #createswap': function (e, t) {
        
        
        var uid = Meteor.userId();
        var swapdate = Date.parse(t.find('#swapdate').value);
        var starttime = Date.parse(t.find('#swapdate').value + "," + t.find('#starttime').value);
        var endtime = Date.parse(t.find('#swapdate').value + "," + t.find('#endtime').value);
        var notes = t.find('#childnotes').value;
        var swaptype = t.find('#swaptype').value;
        var urgent = false;
        
        if (Date.parse('t + 3 d') > swapdate) {
          urgent = true;
        }
        
        var sid = SwapOpps.insert({
          ownerId: uid,
          startDate: swapdate,
          startTime: starttime,
          endTime: endtime,
          urgent: urgent,
          notes: notes,
          swapType: swaptype
        });
        Router.go('viewswap',{id: sid});
        return false;
    }
});