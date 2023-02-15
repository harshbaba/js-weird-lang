Step1:
    Register the reactive forms module

    To use reactive form controls, import ReactiveFormsModule from the @angular/forms package and 
    add it to your NgModule's imports array.

    import { ReactiveFormsModule } from '@angular/forms';

    @NgModule({
    imports: [
        // other imports ...
        ReactiveFormsModule
    ],
    })
    export class AppModule { }

Step2:
    To register a single form control, import the FormControl class and create a new instance of 
    FormControl to save as a class property.

    src/app/name-editor/name-editor.component.ts
    
    import { Component } from '@angular/core';
    import { FormControl } from '@angular/forms';

    @Component({
        selector: 'app-name-editor',
        templateUrl: './name-editor.component.html',
        styleUrls: ['./name-editor.component.css']
        })
        export class NameEditorComponent {
        name = new FormControl('');
    }

    <div class="container">
        <p>reactiveform works!</p>
        <label for="name">Name: </label>
        <input id="name" type="text" [formControl]="name">
        <p>Value: {{ name.value }}</p>
        <button (click)="resetName()">Reset Name</button>
    </div>

    resetName(){
        this.name.setValue('User');
    }


Grouping form controls  ==========

import { FormGroup, FormControl } from '@angular/forms';

To add a form group to this component, take the following steps.

Create a FormGroup instance.
Associate the FormGroup model and view.
Save the form data.


========Form Builder===========
import { FormBuilder } from '@angular/forms';

constructor(private fb: FormBuilder) { }

profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });


https://sami-chkhachkhi.medium.com/setvalue-vs-patchvalue-angular-a64a55e912b8