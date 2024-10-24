export default class MyService {
  private constructor() {}

  private static instance: MyService

  static Get() {
    if (!this.instance) this.instance = new MyService()

    return this.instance
  }
}
