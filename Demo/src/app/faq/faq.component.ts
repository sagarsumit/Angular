import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

	public questionInput = "Title";
	public textareaField = "";
	
	public faqForm = true;
	public hideDelete = true;
	public hideClear = false;
	
	public editObj = { edit: false, id: 0};
	
	public faqList = [
		{
			id: 1,
			question: "What is your Payment Policy?",
			answer: "We accepct payment via paypal at this time."
		},
		{
			id: 2,
			question: "What is your Payment Policy?",
			answer: "We accepct payment via paypal at thisbjbm lcome to test.com, where your organization can easily and quickly author and administer training content, tests, and certifications online – with no complex technical requirements! If you need to create a quiz or launch a certificate course for thousands of employees, this software takes away the headache and b jhdewkjhdewkjhdkjwehdkjlhewkjldhwdwed"
		},
		{
			id: 3,
			question: "Any Additional information that might be useful?",
			answer: "Please dont hesitate to contact us in any case."
		}
	];

	constructor() { }

	ngOnInit() {
	}
	
	showFAQForm(){
		this.faqForm = false;
		this.hideClear = false;
		this.hideDelete = true;
		
		this.resetFAQ();
	}
	
	saveFAQ(question, answer){
		if(this.editObj.edit){
			
			for(var i=0; i<this.faqList.length;i++){
				if(this.faqList[i].id===this.editObj.id){
					
					this.faqList[i].question = question;
					this.faqList[i].answer = answer;
										
					break;
				}
			}
			
		}
		else{
			this.faqList.push({
				id: this.faqList.length+1,
				question: question,
				answer: answer
			});
		}
		
		this.hideClear = false;
		this.hideDelete = true;
		
		this.resetFAQ();
		
	}
	
	editFAQ(faqDoc){
		
		this.faqForm = false;
		
		this.questionInput = faqDoc.question;
		this.textareaField = faqDoc.answer;
		
		this.hideClear = true;
		this.hideDelete = false;
		
		this.setEditObject(true, faqDoc.id);
		
	}
	
	resetFAQ(){
		this.questionInput = "Title";
		this.textareaField = "";
		
		this.setEditObject(false, 0);
	}
	
	setEditObject(editBool, editId){
		this.editObj.edit = editBool;
		this.editObj.id = editId;
	}
	
	deleteFAQ(){
		var index = -1;
		var tmpFAQArray = [];
		
		for(var i=0; i<this.faqList.length; i++){
			if(this.faqList[i].id===this.editObj.id){
				index = i;
			}
			else{
				tmpFAQArray.push(this.faqList[i]);
			}
		}
		delete this.faqList[index];
		
		this.faqList = tmpFAQArray;
		
		this.hideClear = false;
		this.hideDelete = true;
		
		this.resetFAQ();
	}

}
