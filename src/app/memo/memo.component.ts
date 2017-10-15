import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

	memos = [
		{ text: "123" },
		{ text: "1234" },
		{ text: "1235" },
		{ text: "1236" },
	]
	
  constructor() { }

  ngOnInit() {
  }

  addMemo() {

  }

  deleteMemo(i) {
  	this.memos.splice(i, 1);
  }

}
