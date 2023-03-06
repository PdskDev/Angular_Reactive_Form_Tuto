import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

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
  colors: any;

  getColors() {
    return this.myForm.get("colors") as FormArray;
  }

  addColors(value?: string) {
    this.colors.push(
      new FormGroup({
        name: new FormControl(value),
      })
    );
  }

  submitForm() {
    console.log(this.myForm.value);
  }

  removeColor(index: number) {
    this.colors.removeAt(index);
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      basicInfo: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        age: new FormControl(),
      }),

      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        postal: new FormControl(),
      }),

      /*  colors: new FormArray([
        new FormGroup({ name: new FormControl("Red") }),
        new FormGroup({ name: new FormControl("Green") }),
        new FormGroup({ name: new FormControl("Blue") }),
      ]), */
    });

    this.myForm.setValue(this.mockData());
  }

  private mockData() {
    return {
      basicInfo: {
        firstName: "NadetDev",
        lastName: "Full-Stack",
        email: "nadetdev@fullstack.dev",
        age: "25",
      },

      address: {
        street: "rue des Développeurs",
        number: "1",
        postal: "75000",
      },
    };
  }
}
