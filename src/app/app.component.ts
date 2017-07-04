import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  demoForm: FormGroup;
  yearRange: number[] = [1990, 2017];
  isReset: boolean = false;
  formValues: any;
  constructor(private _fb: FormBuilder){

  }

  ngOnInit(){
    this.isReset = false;
    this.buildForm();
  }

  buildForm(){
    this.demoForm = this._fb.group({
      "yearRange": [[1991, 2017]]
    });
  }

  submitSearch(){
    if(this.isReset){
      this.isReset = false;
    }
    else{
      this.formValues = JSON.stringify(this.demoForm.value, null, 4);
    }
  }

  resetForm(){
    this.isReset = true;
    this.demoForm.reset({"yearRange" : [1991, 2017]});
  }
}
