import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contacts = [{'id':1, 'name': 'phone'},
              {'id':2, 'name': 'email'}]
  log(x){
    console.log(x);
  }

  submit(x){ console.log(x) }
}
