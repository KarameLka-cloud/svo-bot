import { FundService } from "../services/fund.service.ts";

export class FundController {
  service: any;

  constructor() {
    this.service = new FundService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}
