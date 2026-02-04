import { prisma } from "../../prisma/lib/prisma.ts";
import { BaseService } from "./base.service.ts";

export class WantService extends BaseService {
  constructor() {
    super(prisma.want);
  }
}

export class WantRelationsService extends BaseService {
  constructor() {
    super(prisma.want_relations);
  }

  getWantRelationByWantId(id: number) {
    return prisma.want_relations.findMany({
      where: {
        want_id: id,
      },
      orderBy: {
        id: "asc",
      },
    });
  }
}
