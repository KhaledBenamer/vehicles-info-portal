/*class HomeController {
  constructor() {
    this.name = 'home';
  }
}*/

/*const INIT = new WeakMap();
const SERVICE = new WeakMap();
const SVC = new WeakMap();
const TIMEOUT = new WeakMap();

class HomeController {
  constructor($timeout, bookShelfSvc, GoatsService){
    this.GoatsService = GoatsService;

    // this will gold our goatsList, it will be passed to the other components.
    this.goatsList = [];

    SERVICE.set(this, bookShelfSvc);
    SVC.set(this, GoatsService);
    TIMEOUT.set(this, $timeout);
    INIT.set(this, () => {
      SERVICE.get(this).getActiveBooks().then(books => {
        console.log('I am here at Home');
        console.log(books.makes[0]);
        this.books = books;
      });
    });

    INIT.get(this)();
  }
  $onInit(){
    this.goatsList = this.GoatsService.getGoats();
    console.log(this.goatsList);
  }
}
HomeController.$inject = ['$timeout', 'bookShelfSvc', 'GoatsService'];
export default HomeController;
*/
class HomeController {
  constructor() {
    this.name = 'home';
  }
}

export default HomeController;