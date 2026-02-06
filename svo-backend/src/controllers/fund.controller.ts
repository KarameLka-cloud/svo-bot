import { BaseController } from "./base.controller.ts";
import { FundService } from "../services/fund.service.ts";

export class FundController extends BaseController {
  constructor() {
    super(new FundService());
  }
}
