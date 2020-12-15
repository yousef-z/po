import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  
  // template:`
  // <span class="spinner-border" [class.text-primary]="onclick" [class.text-success]="!onclick" role="status"> </span>
  // <span class="sr-only">Loading...</span>  <button class="btn btn-primary">  Save </button>
  // `
})
export class FavoriteComponent implements OnInit {
   @Input('isgreen') isgreen: boolean;
   @Output('change') anyname = new EventEmitter();

   title: string;
   
  constructor() { }
  ngOnInit() {}

    onClick(){
      this.isgreen =  !this.isgreen;
      console.log("is green " + this.isgreen);
      this.anyname.emit({greenValue: !this.isgreen});
    }

   
}

export interface ColorChangedArgs {
  greenValue: boolean
}
