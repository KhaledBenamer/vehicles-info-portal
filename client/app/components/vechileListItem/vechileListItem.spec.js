import VechileListItemModule from './vechileListItem'
import VechileListItemController from './vechileListItem.controller';
import VechileListItemComponent from './vechileListItem.component';
import VechileListItemTemplate from './vechileListItem.html';

describe('VechileListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VechileListItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VechileListItemController();
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
      expect(VechileListItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VechileListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VechileListItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VechileListItemController);
      });
  });
});
