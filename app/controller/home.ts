import { Controller } from 'egg';
import { route } from 'egg-controller';
export default class HomeController extends Controller {
  public async renderWithMeta<T extends {}>(state: T) {
    const { ctx } = this;
    const locale = ctx.cookies.get('locale') || 'en-US';
    await ctx.render('home.js', {
      title: 'Gismall Home',
      keywords: 'gismall, react, server side render, ant design',
      description: 'Ant Design Tab Theme and Code Spliting',
      locale,
      location: {
        pathname: ctx.helper.getPathname(ctx.request.path),
      },
      currentUser: {
        userid: 1100,
        email: 'xiaowei.hsueh@gmail.com',
        username: 'Xiaowei Xue',
        picture:
          'https://lh3.googleusercontent.com/-wB9ogfMmX5Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf5zzOT6jsaazrdC0UaywEByS9dig.CMID/s192-c/photo.jpg',
      },
      ...state,
    });
  }

  @route('/')
  public async index() {
    await this.renderWithMeta({});
  }
}
