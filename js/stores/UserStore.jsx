import {USERS_GET, CREATE_USER, DELETE_USER, USER_ROLES} from '../constants/UserConstants';
import BaseStore from './BaseStore';

class UserStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._userId = 0;
    this._users = [];
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case USERS_GET:
        this._users = action.users;
        this.emitChange();
        break;
      case CREATE_USER:
        this._users.push(action.userPayload);
        this.emitChange();
        break;
      case DELETE_USER:
        this._users = this._users.filter(function(u){ return u.id != action.userId })
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get users() {
    return this._users;
  }

  get newUser(){
    return {
      login: '',
      password: '',
      password_confirmation: '',
      role: USER_ROLES[1]
    }
  }
}

export default new UserStore();
