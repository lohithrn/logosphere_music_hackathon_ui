import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss']
})
export class InputListComponent implements OnInit {

  myForm!: FormGroup;
  @Input() duration!: number;
  @Input() value: any[] = [];
  @Input() type: any;
  // @Input() placeholder: string = '';
  // @Input() readonly: boolean;
  @Input() labelText: string = "";
  @Input() showMissingError: boolean = false;
  @Output() newItemEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.value.length > 0) {
      this.myForm = this.fb.group({
        emails: this.fb.array([]),
      });

      let emailsControls = this.getEmailsControls();

      this.value.forEach((email) => {
        emailsControls.push(this.fb.group(this.addNewEmailExisting(email)));
      });
    } else {
      this.myForm = this.fb.group({
        emails: this.fb.array([this.addNewEmail()]),
      });
    }
  }

  ngOnChanges() {
    // console.log("in ng on change", this.value);
    if (this.value.length > 0) {
      this.myForm = this.fb.group({
        emails: this.fb.array([]),
      });

      let emailsControls = this.getEmailsControls();

      this.value.forEach((email) => {
        emailsControls.push(this.fb.group(this.addNewEmailExisting(email)));
      });
    } else {
      this.myForm = this.fb.group({
        emails: this.fb.array([this.addNewEmail()]),
      });
    }
  }

  addNewEmailExisting(element: any) {
    return {
      key: element.key,
      value: element.value,
    };
  }

  addNewEmail(): FormGroup {
    return this.fb.group({
      key: "",
      value: "",
    });
  }

  get emails(): FormArray {
    return <FormArray>this.myForm.get("emails");
  }

  getEmailsControls() {
    return this.emails.controls;
  }

  onAddNewEmail() {
    const email = this.addNewEmail();
    this.emails.push(email);
    // this.emitEmails();
  }

  onRemoveSlot(index: number) {
    let emailsLength = this.emails.length;

    if (emailsLength !== 1) {
      this.emails.removeAt(index);
    }
    // this.emitEmails();
    return;
  }

  change(event: any) {
    // this.emitEmails();
  }

  // emitEmails() {
  //   let arr = this.myForm.controls['emails']['controls'];
  //   let emailArr: any[] = [];
  //   arr.forEach((element:FormGroup) => {
  //     emailArr.push(element.get('email')?.value);
  //   });
  //   this.newItemEvent.emit(emailArr);
  // }

}
