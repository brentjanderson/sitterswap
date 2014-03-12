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
});