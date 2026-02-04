import { prisma } from "../../prisma/lib/prisma.ts";
import { BaseService } from "./base.service.ts";

export class FundService extends BaseService {
  constructor() {
    super(prisma.fund);
  }
}
