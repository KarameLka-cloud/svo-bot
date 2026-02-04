import { FeedbackService } from "../services/feedback.service.ts";

export class FeedbackController {
  service: any;

  constructor() {
    this.service = new FeedbackService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}
