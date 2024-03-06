export default class ErrorRepository {
  constructor() {
    this.repo = new Map();
  }
  translate(code) {
    if (this.repo.has(code)) {
      return this.repo.get(code);
    }
    return "Unknown error";
  }
}
