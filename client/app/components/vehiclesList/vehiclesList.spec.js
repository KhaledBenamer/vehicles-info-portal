import VehiclesListModule from './vehiclesList'
import VehiclesListController from './vehiclesList.controller';
import VehiclesListComponent from './vehiclesList.component';
import VehiclesListTemplate from './vehiclesList.html';

describe('VehiclesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VehiclesListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VehiclesListController();
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
      expect(VehiclesListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VehiclesListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VehiclesListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VehiclesListController);
      });
  });
});
