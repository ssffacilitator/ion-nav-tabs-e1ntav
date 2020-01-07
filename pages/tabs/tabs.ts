import { Component } from '@angular/core';

/*Import PAGES that you want TABS to have access too....
I have completed only one import for you*/
import { HomePage } from '../home/home'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  /*The class properties of a TABS page will point to the pages 
  that you want to be able to route to.*/
  tab1Root = HomePage;



  /*Take a look at html file!*/



  
  constructor() {

  }
}
