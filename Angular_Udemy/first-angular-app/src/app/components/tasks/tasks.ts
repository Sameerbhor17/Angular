import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  // @Input({required: true}) name!: string;
  @Input({required: true}) userId !: string;
  @Input({required: true}) name?: string;
  isAddingTask:boolean = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Database Optimization',
      summary: 'Improve SQL queries and optimize database performance.',
      dueDate: '2024-07-10',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'UI/UX Revamp',
      summary: 'Redesign the application interface for better user experience.',
      dueDate: '2024-08-20',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Implement Authentication',
      summary: 'Add login, signup, and JWT-based authentication system.',
      dueDate: '2024-09-05',
    },
    {
      id: 't7',
      userId: 'u1',
      title: 'Integrate Payment Gateway',
      summary: 'Integrate Stripe or Razorpay for handling online payments.',
      dueDate: '2024-10-01',
    },
    {
      id: 't8',
      userId: 'u5',
      title: 'Write Unit Tests',
      summary: 'Create unit tests for critical components and services.',
      dueDate: '2024-06-30',
    },
    {
      id: 't9',
      userId: 'u2',
      title: 'Setup CI/CD Pipeline',
      summary: 'Automate build and deployment using CI/CD tools.',
      dueDate: '2024-09-25',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Performance Monitoring',
      summary: 'Implement logging and monitoring for app performance tracking.',
      dueDate: '2024-11-15',
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
