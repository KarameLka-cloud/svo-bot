// interface IBaseService {
//   client: any;
//   findAll(): any;
//   findById(id: number): any;
// }

export class BaseService {
  client: any;

  constructor(client: any) {
    this.client = client;
  }

  findAll() {
    return this.client.findMany({
      orderBy: {
        id: "asc",
      },
    });
  }

  findById(id: number) {
    return this.client.findUnique({
      where: {
        id,
      },
    });
  }
}
