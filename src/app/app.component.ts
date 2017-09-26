import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  date: String = '10/10/2017 6:10';
  basicExampleList = [];
  basicExampleSelectedItems = [];
  basicExampleSettings = {};
  constructor(){
    
  }
   ngOnInit(){
  this.basicExampleList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}
                        ];
    
    this.basicExampleSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"}];
    this.basicExampleSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: false,
                              classes:"myclass custom-class"
                            };
}
onItemSelect(item:any){
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
   onDeSelectAll(items: any){
    console.log(items);
  }
}
