import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notice-display',
  templateUrl: './notice-display.component.html',
  styleUrls: ['./notice-display.component.css']
})
export class NoticeDisplayComponent implements OnInit {

  constructor() { }

  @Input('noticeDisplay') public noticeList;
  
  @Output() public noticeEvent = new EventEmitter();
  
  ngOnInit() {
  }

  editNotice(noticeObj){
	this.noticeEvent.emit(noticeObj);
  }
  
}
