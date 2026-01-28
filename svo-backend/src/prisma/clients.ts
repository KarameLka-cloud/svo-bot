import { prisma } from "../../lib/prisma.ts";

const screensClient = prisma.screens;
const menuClient = prisma.menu;
const wantClient = prisma.want;
const wantRelationsClient = prisma.want_relations;
const helpClient = prisma.help;
const helpRelationsClient = prisma.help_relations;
const employmentClient = prisma.employment;
const faqClient = prisma.faq;
const fundClient = prisma.fund;
const feedbackClient = prisma.feedback;

export {
  screensClient,
  menuClient,
  wantClient,
  wantRelationsClient,
  helpClient,
  helpRelationsClient,
  employmentClient,
  faqClient,
  fundClient,
  feedbackClient,
};
