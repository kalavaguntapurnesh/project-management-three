import { useAppContext } from "../AppContext"; // Import context hook

const LandlordTenants = () => {
  const { tenantDetails, landlordDetails } = useAppContext();

  return (
    <div>
      <h3>Tenant Details</h3>
      {tenantDetails ? (
        <pre>{JSON.stringify(tenantDetails, null, 2)}</pre>
      ) : (
        <p>No tenant details available.</p>
      )}

      <h3>Landlord Details</h3>
      {landlordDetails ? (
        <pre>{JSON.stringify(landlordDetails, null, 2)}</pre>
      ) : (
        <p>No landlord details available.</p>
      )}
    </div>
  );
};

export default LandlordTenants;
