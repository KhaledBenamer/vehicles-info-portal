import VechilesListModule from './vechilesList'
import VechilesListController from './vechilesList.controller';
import VechilesListComponent from './vechilesList.component';
import VechilesListTemplate from './vechilesList.html';

describe('VechilesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VechilesListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VechilesListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(VechilesListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VechilesListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VechilesListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VechilesListController);
      });
  });
});
