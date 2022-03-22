import React from 'react';
import Footer from '../footer/Footer';
import SideNav from '../sidenav/SideNav';
import TopBar from '../topbar/TopBar';
import ProfileContent from './ProfileContent';

function ProfileManagement() {
    return (
        <>
            {/* <!-- Topbar --> */}
            <TopBar />

            {/* <!-- End of Topbar --> */}

            <div id="wrapper">

                <SideNav />

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        <ProfileContent />

                    </div>


                    {/* <!-- End of Main Content --> */}
                    <Footer />
                </div>
                {/* <!-- End of Content Wrapper --> */}
            </div>
        </>
    );
}

export default ProfileManagement;
