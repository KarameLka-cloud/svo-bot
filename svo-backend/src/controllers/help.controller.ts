import { HelpService, HelpRelationsService } from "../services/help.service.ts";

export class HelpController {
  service: any;

  constructor() {
    this.service = new HelpService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}

export class HelpRelationsController {
  service: any;

  constructor() {
    this.service = new HelpRelationsService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }

  getWantRelationByWantId(id: number) {
    return this.service.getHelpRelationByHelpId(id);
  }
}
