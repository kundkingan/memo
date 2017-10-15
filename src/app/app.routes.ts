import { MemoComponent } from './memo/memo.component';
import { AlarmComponent } from './alarm/alarm.component';

export const AppRoutes = [
  { path: '', redirectTo: 'memo', pathMatch: 'full' },
  { path: "memo",  component: MemoComponent },
  { path: "alarm", component: AlarmComponent },
  { path: '**', redirectTo: ''},
];
