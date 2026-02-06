export class BaseController {
  service: any;

  constructor(service: any) {
    this.service = service;
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}
