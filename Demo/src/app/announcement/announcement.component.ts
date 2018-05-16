import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

	public titleInput = "Title";
	public textareaField = "";
	public endDateInput = "";
	
	public hideDelete = true;
	public hideClear = false;
	
	public editObj = { edit: false, id: 0};
	
	public announcementList = [
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
	
	saveAnnouncement(title, description, date){
		if(this.editObj.edit){
			
			for(var i=0; i<this.announcementList.length;i++){
				if(this.announcementList[i].id===this.editObj.id){
					
					this.announcementList[i].title = title;
					this.announcementList[i].description = description;
					this.announcementList[i].date = date;
										
					break;
				}
			}
			
		}
		else{
			this.announcementList.push({
				id: this.announcementList.length+1,
				title: title,
				description: description,
				date: date
			});
		}
		
		this.hideClear = false;
		this.hideDelete = true;
		
		this.resetAnnouncement();
		
	}
	
	editAnnouncement(announcementDoc){
		
		this.titleInput = announcementDoc.title;
		this.textareaField = announcementDoc.description;
		this.endDateInput = announcementDoc.date;
		
		this.hideClear = true;
		this.hideDelete = false;
		
		this.setEditObject(true, announcementDoc.id);
		
	}
	
	resetAnnouncement(){
		this.titleInput = "Title";
		this.textareaField = "";
		this.endDateInput = "";
		
		this.setEditObject(false, 0);
	}
	
	setEditObject(editBool, editId){
		this.editObj.edit = editBool;
		this.editObj.id = editId;
	}
	
	deleteAnnouncement(){
		var index = -1;
		var tmpAnnouncementArray = [];
		
		for(var i=0; i<this.announcementList.length; i++){
			if(this.announcementList[i].id===this.editObj.id){
				index = i;
			}
			else{
				tmpAnnouncementArray.push(this.announcementList[i]);
			}
		}
		delete this.announcementList[index];
		
		this.announcementList = tmpAnnouncementArray;
		
		this.hideClear = false;
		this.hideDelete = true;
		
		this.resetAnnouncement();
	}

}
