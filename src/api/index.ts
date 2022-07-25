import login from "./models/Login";
import PostModel from "./models/Post";
import ProductModel from './models/Product';
import ConnectionModel from "./models/Connection";
import NotificationModel from "./models/Notification";
import token from './token'
import UserModel from "./models/User";
import CustomerModel from "./models/Customer";
import VendorModel from "./models/Vendor";
import * as config from './config'

export default {
    config,
    token,
    login,
    db: {
        users: {
            all: UserModel.allUsers,
        },
        customers: new CustomerModel(),
        vendors: new VendorModel(),
        posts: new PostModel(),
        products: new ProductModel(),
        connections: new ConnectionModel(),
        notifications: new NotificationModel()
    }
}