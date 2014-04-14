Router.configure({
  layoutTemplate: 'router_layout',
  notFoundTemplate: 'router_404',
  loadingTemplate: 'router_loading'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home'
    });

    this.route('about', {
    	path: '/about',
    	template: 'about'
    });

    this.route('profile', {
        path: '/profile',
        template: 'profile'
    });
    this.route('urgentswaps', {
        path: '/urgentswaps',
        template: 'urgentswaps'
    });
    this.route('swaps');
    this.route('plannedSwaps');
    this.route('viewswap', {
        path: '/viewswap/:id',
        template: 'viewswap',
        data: function() { 
            return SwapOpps.findOne(this.params.id);
        }
    });
    this.route('propose', {
        path: '/propose',
        template: 'propose',
        data: function(){
            var params = this.params;
            return Meteor.users.findOne({_id:this.params.uid});
        }
    });

    this.route('newswap', {
        path: '/newswap',
        template: 'newswap'
    });
});