import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup}                                from '@angular/forms';

import {readFileSync} from 'fs';

const parser = require('csv-parse');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      'fileUp': new FormControl('')
    });
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  showChange(filesUploaded: FileList) {
    console.log(filesUploaded);
    console.log(filesUploaded.item(0));
    let f: File = filesUploaded.item(0);

    let j: FileReader = new FileReader();
    j.onloadend = (x) => {
      console.log(j.result);
      parser(j.result, {
        comment: '#'
      }, function (err, output) {
        console.warn(err);
        console.log(output);
      });
    };
    j.readAsText(f);
  }

  submitted($event: any) {
    console.log($event);
  }
}
