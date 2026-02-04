import { FaqService } from "../services/faq.service.ts";

export class FaqController {
  service: any;

  constructor() {
    this.service = new FaqService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}
