import VechilesListingModule from './vechilesListing'
import VechilesListingController from './vechilesListing.controller';
import VechilesListingComponent from './vechilesListing.component';
import VechilesListingTemplate from './vechilesListing.html';

describe('VechilesListing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VechilesListingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VechilesListingController();
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
      expect(VechilesListingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VechilesListingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VechilesListingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VechilesListingController);
      });
  });
});
