export class SingleTask {
  id: number;
  title: string;
  body: string;

  constructor(_id: number, _title: string, _body: string) {
    this.id = _id;
    this.title = _title;
    this.body = _body;
  }
}
