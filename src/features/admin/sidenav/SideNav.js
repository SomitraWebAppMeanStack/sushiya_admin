import { NavLink } from 'react-router-dom';


function SideNav() {
    return (
        <div >
            {/* <!-- Sidebar --> */}
            <ul  className="navbar-nav bg-gradient-primary sidebar sidebarStyle sidebar-dark accordion" id="accordionSidebar" >

                {/* <!-- Sidebar - Brand --> */}
                <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin <sup></sup></div>
                </NavLink>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <NavLink className="nav-link" to="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></NavLink>
                </li>
                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                   <NavLink className="nav-link" to="/countryCity">
                        <i className="fas fa-fw fa-globe-americas"></i>
                        <span>Country & City Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/User">
                        <i className="fas fa-fw fa-users"></i>
                        <span>User Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/Restaurant">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Restaurant Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/Driver">
                        <i className="fas fa-fw fa-motorcycle"></i>
                        <span>Delivery Boy Management</span></NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/Category">
                        <i className="fas fa-fw fa-arrows-alt"></i>
                        <span>Category Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/Order">
                        <i className="fas fa-fw fa-shopping-cart"></i>
                        <span>Orders Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/Payment">
                        <i className="fas fa-fw fa-money-bill-alt"></i>
                        <span>Payment Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-money-bill-alt"></i>
                        <span>Commission Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/Promo">
                        <i className="fas fa-fw fa-percent"></i>
                        <span>Promo Code Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Admin/Dish">
                        <i className="fas fa-fw fa-utensils"></i>
                        <span>Dish Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-star-half-alt"></i>
                        <span>Rating & Review Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-file-code"></i>
                        <span>Report Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-subway"></i>
                        <span>Fares Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-credit-card"></i>
                        <span>Support Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-bell"></i>
                        <span>Notifications Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-credit-card"></i>
                        <span>Subscription Management</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-unlock"></i>
                        <span>Sub Admin</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-cogs"></i>
                        <span>Setting</span></NavLink>
                </li>




{/* 
                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </NavLink>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <NavLink className="collapse-item" to="buttons.html">Buttons</NavLink>
                            <NavLink className="collapse-item" to="cards.html">Cards</NavLink>
                        </div>
                    </div>
                </li> */}


                {/* <!-- Divider --> */}
                {/* <hr className="sidebar-divider" /> */}

                {/* <!-- Heading --> */}
                {/* <div className="sidebar-heading">
                    Addons
                </div> */}

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                {/* <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </NavLink>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <NavLink className="collapse-item" to="login.html">Login</NavLink>
                            <NavLink className="collapse-item" to="register.html">Register</NavLink>
                            <NavLink className="collapse-item" to="forgot-password.html">Forgot Password</NavLink>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <NavLink className="collapse-item" to="404.html">404 Page</NavLink>
                            <NavLink className="collapse-item" to="blank.html">Blank Page</NavLink>
                        </div>
                    </div>
                </li> */}


                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>



            </ul>
            {/* <!-- End of Sidebar --> */}
        </div>
    )
}

export default SideNav
