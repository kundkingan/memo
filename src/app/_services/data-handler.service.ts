import { Injectable } from '@angular/core';

@Injectable()
export class DataHandlerService {

	startMemo = [
		{ text: "123" },
		{ text: "1234" },
		{ text: "1235" },
		{ text: "1236" },
	]

  constructor() { }

  initMemos() {
  	if (!localStorage.getItem('memos')) {
  		localStorage.setItem('memos', JSON.stringify(this.startMemo));
  	}
  }

  saveMemos(memos) {
    localStorage.setItem('memos', JSON.stringify(memos));
  }

  getMemos() {
  	return JSON.parse(localStorage.getItem('memos'))
  }

}
