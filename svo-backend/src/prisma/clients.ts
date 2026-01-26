import { prisma } from "../../lib/prisma.ts";

const screensClient = prisma.screens;
const menuClient = prisma.menu;
const wantClient = prisma.want;
const helpClient = prisma.help;
const employmentClient = prisma.employment;
const faqClient = prisma.faq;
const fundClient = prisma.fund;
const feedbackClient = prisma.feedback;

export {
  screensClient,
  menuClient,
  wantClient,
  helpClient,
  employmentClient,
  faqClient,
  fundClient,
  feedbackClient,
};
