import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'] // Corrected from styleUrl to styleUrls
})
export class TodolistComponent {
  taskArray = [{ taskName: 'Brenda Thomas', isCompleted: false }];
  editingIndex: number | null = null; // To keep track of the index being edited

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (this.editingIndex !== null) {
      // If editing, update the existing task
      this.taskArray[this.editingIndex].taskName = form.controls['task'].value;
      this.editingIndex = null; // Reset editing index
    } else {
      // If not editing, add a new task
      this.taskArray.push({
        taskName: form.controls['task'].value,
        isCompleted: false
      });
    }
    form.reset();
  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  onEdit(index: number) {
    this.editingIndex = index; // Set the index of the task being edited
    // The form input will automatically populate with the task name due to the [value] binding
  }
}