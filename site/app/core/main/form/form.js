export default ngModule => {
  require('./form.scss');

  ngModule.directive('requestForm', function requestForm() {
    return {
      template: require('./form.jade'),
      scope: {},
      controllerAs: 'form',
      controller: function requestFormCtrl() {
        this.tags = ['Frontend', 'Backend', 'Diseño', 'UX', 'UI', 'Ventas', 'Redacción'];
      },
    };
  });
};
