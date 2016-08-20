export default ngModule => {
  require('./header.scss');

  ngModule.directive('mainHeader', function mainHeader() {
    return {
      template: require('./header.jade'),
      scope: {},
      controllerAs: 'header',
      controller: function mainHeaderCtrl() {
      },
    };
  });
};
