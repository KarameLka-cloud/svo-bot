import { BaseController } from "./base.controller.ts";
import { HelpService, HelpRelationsService } from "../services/help.service.ts";

export class HelpController extends BaseController {
  constructor() {
    super(new HelpService());
  }
}

export class HelpRelationsController extends BaseController {
  service: any;

  constructor() {
    super(new HelpRelationsService());
    this.service = new HelpRelationsService();
  }

  getWantRelationByWantId(id: number) {
    return this.service.getHelpRelationByHelpId(id);
  }
}
