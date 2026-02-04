import { EmploymentService } from "../services/employment.service.ts";

export class EmploymentController {
  service: any;

  constructor() {
    this.service = new EmploymentService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}
