import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../_services/data-handler.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css'],
  providers: [DataHandlerService]
})
export class MemoComponent implements OnInit {

	memos = []
	memo = '';
	
  constructor(private dataHandlerService: DataHandlerService) {
  	this.dataHandlerService.initMemos();
  	this.memos = this.dataHandlerService.getMemos();
  }

  ngOnInit() {}

  addMemo(memo) {
  	if (memo) { 
      this.memos.push({text: memo});
      this.dataHandlerService.saveMemos(this.memos); 
    }
  }

  deleteMemo(i) {
  	this.memos.splice(i, 1);
  	this.dataHandlerService.saveMemos(this.memos)
  }
}
