import { FormService } from './../../services/form.service';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { cmToFeet, convert_kg_to_lbs , convert_lbs_to_kg} from 'src/app/helpers/sizing.helpers';
import { Observable, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent   {
  
  form: FormGroup;
  
  submit(){
    let toLocal = this.fs.setToLocalStorage(this.form, 'basic-info');
  }

  onFeetChange(form){
    console.log(form.value)
  }
  
  get heightIsCm(){
    return this.form.get('heightIsCm')

  }

  get weightIsKg(){
    return this.form.get('weightIsKg')
  }
  get inch() {
    return this.form.get('inch')
  }

  get cm() {
    return this.form.get('cm')
  }

  get ft() {
    return this.form.get('ft')
  }


  get lbs() {
    return this.form.get('lbs')
  }

  get kg() {
    return this.form.get('kg')
  }
  
  onCmChange() {
    this.cm.valueChanges.subscribe(val => {
      let imperiaSize = cmToFeet(val).split('-',2);
      let feet = imperiaSize[0]
      let inches = imperiaSize[1]
      this.form.get('ft').setValue(feet)
      this.form.get('inch').setValue(inches)
    });
  }

  onKgChange(){
    this.kg.valueChanges.subscribe(val => {
      this.weightIsKg.valueChanges.subscribe(v => {
        if (v==false){
          let lbs = convert_kg_to_lbs(val)
          this.form.get('lbs').setValue(lbs)
        }
    })
  })
  }



  onLbsChange(){
    this.lbs.valueChanges.subscribe(val => {
      this.weightIsKg.valueChanges.subscribe(v => {
        if (v==true){
          let kg = convert_lbs_to_kg(val)
          this.form.get('kg').setValue(kg)
        }
    })
  })
  }


  heightValidator(){
    this.heightIsCm.valueChanges.subscribe(val => {
      if (val==true){
        this.cm.setValidators(Validators.required);
      }
      else {
        this.ft.setValidators(Validators.required)
        this.inch.setValidators(Validators.required)
      }
    });
  }

  weightValidator(){
    this.weightIsKg.valueChanges.subscribe(val => {
      if (val==true)
        this.kg.setValidators(Validators.required);
      else {
        this.lbs.setValidators(Validators.required)
      }
    });
  }
  onChange(): void {
    this.onCmChange()
    this.onKgChange()
    this.onLbsChange()
    this.onLbsChange()
    // this.heightValidator()
    // this.weightValidator()
  }
  
    //   this.cm.setValidators(Validators.required);
    // if(this.weightIsKg)
    //   this.kg.setValidators(Validators.required);
    
  
  //}

  constructor(fb: FormBuilder, private fs: FormService)
      
    { 
    this.form = fb.group({
      cm: [''],
      kg: [''],
      ft: [''],
      inch: [''],
      lbs: [''],
      weightIsKg:[''],
      heightIsCm: [''],
  
    })
  }

  ngOnInit() {
    //get basic info from local storage
    let local = this.fs.getFromLocalStorage(this.form, 'basic-info')
    this.onChange();
  }


}
