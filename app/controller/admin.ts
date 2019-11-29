import { Controller } from 'egg';
import { route } from 'egg-controller';
import * as admin from 'firebase-admin';

export default class HomeController extends Controller {
  @route('/admin')
  public async index() {
    const { ctx } = this;
    const locale = ctx.cookies.get('locale') || 'en-US';
    await ctx.render('admin.js', {
      title: 'Gismall Admin',
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
    });
  }
  @route({
    url: '/api/users',
    method: 'get',
  })
  public async getUsers() {
    return this.listAllUsers();
  }

  @route({
    url: '/api/users',
    method: 'post',
    validateMetaInfo: [
      {
        name: 'email',
        rule: {
          type: 'string',
        },
      },
      {
        name: 'password',
        rule: {
          type: 'string',
        },
      },
    ],
  })
  public async createUser(
    email: string,
    password: string,
    phoneNumber: string,
    emailVerified?: boolean,
    displayName?: string,
    photoURL?: string
  ) {
    return await admin.auth().createUser({
      uid: email,
      email,
      password,
      phoneNumber,
      emailVerified,
      displayName,
      photoURL,
    });
  }

  @route({
    url: '/api/users/:uid',
    method: 'patch',
  })
  public async updateUser(uid: string, data: Partial<admin.auth.UserRecord>) {
    return await admin.auth().updateUser(uid, data);
  }

  @route({
    url: '/api/users/:uid',
    method: 'delete',
  })
  public async deleteUser(uid: string) {
    return await admin.auth().deleteUser(uid);
  }

  public async listAllUsers(nextPageToken?: string) {
    const listUsersResult = await admin.auth().listUsers(100, nextPageToken);
    let users = [...listUsersResult.users];
    if (listUsersResult.pageToken) {
      const remainUsers = await this.listAllUsers(listUsersResult.pageToken);
      users = users.concat(remainUsers);
    }
    return users;
  }
}
