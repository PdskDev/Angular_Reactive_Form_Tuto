import { Component, OnInit } from "@angular/core";

import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular-reactiveform";
  firstNameControl!: FormControl;
  lastNameControl!: FormControl;

  ngOnInit(): void {
    this.firstNameControl = new FormControl();
    this.lastNameControl = new FormControl();
  }
}
