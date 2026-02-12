import { VisitorsService } from "../services/visitors.service.ts";

export class VisitorsController {
  service: VisitorsService;

  constructor() {
    this.service = new VisitorsService();
  }

  create(data: any) {
    return this.service.create(data);
  }
}
