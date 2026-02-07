import { prisma } from "../../prisma/lib/prisma.ts";

export class ActionService {
  client: any;

  constructor() {
    this.client = prisma.action;
  }

  findMainButton() {
    return this.client.findMany({
      where: {
        parent_id: null,
      },
    });
  }

  findById(id: number) {
    return this.client.findUnique({
      where: {
        id,
      },
      include: {
        actions: true,
      },
    });
  }

  findByParentId(id: number) {
    return this.client.findMany({
      where: {
        parent_id: id,
      },
    });
  }
}
