export interface Task {
  id: number;
  title: string;
  description: string;
  // createdAt: string;
  // expirationDate: string;
  // timeAtWork: string; // Время в работе
  // priority: string;
  // files: any[];
  status: TaskStatus;
  // parentTaskId: number;
  // comments: string[];
}

export enum TaskStatus {
  QUEUE = "QUEUE",
  DEVELOPMENT = "DEVELOPMENT",
  DONE = "DONE",
}
