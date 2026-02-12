import { prisma } from "../../prisma/lib/prisma.ts";
import { PrismaClient } from "@prisma/client/extension";

export class StartService {
  client: PrismaClient["actions"];

  constructor() {
    this.client = prisma.screens;
  }

  findStartMessage() {
    return this.client.findUnique({
      where: {
        type: "start",
      },
    });
  }

  findStartMessageByType(type: string) {
    return this.client.findUnique({
      where: {
        type,
      },
    });
  }
}
