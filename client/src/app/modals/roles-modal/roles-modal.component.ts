import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent implements OnInit {

  username ='';
  availableRoles: any[] = [];
  selectedRoles: any[] = [];

  constructor(public bsModalRef: BsModalRef){

  }
  ngOnInit(): void {
    
  }

  updateChecked(checkedValue: string){
    // console.log(checkedValue);
    const index = this.selectedRoles.indexOf(checkedValue);
    console.log("result1",index);
    index !== -1 ? this.selectedRoles.splice(index, 1) : this.selectedRoles.push(checkedValue);
    console.log("result2",this.selectedRoles);
  }
}
