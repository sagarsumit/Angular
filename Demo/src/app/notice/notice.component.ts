import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

	public titleInput = "Title";
	public textareaField = "";
	public endDateInput = "";
	
	public hideDelete = true;
	public hideClear = false;
	
	public editObj = { edit: false, id: 0};
	
	public noticeList = [
		{
			id: 1,
			title: "Welcome Notice",
			description: "Hi Everyone, Welcome to Orange twig. we have just release our vendor console beta",
			date: "13th July 2013"
		},
		{
			id: 2,
			title: "Super Sale this Summer",
			description: "10 percent on off all Items",
			date: "13th July 2013"
		},
		{
			id: 3,
			title: "Mega Summer Offer",
			description: "One item worht Rs1000 free in purchase of 5000Rs shopping",
			date: "18th August 2013"
		}
	]; 
	
	constructor() { }

	ngOnInit() {
	}
	
	saveNotice(title, description, date){
		if(this.editObj.edit){
			
			for(var i=0; i<this.noticeList.length;i++){
				if(this.noticeList[i].id===this.editObj.id){
					
					this.noticeList[i].title = title;
					this.noticeList[i].description = description;
					this.noticeList[i].date = date;
										
					break;
				}
			}
			
		}
		else{
			this.noticeList.push({
				id: this.noticeList.length+1,
				title: title,
				description: description,
				date: date
			});
		}
		
		this.hideClear = false;
		this.hideDelete = true;
		
		this.resetNotice();
		
	}
	
	editNotice(noticeDoc){
		
		this.titleInput = noticeDoc.title;
		this.textareaField = noticeDoc.description;
		this.endDateInput = noticeDoc.date;
		
		this.hideClear = true;
		this.hideDelete = false;
		
		this.setEditObject(true, noticeDoc.id);
		
	}
	
	resetNotice(){
		this.titleInput = "Title";
		this.textareaField = "";
		this.endDateInput = "";
		
		this.setEditObject(false, 0);
	}
	
	setEditObject(editBool, editId){
		this.editObj.edit = editBool;
		this.editObj.id = editId;
	}
	
	deleteNotice(){
		var index = -1;
		var tmpNoticeArray = [];
		
		for(var i=0; i<this.noticeList.length; i++){
			if(this.noticeList[i].id===this.editObj.id){
				index = i;
			}
			else{
				tmpNoticeArray.push(this.noticeList[i]);
			}
		}
		delete this.noticeList[index];
		
		this.noticeList = tmpNoticeArray;
		
		this.hideClear = false;
		this.hideDelete = true;
		
		this.resetNotice();
	}
	
}
