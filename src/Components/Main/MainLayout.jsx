import React from 'react'
import ProfileComplete from './ProfileComplete';
import ProfileMenu from './ProfileMenu';
import ProfileCard from '../Card/ProfileCard';
import PaymentMethod from '../Card/PaymentMethod';
import BillingAddress from '../Card/BillingAddress';
import RemaxAbout from '../Card/RemaxAbout';
import Notification from '../Card/Notification';
import BillingTable from '../Card/BillingTable';


const MainLayout = () => {
    return (
        <div className="flex flex-row mt-9 justify-center">

            {/* COL-1 */}
            <div className="flex flex-col">
                {/* Profile container */}
                <ProfileComplete />

                {/* Profile Shortcuts */}
                <ProfileMenu />
            </div>

            {/* COL-2 */}
            <div className="flex flex-col mx-4">
                {/* Profile Row */}
                <ProfileCard />

                <div className="flex flex-row justify-center">
                    {/* Payyment method */}
                    <PaymentMethod />

                    {/* Billing Addres */}
                    <BillingAddress />
                </div>

                <BillingTable />
            </div>

            {/* COL-3 */}
            <div className="flex flex-col">
                {/* Remax */}
                <RemaxAbout />
                <Notification />
            </div>
        </div>
    )
}

export default MainLayout;