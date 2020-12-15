class PublicController {
  constructor() { }
  async demo(ctx) {
    ctx.body = {
      msg: "body msg"
    }
  }
}

export default new PublicController()