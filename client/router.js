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

    this.route('propose', {
        path: '/propose',
        template: 'propose',
        data: function(){
            var params = this.params;
            return Meteor.users.findOne({_id:this.params.uid});
        }
    });
});