import VehiclesListingModule from './vehiclesListing'
import VehiclesListingController from './vehiclesListing.controller';
import VehiclesListingComponent from './vehiclesListing.component';
import VehiclesListingTemplate from './vehiclesListing.html';

describe('VehiclesListing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VehiclesListingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VehiclesListingController();
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
      expect(VehiclesListingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VehiclesListingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VehiclesListingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VehiclesListingController);
      });
  });
});
