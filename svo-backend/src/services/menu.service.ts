import { prisma } from "../../prisma/lib/prisma.ts";
import { BaseService } from "./base.service.ts";

export class MenuService extends BaseService {
  constructor() {
    super(prisma.menu);
  }
}
