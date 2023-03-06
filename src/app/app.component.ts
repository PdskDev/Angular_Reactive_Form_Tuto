import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular-reactiveform";
  //firstNameControl!: FormControl;
  //lastNameControl!: FormControl;
  myForm!: FormGroup;

  ngOnInit(): void {
    //this.firstNameControl = new FormControl();
    //this.firstNameControl.setValue("Nadet");
    //this.lastNameControl = new FormControl();
    //this.lastNameControl.patchValue("Lambi");

    /* this.myForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
    }); */

    this.myForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });
  }
}
