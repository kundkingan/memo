import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

	savedMemo = [
		{ text: "123" },
		{ text: "123" },
		{ text: "123" },
		{ text: "123" },
	]
	
  constructor() { }

  ngOnInit() {
  }

}
