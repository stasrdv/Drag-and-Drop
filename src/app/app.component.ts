import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { MatSnackBar } from "@angular/material";
import { SingleTask } from "./models/task.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  todo: Array<SingleTask> = [];
  done: Array<SingleTask> = [];

  constructor(public snackBar: MatSnackBar) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      const eventData: any = event.container.data[event.previousIndex];
      const title = eventData.title;
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.openSnackBar(title, `moved to priority ${event.currentIndex + 1}`);
    } else {
      const eventData: any = event.previousContainer.data[event.previousIndex];
      const title = eventData.title;
      this.openSnackBar(title, "Done");
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit() {
    this.todo = mockdata;
  }
}

const mockdata: Array<SingleTask> = [
  {
    id: 0,
    title: "Get to work",
    body: "Take bus 64 or 56 and then 91"
  },
  {
    id: 1,
    title: "Go home",
    body: "Take bus 91 and then 64"
  },
  {
    id: 2,
    title: "Fall asleep",
    body: "Netflix and chill"
  },
  {
    id: 3,
    title: "Get up",
    body: "Have a nice day"
  },
  {
    id: 4,
    title: "Take a shower",
    body: ""
  },
  {
    id: 5,
    title: "Check e-mail",
    body: "Work done"
  }
];
