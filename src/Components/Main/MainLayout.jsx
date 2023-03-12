import React from 'react'
import ProfileComplete from './ProfileComplete';
import ProfileMenu from './ProfileMenu';
import ProfileCard from '../Card/ProfileCard';
import PaymentMethod from '../BillingDetails/PaymentMethod';
import BillingAddress from '../BillingDetails/BillingAddress';
import RemaxAbout from '../Card/RemaxAbout';
import Notification from '../Card/Notification';
import BillingTable from '../BillingDetails/BillingTable';


const MainLayout = () => (
    <div className="flex flex-col sm:flex-row mt-9 items-center justify-center">

        {/* COL-1 */}
        <div className="flex flex-col sm:flex-row-reverse justify-center">


            <div className="flex flex-col items-center">
                {/* Profile container */}
                <ProfileCard />

                <div className="flex flex-col sm:flex-row items-center justify-between">
                    {/* Payment Method */}
                    <PaymentMethod />

                    {/* Billing Address */}
                    <BillingAddress />
                </div>

                <BillingTable />
            </div>
            <div className="flex flex-col my-5 sm:mx-5 items-center">
                {/* Profile Row */}
                <ProfileComplete />
                {/* Profile Shortcuts */}
                <ProfileMenu />
            </div>

        </div>


        {/* COL-3 */}
        <div className="flex flex-col">
            {/* Remax */}
            <RemaxAbout />
            <Notification />
        </div>
    </div>
)
export default MainLayout;