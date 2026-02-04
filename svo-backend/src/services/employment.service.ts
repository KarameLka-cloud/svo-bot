import { prisma } from "../../prisma/lib/prisma.ts";
import { BaseService } from "./base.service.ts";

export class EmploymentService extends BaseService {
  constructor() {
    super(prisma.employment);
  }
}
