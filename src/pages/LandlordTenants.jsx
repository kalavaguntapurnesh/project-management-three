import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const LandlordTenants = () => {
  // const [tenantDetails, setTenantDetails] = useState(null);
  // const [landlordDetails, setLandlordDetails] = useState(null);

  // useEffect(() => {
    // Fetch the data from localStorage
    // const storedTenantDetails = localStorage.getItem('tenantDetails');
    // const storedLandlordDetails = localStorage.getItem('landlordDetails');

    // console.log(storedLandlordDetails);
    // console.log(storedTenantDetails);
    // Check if data exists in localStorage before parsing

    const tenantDetails = useSelector((state) => state.tenantLandlord.tenantDetails);
    const landlordDetails = useSelector((state) => state.tenantLandlord.landlordDetails);
  
    if (!tenantDetails || !landlordDetails) return <div>Loading...</div>;

    console.log(tenantDetails);
    console.log(landlordDetails);

  return (
    <div>
      <h3>Tenant and Landlord Details</h3>
      <div>
        <p>Tenant Name: {tenantDetails.fullName}</p>
        <p>Landlord Name: {landlordDetails.fullName}</p>
      </div>
    </div>
  );
};

export default LandlordTenants;
