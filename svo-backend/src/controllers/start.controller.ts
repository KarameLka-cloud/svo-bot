import { StartService } from "../services/start.service.ts";

export class StartController {
  service: StartService;

  constructor() {
    this.service = new StartService();
  }

  getStartMessage() {
    return this.service.findStartMessage();
  }

  getStartMessageByType(type: string) {
    return this.service.findStartMessageByType(type);
  }
}
