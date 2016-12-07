class VechilesListingController {
  constructor(VechilesInfoService) {
  	"ngInject";
  	this.name = 'Vechiles Info. Portal';
    this.VechilesInfoService = VechilesInfoService;
    this.vechiles = '';
  }

  $onInit(){
    this.VechilesInfoService.getVechiles({makes: 'makes', state: 'used', year: '2014', view: 'basic', fmt: 'json', api_key: 'mnequvu6w5rd2ujk59j794bv'}).then(vechiles => {
        console.log("I got vechiles");
        console.log(vechiles);
        this.vechiles = vechiles;
        console.log(this.vechiles);
      }); 
  }
}
export default VechilesListingController;

