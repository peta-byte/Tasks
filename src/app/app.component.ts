import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tasks';
  config: any;
  board: any;
  statuses: any;
  statusNames: any;

  info = {
    config: {
      statusNames: {
        0: 'ToDo',
        1: 'In Progress',
        2: 'Done',
        3: 'Closed'
      }
    },
    board: {
      1: {
        id: 1,
        tasks: [
          {
            taskID: 12345,
            taskName: 'Task C',
            status: 0,
            assigned: '',
            priority: 'Low'
          },
          {
            taskID: 67890,
            taskName: 'Task E',
            status: 2,
            assigned: '',
            priority: 'High'
          },
          {
            taskID: 11223,
            taskName: 'Task Z',
            status: 1,
            assigned: '',
            priority: 'Medium'
          },
          {
            taskID: 33445,
            taskName: 'Task Q',
            status: 3,
            assigned: '',
            priority: 'Low'
          }
        ],
        statuses: [0,1,2,3]
      }
    }
  };

  ngOnInit(): void {
      this.fetchConfig().then((data: any) => {
        this.config = data;
        this.statusNames = this.config?.statusNames;
      });
      this.fetchBoardData().then((data: any) => {
        this.board = data;
        this.statuses = this.board?.statuses;
      });
  }
  
  fetchConfig() {
    return new Promise(resolve => {
      setTimeout(resolve, 100, this.info?.config);
    });
  }

  fetchBoardData() {
    return new Promise(resolve => {
      setTimeout(resolve, 300, this.info?.board[1]);
    });
  }

  filterLaneData(status: number) {
    return this.board?.tasks.filter((task: any) => {
      return task.status === status;
    });
  }
}
