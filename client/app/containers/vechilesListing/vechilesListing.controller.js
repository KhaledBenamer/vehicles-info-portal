const INIT = new WeakMap();
const SERVICE = new WeakMap();
const TIMEOUT = new WeakMap();

class VechilesListingController {
  constructor(VechilesInfoService) {
  	"ngInject";
  	this.name = 'VechilesInfoService';
    SERVICE.set(this, VechilesInfoService);
    //TIMEOUT.set(this, $timeout);
    INIT.set(this, (text) => {
      SERVICE.get(this).getVechiles().then(vechiles => {
      	console.log("I am on Init" + text.name);
        console.log(vechiles.makes);
        this.vechiles = vechiles.makes[0];
        console.log(this.vechiles);
      });
    });
    INIT.get(this)({name:"Khaled"});
  }
}
export default VechilesListingController;

