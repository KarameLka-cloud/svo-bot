import { BaseController } from "./base.controller.ts";
import { WantService, WantRelationsService } from "../services/want.service.ts";

export class WantController extends BaseController {
  constructor() {
    super(new WantService());
  }
}

export class WantRelationsController extends BaseController {
  service: any;

  constructor() {
    super(new WantRelationsService());
    this.service = new WantRelationsService();
  }

  getWantRelationByWantId(id: number) {
    return this.service.getWantRelationByWantId(id);
  }
}
