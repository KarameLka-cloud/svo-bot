import { WantService, WantRelationsService } from "../services/want.service.ts";

export class WantController {
  service: any;

  constructor() {
    this.service = new WantService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}

export class WantRelationsController {
  service: any;

  constructor() {
    this.service = new WantRelationsService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }

  getWantRelationByWantId(id: number) {
    return this.service.getWantRelationByWantId(id);
  }
}
