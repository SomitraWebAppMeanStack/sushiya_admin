import React from 'react';

import './App.css';
import './vendor/fontawesome-free/css/all.css';
import './css/sb-admin-2.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardAdmin from './features/admin/DashboardAdmin';
import CountryCityManagement from './features/admin/countryCity/CountryCityManagement';
import UserManagement from './features/admin/user/UserManagement';
import login from './features/admin/authentication/login';
import RestaurantManagement from './features/admin/restaurant/RestaurantManagement'
import CategoryManagement from './features/admin/category/CategoryManagement';
import RestroDetailManagement from './features/admin/restaurant/pages/RestroDetailManagement';
import UserMap from './features/admin/user/UserMap';
import DriverManagement from './features/admin/driver/DriverManagement';
import ProfileManagement from './features/admin/profile/ProfileManagement';
import DriverDetailManagement from './features/admin/driver/pages/DriverDetailManagement';
import DishManagement from './features/admin/dish/DishManagement';
import PromoManagement from './features/admin/promo/PromoManagement';
import PromoCodePage from './features/admin/promo/pages/PromoCodePage';
import PromotionPage from './features/admin/promo/pages/PromotionPage';
import OrderManagement from './features/admin/order/OrderManagement';
import PaymentManagement from './features/admin/payment/PaymentManagement';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          {/* For Admin Management  */}
          <Route exact path="/Admin" component={DashboardAdmin} />
          <Route exact path="/Admin/Category" component={CategoryManagement} />
          <Route exact path="/countryCity" component={CountryCityManagement} />
          <Route exact path="/Admin/User" component={UserManagement} />
          <Route exact path="/Admin/Restaurant" component={RestaurantManagement} />
          <Route exact path="/Admin/restroDetail/:id" component={RestroDetailManagement} />
          <Route exact path="/Admin/userMap" component={UserMap} />
          <Route exact path="/Admin/Driver" component={DriverManagement} />
          <Route exact path="/Admin/driverDetail/:id" component={DriverDetailManagement} />
          <Route exact path="/Admin/Profile" component={ProfileManagement} />
          <Route exact path="/Admin/Dish" component={DishManagement} />
          <Route exact path="/Admin/Promo" component={PromoManagement} />
          <Route exact path="/Admin/Promo/Code" component={PromoCodePage} />
          <Route exact path="/Admin/Promo/Promotion" component={PromotionPage} />
          <Route exact path="/Admin/Order" component={OrderManagement} />
          <Route exact path="/Admin/Payment" component={PaymentManagement} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
