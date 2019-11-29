// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportAuth from '../../../app/controller/auth';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    auth: ExportAuth;
    home: ExportHome;
  }
}
