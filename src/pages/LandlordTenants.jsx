
import { useDetails } from "../AppContext";

const LandlordTenants = ({tenantdetails}) => {
  const { details } = useDetails(); 
  console.log("inside landlord tenant details:", tenantdetails);
  // console.log(details);
  // console.log(details.tenantDetails);
  // console.log(details.landlordDetails);
  return (
    <div>
      <h3>Tenant and Landlord Details</h3>
      {details.tenantDetails ? (
        <p>Tenant Name: {details.tenantDetails.name}</p>
      ) : (
        <p>No tenant details available.</p>
      )}
      {details.landlordDetails ? (
        <p>Landlord Name: {details.landlordDetails.name}</p>
      ) : (
        <p>No landlord details available.</p>
      )}
    </div>
  );
};

export default LandlordTenants;


