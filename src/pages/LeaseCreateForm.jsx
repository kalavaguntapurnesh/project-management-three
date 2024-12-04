import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegEdit } from "react-icons/fa";
import { MdAddHomeWork } from "react-icons/md";
import Swal from "sweetalert2";
// import { FaRegEdit } from "react-icons/fa";
import Clauses from "./Clauses";
import Rules from "./Rules";
import Disclosures from "./Disclosures";
import Attachments from "./Attachments";
import Layout from "../components/Layout";
const LeaseCreateForm = () => {
  const { propertyID } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [landlordDetails, setLandlordDetails] = useState(null);

  const handleNavigation = () => {
    navigate(`/profile/:${propertyID}`);
  };

  const getPropertyDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getLeaseProperty",
        {
          propertyId: propertyID,
        }
      );

      if (response.data && response.data.success) {
        setProperty(response.data.data);
      } else {
        console.error("Failed to fetch property details");
      }
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };


  useEffect(() => {
    getPropertyDetails();
  }, [propertyID]);

  const getLandlordDetails = async()=>{
    try{
      const response = await axios.post("http://localhost:8080/api/v1/getLandlordDetailsInTenantDashboard",
        {
          propertyId: propertyID,
        }
      );

      if (response.data) {
        setLandlordDetails(response.data);
      } else {
        console.error("Failed to fetch landlord details");
      }
    } catch (error) {
      console.error("Error fetching landlord details:", error);
    }
  }

  useEffect(()=>{
    getLandlordDetails();
  },[propertyID]);

  console.log("landlord details : ", landlordDetails);
  const fullName = landlordDetails?.landlordDetails?.userId?.fullName;
  const email = landlordDetails?.landlordDetails?.userId?.email;
  const phonenumber = landlordDetails?.landlordDetails?.userId?.phoneNumber;
  console.log("landlord details : ", fullName);
  console.log("landlord details : ", email  );
  console.log("landlord details : ", phonenumber  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [activeItem, setActiveItem] = useState("lease term"); // Tracks the current section

  const [formData, setFormData] = useState({
    leaseTerm: {
      startDate: null,
      endDate: null,
      fullYear: false,
      monthToMonth: false,
      customDate: false,
    },
    rentDetails: {
      rent: "",
      fees: "",
      securityDeposit: "",
      moveInFee: "",
      moveOutFee: "",
      parkingFee: "",
      lateRentFee: "",
      rentDueDate: "",
    },
    options: {
      proratedRent: false,
      petPolicy: false,
      smokingPolicy: false,
      monthToMonth: false,
      requireRentersInsurance: false,
      requireOnlinePaymentSetup: false,
      petPolicyDetails: {
        deposit: false, 
        fee: false,
        monthlyCharge: false,
        maintenanceLiability: false,
        noPets: false,
        depositAmount: "", 
        oneTimeFeeAmount: "",
        monthlyChargeAmount: "",
      },
    },
    clauses: [
      { name: "Rent", text: "The Lessee shall pay to the Lessor or Lessor's authorized agent, at the address set forth above, or through Avail, or as changed by written notice to the Lessee, as rent for the Premises, parking, or otherwise the sum as stated above. Rent is due and payable on the first day of each calendar month, in advance. The timely payment of each installment of rent is deemed to be of the essence of this Lease. The failure to pay rent when due may result in the Lessor bringing an action in court to recover unpaid rent and/or possession.", editable: false },
      { name: "Jointly and Severally Liable", text: "Each Lessee is jointly and severally liable for the payment of rent and performance of all other terms of this agreement.", editable: false },
      { name: "Late Changes", text: "Rent received by Lessor later than the 5th day after the due date, as specified in Paragraph 1 above, will incur a late charge. The late charge shall be equal to . If Lessee mails rent to Lessor, the late charge will apply if the rent is received later than the 5th day of the month, regardless of the date Lessee mailed such rent payment. If a payment of rent is made by personal check which is later dishonored by the Lessee's bank, Lessee shall be assessed any bank charges incurred by Lessor as a result of such dishonored check, in addition to the rent and late charge due on the payment of rent. The Lessor, at the Lessor's sole discretion, may waive the late charges.", editable: false },
      { name: "Security Deposit", text: "Lessee has deposited with Lessor, the sum set forth above as a security deposit to be held by the Lessor in accordance with State or local law or ordinance to secure the faithful performance by the Lessee of all of the provisions contained in this lease. If Lessee performs all of the obligations as provided in this lease and pays all sums due Lessor, then Lessor, after the Lessee has surrendered possession of the Premises and delivered the keys thereto to Lessor, shall refund said deposit to Lessee, including interest as provided by law. If Lessee has failed to perform or comply with any of the provisions of the lease, then Lessor may apply all or any part of the security deposit in payment of any sums due from Lessee to Lessor, or to pay for repair of any damages caused by Lessee, Lessee's co-occupants or guests. The security deposit shall not be treated as advance payment of rent, and the Lessee shall not apply the security deposit as rent during the term of the lease unless Lessee obtains written permission from Lessor to do so.", editable: false },
      { name: "Possession", text: "If Lessor cannot deliver possession of the Premises at the commencement of the lease term, the rent shall be abated until the Premises are available for occupancy by Lessee. If Lessor does not notify Lessee that the Premises is ready for Lessee's occupancy within 10 days after the scheduled commencement date of the Term as set forth above, the Lessee may terminate this lease upon written notice to Lessor. Lessor shall not be liable to Lessee for any consequential damages to Lessee arising as a result of Lessor's inability to give Lessee possession of the Premises at the commencement of the lease term.", editable: false },
      { name: "Condition of Premises", text: "Lessee has examined the Premises prior to accepting the same and prior to the execution of this lease, and is satisfied with the physical condition thereof, including but not limited to the heating, plumbing and smoke detectors. Lessee's acceptance of possession shall constitute conclusive evidence of Lessee's receipt of the Premises in good order and repair as of the commencement of the lease term. Lessor or his agent has made no promises as to condition or repair to Lessee, unless they are expressed in this lease or a rider attached hereto signed by Lessee and Lessor or his agent, and no promises to decorate, alter or repair the Premises have been made by Lessor or his agent, unless expressed herein.", editable: false },
      { name: "Limitation of Liability", text: "Except as provided by state or local law or ordinance, Lessor shall not be liable for any damage or injury caused by the negligence or acts of other Lessees, guest, or others at the building.", editable: false },
      { name: "Lessee to Maintain", text: "Lessee shall keep the Premises and the fixtures and appliances therein in a clean and healthy condition, and in good working order, and in accordance with any and all ordinances applicable to the tenancy, at Lessee's own expense, and upon the termination of this lease, for any reason, Lessee shall return the Premises to Lessor in as good a condition of cleanliness and repair as at the commencement of this lease, reasonable wear and tear excepted. Lessee shall make all necessary repairs to the Premises whenever damage has occurred or repairs are required due to Lessee's conduct or neglect. Lessee shall replace all broken glass and fixtures and shall maintain all smoke and carbon monoxide detectors in good condition at all times, including replacing spent batteries as necessary. Upon Lessee vacating the Premises, if the Premises are not clean and in good repair, Lessor or his agent may replace the Premises in the same condition of repair and cleanliness as existed at the commencement of the lease term. Lessee agrees to pay Lessor for all expenses incurred by Lessor in replacing the Premises in that condition. Lessee shall not cause or permit any waste, misuse or neglect to occur to the water, gas, utilities or any other portion of the Premises.", editable: false },
      { name: "Use of Premises", text: "The Premises shall be occupied for residential purposes only, and only by the persons disclosed in this lease and on the Application for Lease submitted by Lessee in connection with the renting of the Premises. Lessee shall not engage in any activity, which will increase the rate of insurance on the property. Lessee shall not allow trash to accumulate in the common areas of the Premises or allow objects to be thrown from windows. Lessee shall not hang objects out of windows or place objects on windowsills or ledges, which may fall and injure persons below. Except for animals permitted under NY Civil Rights Law § 47-b, Lessee shall not keep any pet in the Premises without written permission being first obtained from Lessor. Lessee shall not use porches for cooking, sleeping or storage of furniture, bicycles or other items of personal property. In no case shall Lessee allow porches or decks to be overloaded or occupied by more people than would be reasonably safe based on the condition of such porch or deck.", editable: false },
      { name: "Appliances", text: "Lessee shall not install any air conditioning, heating or cooling equipment or dishwashers or clothes washers or dryers or other appliances in any portion of the building or Premises occupied by Lessee without first obtaining Lessor's written permission to do so. All such appliances installed by Lessee shall be maintained in good working order by Lessee and removed by Lessee at the expiration of the term of the lease. Any damage caused by appliances installed by Lessee shall be the responsibility of Lessee and Lessee shall reimburse Lessor for the cost of repair of any damage caused by such appliances.", editable: false },
      {
        name: "Disturbance",
        text: "Lessee agrees not to play televisions, radios or musical instruments or musical playback equipment in a manner which disturbs other tenants, and shall maintain the volume of such equipment at reasonable levels. In addition, Lessee agrees to limit playing of such equipment between the hours of 10:00 p.m. and 7:00 a.m. to a volume that cannot be heard by persons outside of the Premises.",
        editable: false
            },
            {
                name: "Access to Premises",
                text: "Lessee shall permit the Lessor access to the Premises at all reasonable times, subject to the notice requirements of applicable law or ordinance, to inspect the Premises and/or to make any necessary repairs, maintenance or improvements or supply necessary or agreed upon services, or to determine Lessor's compliance with the provisions of this Lease. In the event of an emergency or where repairs in the building require access to Lessee's Premises, Lessor may enter without prior notice to Lessee, without the same being considered a forcible entry by Lessor. Lessee's failure to provide such access shall be a breach of this lease, and Lessor shall be entitled to terminate this lease in the event such access is denied by Lessee.",
                editable: false
            },
            {
                name: "Sublet or Assignment",
                text: "Lessee shall not sublet the Premises or any part thereof, nor assign this lease, without obtaining Lessor's prior written permission to sublet or assign. Lessor may ask for additional information including financial information with respect to the proposed subtenant, but shall not unreasonably withhold permission and will accept a reasonable sublease as provided by ordinance.",
                editable: false
            },
            {
                name: "Holding Over",
                text: "If the Lessee remains in possession of the Premises or any part thereof after the termination of the lease by lapse of time or otherwise, then the Lessor may, at Lessor's option, consider such holding over as constituting a month-to-month tenancy, upon the terms of this lease except at double the monthly rental specified above. Lessee shall also pay to Lessor all damages sustained by Lessor resulting from Lessee's retaining possession of the Premises. In the event Lessor accepts a payment of rent for a period after the expiration of this lease in the absence of any specific written agreement, continued occupancy shall be deemed a month-to-month tenancy, on the same terms and conditions as herein provided, except for the double rent provision, to the extent permitted by state or local law or ordinance.",
                editable: false
            },
            {
                name: "Liability for Rent",
                text: "Lessee shall continue paying rent and all other charges for the Premises to the end of the term of this lease, whether or not the Premises becomes vacant by reason of abandonment, breach of the lease by Lessee, wrongful termination by Lessee or if the Lessee has been evicted for breach of this lease, to the extent said obligation for rent has not been mitigated, abated or discharged, in whole or in part, by any law or ordinance. Notwithstanding any of the provisions contained in this section, the Lessor shall make a good faith effort to re-let the Premises (but not in priority to other vacancies) and if the Premises is re-let, Lessee shall be responsible for the balance of the rent, costs, advertising costs and attorney's fees in connection therewith.",
                editable: false
            },
            {
                name: "Binding Effect",
                text: "If Lessee shall violate any covenant or provision of this lease, Lessor shall have the right to terminate this lease or Lessee's right to possession pursuant to the lease upon appropriate legal notice to Lessee. If Lessee assigns this lease, whether with or without Lessor's permission as required herein, the covenants and conditions contained in the Lease shall nonetheless be binding on the assignee as if assignee had signed the lease. Nothing contained in this paragraph shall preclude Lessor from commencing legal proceedings against any assignee of this lease who obtained possession from the party named as Lessee in this Lease without Lessor's written permission.",
                editable: false
            },
            {
                name: "Attorney's Fees",
                text: "In the event of a lawsuit arising out of the this tenancy, if the Landlord is the prevailing party, the landlord shall be awarded reasonable attorney's fees as provided for by court rules, statute or ordinance.",
                editable: false
            },
            {
                name: "Continuous Occupancy",
                text: "Lessee shall maintain continuous occupancy of the Premises, and not allow the same to remain vacant for any period in excess of twenty-one days without notifying the Lessor of such vacancy seven days in advance. Lessee shall not allow persons other than those authorized by the Lease to occupy the Premises as guests for periods exceeding seven consecutive days during the term of the Lease for any reason.",
                editable: false
            },
            {
                name: "Remedies Cumulative",
                text: "Lessor's remedies contained in this Lease are cumulative and are in addition to, and not in lieu of, any other remedies granted to Lessor pursuant to this Lease or applicable State or Local Law or Ordinance.",
                editable: false
            },
            {
                name: "Fire or Casualty",
                text: "If the Premises, building or any part thereof shall become uninhabitable as a result of fire, explosion or other casualty, Lessor and Lessee shall have all of the rights provided by state or local law or ordinance. For purposes of this paragraph, Lessor's good faith effort to obtain insurance adjustments, settlements or awards to obtain sufficient funds to perform repairs made necessary due to fire, explosion or other casualty shall be deemed diligent efforts to repair the Building within a reasonable time.",
                editable: false
            },
            {
              name: "Security Gates or Bars",
              text: "The installation by Lessee of any metal gate or bars on doors or windows is dangerous and strictly prohibited. Lessee shall immediately remove same upon notice by Lessor to Lessee to do so and Lessor shall have the right to immediately remove any such installation at Lessee's expense if Lessee shall fail to do so upon notice. Lessee hereby grants Lessor access to the leased Premises at all reasonable times for the purpose of removing such gates or bars. The cost of repairing any damage to the leased Premises caused by the installation and/or removal or such gates or bars shall be paid by Lessee upon demand by Lessor therefore, in addition to all costs of enforcement of this paragraph 22, including reasonable attorney's fees incurred by Lessor in enforcing this provision. In addition to the foregoing, the installation of such gates or bars shall constitute a breach of this lease, entitling Lessor, at Lessor's sole option, to terminate Lessee's right to possession of the Premises pursuant to this lease and commence proceedings to dispossess Lessee from the Premises.",
              editable: false
          },
          {
              name: "Mechanic's Liens",
              text: "Lessee shall not place or allow to be placed on the Premises, the building or elsewhere on the real property, any mechanic's lien or any other claim for lien for any repairs, maintenance, alterations or modifications performed by, or ordered or contradicted by, the Lessee, whether or not same were rightfully performed or ordered by the Lessee. The placement of any such lien shall constitute a breach of this lease and upon ten days' notice to cure said lien or lien claim, Lessor may terminate Lessee's tenancy or right to possession. In addition, Lessor shall have the right to satisfy and remove said lien without regard to the merits thereof and Lessee shall be responsible for the damages incurred in removing the lien, along with other damages, costs and attorney's fees incurred by Lessor in connection therewith.",
              editable: false
          },
          {
              name: "Rules and Regulations",
              text: "Lessee agrees to obey the Rules and Regulations contained in this Lease, and any attachments hereto as well as any further reasonable Rules and Regulations established by the Lessor during the pendency of this lease. The Rules and Regulations are hereby incorporated into and made a part of this lease. Failure to observe the Rules and Regulations shall be deemed to be a material breach of this lease, and in event of such breach, Lessor shall be entitled to terminate Lessee's right to possession under the Lease upon ten days' notice, and shall further be entitled to such rights and remedies as provided by applicable state or local law or ordinance.",
              editable: false
          },
          {
              name: "Subordination of Lease",
              text: "This lease is subordinate to all mortgages which may now or hereafter affect the real property of which the Premises forms a part. The recordation of this lease, or any memorandum thereof by Lessee shall constitute a material breach of this lease.",
              editable: false
          },
          {
              name: "Severability",
              text: "If any clause, phrase, provision or portion of this lease, or the application thereof to any person or circumstance, shall be determined to be an invalid or unenforceable under applicable law or ordinance, such event shall not affect, impair or render invalid or unenforceable the remainder of this lease or any other clause, phrase, provision or portion hereof, nor shall it affect the applicability of any clause, provision or portion hereof to other persons or circumstances, and the lease shall be interpreted in accordance with said ordinance.",
              editable: false
          },
          {
              name: "Utilities",
              text: "Unless otherwise agreed in writing, if the Premises is separately metered for utilities, Lessee shall pay the utility company or authorized metering agency directly for all applicable charges for gas, electricity, water and other utilities serving the Premises, including, if applicable, telephone, internet, cable, and current used for electric heating, ventilation, air conditioning, hot water, etc., as such charges become due and payable.",
              editable: false
          },
          {
              name: "Rental Payments Through Rentals",
              text: "Unless otherwise agreed in writing, if the Premises is separately metered for utilities, Lessee shall pay the utility company or authorized metering agency directly for all applicable charges for gas, electricity, water and other utilities serving the Premises, including, if applicable, telephone, internet, cable, and current used for electric heating, ventilation, air conditioning, hot water, etc., as such charges become due and payable.",
              editable: false
          },
          {
              name: "Extended Absence",
              text: "If the Premises will be unoccupied for more than twenty-one consecutive days, Lessee shall notify Lessor at least seven days in advance of such absence.",
              editable: false
          },
          {
              name: "Alterations & Improvements",
              text: "Lessee shall not alter, add, improve, or paint any portion of the Premises without the express written consent of Lessor. Lessee shall not install, remove, or replace any fixtures, equipment, or appliances without the express written consent of Lessor. And last, Lessee may not modify any landscaping without the express written consent of Lessor.",
              editable: false
          },
          {
              name: "Modification",
              text: "No modification, waiver, or amendment shall be made to this Lease, or any of its terms, without being written and signed by all parties.",
              editable: false
          },
          {
              name: "Safety Devices",
              text: "Lessee agrees to test, maintain, and repair any smoke or burglar alarms or carbon monoxide detectors at the Premises, and to replace any batteries, at Lessee’s sole expense. Lessor warrants that any such safety devices are in proper working condition at the time Lessee takes possession. Lessee releases Lessor from any and all liability, loss, cost, damage, or expense arising from or relating to any failure, defect, or deficiency of any safety device. Lessor has no obligation to install any safety devices or systems at the Building, except as required by governing law.",
              editable: false
          },
          {
            name: "Easement",
            text: "Lessor retains an easement to display tasteful “For Sale,” “For Rent,” or similar signs in any Common Areas of the Premises, or on the exterior at any time within sixty days before the expiration of this Lease.",
            editable: false
        },
        {
            name: "Renters Insurance Required",
            text: "The Lessee is required to obtain renters insurance within fourteen (14) days of the lease start date as a condition of tenancy and to provide the Lessor proof thereof. The Lessee assumes the risks of not having renters insurance and the Lessor cannot be held responsible for any damage of the Lessee's personal property.",
            editable: false
        },
        {
            name: "Event of Default",
            text: "If the Lessee defaults in the payment of rent or any part thereof, the Lessor may distrain for rent and shall have alien on the Lessee's property for all monies due to the Lessor, or if the Lessee defaults in the performance of any of the covenants or agreements herein contained, the Lessor, or its agent, at the Lessor's option, may terminate this Lease and, if abandoned or vacated, may re-enter the Premises. Non-performance of any of the Lessee's obligations shall constitute a default and forfeiture of this Lease, and the Lessor's failure to take action on account of the Lessee's default shall not constitute a waiver of said default.",
            editable: false
        },
        {
            name: "Heat and Cold and Hot Water",
            text: "The Lessor agrees to provide the Lessee with heat and cold and hot water in sufficient quantities as may be required by law or ordinance during the term of the lease. If the Premises contains separate heating and/or cold and hot water fixtures, then the Lessor's sole obligation shall be to provide the Lessee such fixtures in good operating condition at the commencement of the lease, and the Lessee shall be responsibility for the utility costs for the operation thereof.",
            editable: false
        },
        {
            name: "Anti-Discrimination",
            text: "The Premises is offered to the Lessee in compliance with all federal, state, and local fair housing, equal opportunity, and anti-discrimination laws.",
            editable: false
        },
        {
            name: "Surrender Of Possession",
            text: "Upon expiration or termination of this Lease, Lessee shall immediately vacate and surrender possession of the Premises in as good and clean order and condition as the Premises was at the beginning of the Lease Term, reasonable wear and tear excepted. Lessee shall immediately deliver all keys to Lessor or Lessor’s agent.",
            editable: false
        },
        {
            name: "Notice of Termination",
            text: "If the Lessee(s) intends to vacate the Premises at the end of the lease term, Lessee(s) must give at least sixty (60) days written notice prior to the end of this lease, or prior to the date of intent to vacate. If sixty (60) days notice of intent to vacate is not given prior to lease term or date of intent to vacate, Lessee(s) are responsible for the equivalent rent amount due for the sixty (60) days after notice is given.",
            editable: false
        },
        {
            name: "Governing Law",
            text: "This lease shall be governed by and construed in accordance with the laws of the State of New York, without regard for New York choice-of-law principles.",
            editable: false
        }
        ],
        newClauses: [],
        rules:[
              {
                text:"No additional locks or other similar devices shall be attached to any door without Lessor's written consent.",
                editable:false
              },

        ],

    });
 

  console.log(formData);
// List of menu items
const menuItems = [
    "lease term",
    "rent, deposit & fees",
    "options",
    "clauses",
    "rules",
    "disclosures",
    "attachments",
    "lessor info",
    "terms agreement",
  ];

  const handleNext = () => {
    // Validation for the current section
    if (activeItem === "lease term") {
      const { startDate, endDate, fullYear, monthToMonth, customDate } = formData.leaseTerm;
      if (!startDate || (!endDate && !fullYear && !monthToMonth && !customDate)) {
        Swal.fire({
          icon: "info",
          title: "Missing Data",
          text: "Please fill out all required fields in Lease Term.",
        });
        return;
      }
    }

    if (activeItem === "rent, deposit & fees") {
      const { rent, fees, securityDeposit, rentDueDate } = formData.rentDetails;
      if (!rent || !fees || !securityDeposit || !rentDueDate) {
        Swal.fire({
          icon: "info",
          title: "Missing Data",
          text: "Please fill out all required fields in Rent, Deposit & Fees.",
        });
        return;
      }
    }

    if (activeItem === "options") {
        const {
          proratedRent,
          petPolicy,
          smokingPolicy,
          monthToMonth,
          requireRentersInsurance,
          requireOnlinePaymentSetup,
          petPolicyDetails: { deposit, fee, monthlyCharge, maintenanceLiability, noPets }
        } = formData.options;
      
        // Example validation: Check if at least one option is selected
        if (
          !proratedRent &&
          !petPolicy &&
          !smokingPolicy &&
          !monthToMonth &&
          !requireRentersInsurance &&
          !requireOnlinePaymentSetup &&
          !deposit &&
          !fee &&
          !monthlyCharge &&
          !maintenanceLiability &&
          !noPets
        ) {
          Swal.fire({
            icon: "info",
            title: "Missing Data",
            text: "Please fill out at least one option in Options.",
          });
          return;
        }
      
    
      }
      

    // Navigate to the next section
    const currentIndex = menuItems.indexOf(activeItem);
    const nextIndex = currentIndex + 1 < menuItems.length ? currentIndex + 1 : currentIndex;
    setActiveItem(menuItems[nextIndex]);
  };



  const handleFullYearCheck = () => {
    if (formData.leaseTerm.fullYear && formData.leaseTerm.startDate) {
      const nextYear = new Date(formData.leaseTerm.startDate);
      nextYear.setFullYear(formData.leaseTerm.startDate.getFullYear() + 1);
      handleChange("leaseTerm", "endDate", nextYear);
    } else {
      handleChange("leaseTerm", "endDate", null);
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (checkbox) => {
    if (checkbox === "fullYear") {
      handleChange("leaseTerm", "fullYear", true);
      handleChange("leaseTerm", "monthToMonth", false);
      handleChange("leaseTerm", "customDate", false);
      handleFullYearCheck();
    } else if (checkbox === "monthToMonth") {
      handleChange("leaseTerm", "fullYear", false);
      handleChange("leaseTerm", "monthToMonth", true);
      handleChange("leaseTerm", "customDate", false);
      if (formData.leaseTerm.startDate) {
        const nextMonth = new Date(formData.leaseTerm.startDate);
        nextMonth.setMonth(formData.leaseTerm.startDate.getMonth() + 1);
        handleChange("leaseTerm", "endDate", nextMonth);
      }
    } else if (checkbox === "customDate") {
      handleChange("leaseTerm", "fullYear", false);
      handleChange("leaseTerm", "monthToMonth", false);
      handleChange("leaseTerm", "customDate", true);
      handleChange("leaseTerm", "endDate", null);
    }
  };


    // handling clause
  
    const handleEditClick = (index) => {
      setFormData((prev) => {
          const updatedClauses = [...prev.clauses];
          updatedClauses[index].editable = true; // Enable editing
          return { ...prev, clauses: updatedClauses };
      });
    };

    const handleSaveClick = (index) => {
      setFormData((prev) => {
          const updatedClauses = [...prev.clauses];
          updatedClauses[index].editable = false; // Disable editing
          return { ...prev, clauses: updatedClauses };
      });
    };
  
    const handleCancelClick = (index) => {
      setFormData((prev) => {
          const updatedClauses = [...prev.clauses];
          updatedClauses[index].editable = false; // Disable editing without saving
          return { ...prev, clauses: updatedClauses };
      });
    };

    const handleClauseChange = (index, value) => {
      setFormData((prev) => {
          const updatedClauses = [...prev.clauses];
          updatedClauses[index].text = value; // Update the text of the specific clause
          return { ...prev, clauses: updatedClauses };
      });
    };

    const addClause = () => {
      setFormData((prev) => ({
          ...prev,
          newClauses: [...prev.newClauses, { name: "", text: "", editable: true }],
      }));
    };

    const removeClause = (index) => {
      setFormData((prev) => {
          const updatedClauses = prev.newClauses.filter((_, i) => i !== index);
          return { ...prev, newClauses: updatedClauses };
      });
    };

    // Save Clause Function
    const saveClause = (index) => {
      const updatedNewClauses = [...formData.newClauses];
      const clauseToSave = updatedNewClauses[index];
    
      // Remove the saved clause from newClauses and add it to the fixed clauses list
      setFormData((prev) => ({
        ...prev,
        clauses: [...prev.clauses, clauseToSave], // Add saved clause to fixed clauses
        newClauses: updatedNewClauses.filter((_, i) => i !== index), // Remove saved clause from newClauses
      }));
    
      console.log("Clause saved:", clauseToSave);
    };

    // Handle New Clause Change
    const handleNewClauseChange = (index, field, value) => {
      const updatedClauses = [...formData.newClauses];
      updatedClauses[index][field] = value;
      setFormData({ ...formData, newClauses: updatedClauses });
    };

    // end of Clause
  

    // handle rules



  const handleChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

const handleOptionChange = (option) => {
  setFormData((prev) => ({
    ...prev,
    options: {
      ...prev.options,
      [option]: !prev.options[option],
    },
  }));
};
  
  const handlePetPolicyDetailChange = (key,value) => {
    setFormData((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        petPolicyDetails: {
          ...prev.options.petPolicyDetails,
          [key]: value,
        },
      },
    }));
  };

  

  const handleSubmit = () => {
    console.log("Submitting Data:", formData);
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Your data has been successfully submitted.",
    });
  };



  const renderFormContent = () => {
    switch (activeItem) {
      case "lease term":
        return (
            <div className="shadow-box p-6 border rounded-lg bg-white">
            <div className="mb-4">
              <h1 className="font-bold text-3xl text-mainColor">Lease Term</h1>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Start Date</label>
              <DatePicker
                selected={formData.leaseTerm.startDate}
                onChange={(date) => handleChange("leaseTerm", "startDate", date)}
                className="mt-2 p-2 border rounded-md"
                placeholderText="Select start date"
                required
              />
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700">End Date</label>
              <DatePicker
                selected={formData.leaseTerm.endDate}
                onChange={(date) => handleChange("leaseTerm", "endDate", date)}
                className="mt-2 p-2 border rounded-md"
                placeholderText="Select end date"
                required
                disabled={
                  formData.leaseTerm.fullYear || formData.leaseTerm.monthToMonth
                }
              />
            </div>
      
            <div className="mb-4">
              <div>
                <input
                  type="checkbox"
                  id="fullYear"
                  checked={formData.leaseTerm.fullYear}
                  onChange={() => handleCheckboxChange("fullYear")}
                />
                <label htmlFor="fullYear" className="ml-2">
                  Full Year
                </label>
              </div>
      
              <div>
                <input
                  type="checkbox"
                  id="monthToMonth"
                  checked={formData.leaseTerm.monthToMonth}
                  onChange={() => handleCheckboxChange("monthToMonth")}
                />
                <label htmlFor="monthToMonth" className="ml-2">
                  Month to Month
                </label>
              </div>
      
              <div>
                <input
                  type="checkbox"
                  id="customDate"
                  checked={formData.leaseTerm.customDate}
                  onChange={() => handleCheckboxChange("customDate")}
                />
                <label htmlFor="customDate" className="ml-2">
                  Custom Date
                </label>
              </div>
            </div>
      
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
              >
                Next
              </button>
            </div>
      
            <div className="text-center p-4 text-sm text-gray-600">
              <p>
                Your use lease tools is subject to our{" "}
                <span className="text-mainColor underline text-xl cursor-pointer ">
                  Terms of use.
                </span>{" "}
                Lease templates and their contents are not guaranteed, may not be
                suitable for your circumstances, and should be independently verified
                with your professional advisors prior to use.
              </p>
            </div>
          </div>

        );
        case "rent, deposit & fees":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Rent, Deposit & Fees</h1>
                </div>
                
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent</label>
                        <input
                            type="number"
                            value={formData.rentDetails.rent}
                            onChange={(e) => handleChange("rentDetails", "rent", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fees</label>
                        <input
                            type="number"
                            value={formData.rentDetails.fees}
                            onChange={(e) => handleChange("rentDetails", "fees", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Security Deposit</label>
                        <input
                            type="number"
                            value={formData.rentDetails.securityDeposit}
                            onChange={(e) => handleChange("rentDetails", "securityDeposit", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                     
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Move-in Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.moveInFee}
                            onChange={(e) => handleChange("rentDetails", "moveInFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Move-out Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.moveOutFee}
                            onChange={(e) => handleChange("rentDetails", "moveOutFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.parkingFee}
                            onChange={(e) => handleChange("rentDetails", "parkingFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Late Rent Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.lateRentFee}
                            onChange={(e) => handleChange("rentDetails", "lateRentFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>
                
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent Due Date</label>
                        <input
                            type="date"
                            value={formData.rentDetails.rentDueDate}
                            onChange={(e) => handleChange("rentDetails", "rentDueDate", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                </div>

                <div className="flex justify-between">
                    <button
                        onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                        className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                        Next
                    </button>
                </div>


             {/* Terms of Use */}
            <div className="text-center p-4 text-sm text-gray-600">
                <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                prior to use.
                </p>
            </div>
              </div>
            );
          case "options":
            return (
                <div className="shadow-box p-6 border rounded-lg bg-white space-y-5">
                    <div className="mb-4">
                        <h1 className="font-bold text-3xl text-mainColor">Options</h1>
                    </div>

                    <div className="flex flex-col gap-3">
                    <label htmlFor="proratedRent" className="text-lg font-medium text-gray-900 dark:text-gray-300">
                        Prorated Rent
                    </label>
                    <div className="flex gap-3 items-center ml-3">
                        <input
                        type="checkbox"
                        id="proratedRent"
                        
                        checked={formData.options.proratedRent}
                        onChange={() => handleOptionChange("proratedRent")}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="proratedRent" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                        Prorates the first month's rent
                        </label>
                    </div>

                    {/* Conditionally render the shadow box when checkbox is checked */}
                    {formData.options.proratedRent && (
                        <div className="mt-3 p-4 border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                        <div className="mb-4">
                            <label htmlFor="proratedDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Move's in
                            </label>
                            <input
                            type="date"
                            id="proratedDate"
                            value={formData.proratedDate}
                            onChange={(e) => handleChange("proratedRent", "date", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="proratedAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Prorated Rent
                            </label>
                            <input
                            type="number"
                            id="proratedAmount"
                            placeholder="$0.00"
                            value={formData.proratedAmount}
                            onChange={(e) => handleChange("proratedRent", "amount", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-col gap-4">
  <label
    htmlFor="petPolicy"
    className="text-lg font-medium text-gray-900 dark:text-gray-300"
  >
    Pet Policy
  </label>

  {/* Checkbox for Deposit */}
  <div className="flex flex-col gap-2 ml-3">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id="deposit"
        checked={formData.options.petPolicyDetails.deposit}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            options: {
              ...prev.options,
              petPolicyDetails: {
                ...prev.options.petPolicyDetails,
                deposit: !prev.options.petPolicyDetails.deposit,
              },
            },
          }))
        }
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="deposit"
        className="text-lg font-medium text-gray-500 dark:text-gray-300"
      >
        Pets are allowed, there is a deposit
      </label>
    </div>
    {formData.options.petPolicyDetails.deposit && (
      <div className="mt-2">
        <label
          htmlFor="depositAmount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Deposit Amount
        </label>
        <input
          type="number"
          id="depositAmount"
          placeholder="$0.00"
          value={formData.options.petPolicyDetails.depositAmount || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              options: {
                ...prev.options,
                petPolicyDetails: {
                  ...prev.options.petPolicyDetails,
                  depositAmount: e.target.value,
                },
              },
            }))
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    )}
  </div>

  {/* Checkbox for One-Time Fee */}
  <div className="flex flex-col gap-2 ml-3">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id="oneTimeFee"
        checked={formData.options.petPolicyDetails.oneTimeFee}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            options: {
              ...prev.options,
              petPolicyDetails: {
                ...prev.options.petPolicyDetails,
                oneTimeFee: !prev.options.petPolicyDetails.oneTimeFee,
              },
            },
          }))
        }
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="oneTimeFee"
        className="text-lg font-medium text-gray-500 dark:text-gray-300"
      >
        Pets are allowed, but there is a one-time fee
      </label>
    </div>
    {formData.options.petPolicyDetails.oneTimeFee && (
      <div className="mt-2">
        <label
          htmlFor="oneTimeFeeAmount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          One-Time Fee Amount
        </label>
        <input
          type="number"
          id="oneTimeFeeAmount"
          placeholder="$0.00"
          value={formData.options.petPolicyDetails.oneTimeFeeAmount || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              options: {
                ...prev.options,
                petPolicyDetails: {
                  ...prev.options.petPolicyDetails,
                  oneTimeFeeAmount: e.target.value,
                },
              },
            }))
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    )}
  </div>

  {/* Checkbox for Monthly Charge */}
  <div className="flex flex-col gap-2 ml-3">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id="monthlyCharge"
        placeholder="$0.00"
        checked={formData.options.petPolicyDetails.monthlyCharge}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            options: {
              ...prev.options,
              petPolicyDetails: {
                ...prev.options.petPolicyDetails,
                monthlyCharge: !prev.options.petPolicyDetails.monthlyCharge,
              },
            },
          }))
        }
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />

      <label
        htmlFor="monthlyCharge"
        className="text-lg font-medium text-gray-500 dark:text-gray-300"
      >
        Pets are allowed, but there is an additional monthly charge per pet
      </label>
    </div>
    {formData.options.petPolicyDetails.monthlyCharge && (
      <div className="mt-2">
        <label
          htmlFor="monthlyChargeAmount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Monthly Charge Amount
        </label>
        <input
          type="number"
          id="monthlyChargeAmount"
          placeholder="$0.00"
          value={formData.options.petPolicyDetails.monthlyChargeAmount || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              options: {
                ...prev.options,
                petPolicyDetails: {
                  ...prev.options.petPolicyDetails,
                  monthlyChargeAmount: e.target.value,
                },
              },
            }))
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />

      </div>
    )}

    {/* Checkbox for Maintenance Liability */}
<div className="flex flex-col gap-2 ">
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      id="maintenanceLiability"
      checked={formData.options.petPolicyDetails.maintenanceLiability}
      
      onChange={() =>
        setFormData((prevState) => ({
          ...prevState,
          options: {
            ...prevState.options,
            petPolicyDetails: {
              ...prevState.options.petPolicyDetails,
              maintenanceLiability: !prevState.options.petPolicyDetails.maintenanceLiability,
            },
          },
        }))
      }
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor="maintenanceLiability"
      className="text-lg font-medium text-gray-500 dark:text-gray-300"
    >
      Pets are allowed, and tenants are liable for additional maintenance issues caused by pets
    </label>
  </div>
</div>

{/* Checkbox for No Pets Allowed */}
<div className="flex flex-col gap-2">
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      id="noPets"
      checked={formData.options.petPolicyDetails.noPets}
      onChange={() =>
        setFormData((prevState) => ({
          ...prevState,
          options: {
            ...prevState.options,
            petPolicyDetails: {
              ...prevState.options.petPolicyDetails,
              noPets: !prevState.options.petPolicyDetails.noPets,
            },
          },
        }))
      }
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor="noPets"
      className="text-lg font-medium text-gray-500 dark:text-gray-300"
    >
      Pets are not allowed
    </label>
  </div>
</div>


  </div>
</div>


                

                    <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Smoking Policy</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                type="checkbox"
                                id="smokingPolicy"
                                checked={formData.options.smokingPolicy}
                                onChange={() => handleOptionChange("smokingPolicy")}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Smoking is not allowed in the unit
                            </label>
                        </div>                
                    </div>
                
                {/* Month-to-Month */}

                <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Month To Month</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                type="checkbox"
                                id="monthToMonth"
                                checked={formData.options.monthToMonth}
                                onChange={() => handleOptionChange("monthToMonth")}
                        
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Allow lease to become a month-to-month agreement at the end of lease term
                            </label>
                        </div>                
                    </div>

                    <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Require Renters Insurance</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                type="checkbox"
                                id="requireRentersInsurance"
                                checked={formData.options.requireRentersInsurance}
                                onChange={() => handleOptionChange("requireRentersInsurance")}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Require tenants to provide proof of renters insurance before move-in
                            </label>
                        </div>                
                    </div>


                
                    <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Require Online Payment Setup</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                 type="checkbox"
                                 id="requireOnlinePaymentSetup"
                                 checked={formData.options.requireOnlinePaymentSetup}
                                 onChange={() => handleOptionChange("requireOnlinePaymentSetup")}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Require tenants to provide proof of renters insurance before move-in
                            </label>
                        </div>                
                    </div>
              

                <div className="flex justify-between">
                        <button
                            onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Next
                        </button>
                    </div>


                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

            </div>
            );
          case "clauses":
            return (
              <div className="p-6 border rounded-lg bg-white">
              <h1 className="font-bold text-3xl mb-6">Clauses</h1>
          
              {/* Display Fixed Clauses */}
              {formData.clauses.map((clause, index) => (
                <div key={index} className="shadow-md p-4 mb-4 bg-gray-100 rounded-lg">
                  <div className="flex justify-between items-center">
                    <label className="block font-bold text-xl text-gray-700">{index + 1}. {clause.name}</label>
                    {!clause.editable && (
                      <button
                        onClick={() => handleEditClick(index)}
                        className="text-blue-500 font-semibold"
                      >
                        <span className="text-2xl"> < FaRegEdit /> </span>
                      </button>
                    )}
                  </div>
          
                  {clause.editable ? (
                    <div>
                      <textarea
                        className="w-full p-2 border-b-2 border-gray-400 outline-none focus:border-blue-500 mt-2"
                        value={clause.text}
                        onChange={(e) => handleClauseChange(index, e.target.value)}
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => handleSaveClick(index)}
                          className="bg-blue-500 text-white py-1 px-4 rounded-lg"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => handleCancelClick(index)}
                          className="bg-red-500 text-white py-1 px-4 ml-2 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-2">{clause.text}</p>
                  )}
                </div>
              ))}
          
              {/* Display Added Clauses */}
              {formData.newClauses.map((clause, index) => (
                <div key={index} className="shadow-md p-4 mb-4 bg-white rounded-lg">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-medium">Clause Name</label>
                    <button
                      className="text-red-500 font-semibold hover:text-red-700"
                      onClick={() => removeClause(index)}
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    className="w-full p-2 border-b-2 border-gray-400 outline-none focus:border-blue-500 mt-2"
                    type="text"
                    placeholder="Enter Clause Name"
                    value={clause.name}
                    onChange={(e) => handleNewClauseChange(index, "name", e.target.value)}
                  />
                  <label className="text-gray-700 font-medium mt-2">Clause Text</label>
                  <textarea
                    className="w-full p-2 border-b-2 border-gray-400 outline-none focus:border-blue-500 mt-2"
                    placeholder="Enter Clause Text"
                    rows="4"
                    value={clause.text}
                    onChange={(e) => handleNewClauseChange(index, "text", e.target.value)}
                  ></textarea>
          
                  {/* Save Clause Button */}
                  <div className="mt-4">
                    <button
                      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                      onClick={() => saveClause(index)}
                    >
                      Save Clause
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <button
                    className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600"
                    onClick={addClause}
                >
                    Add Clause
                </button>
            </div>

                   <div className="flex justify-between mt-[50px]">
                        <button
                            onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Next
                        </button>
                    </div>


                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

            </div>
          );
          case "rules":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Rules</h1>
                  
                  <Rules/>
                

                <div className="flex justify-between mt-[50px]">
                        <button
                            onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Next
                        </button>
                    </div>


                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

                </div>
               
               
              </div>
            );
          case "disclosures":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Disclosures</h1>
                </div>
                {/* Disclosures Form */}
                <Disclosures/>
                <div className="flex justify-between mt-[50px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                       Next
                    </button>    
                </div>

                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

              </div>
            );
          case "attachments":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Attachments</h1>
                  <Attachments/>

                  <div className="flex justify-between mt-[50px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                       Next
                    </button>    
                </div>

                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

                
                </div>
                {/* Attachments Form */}
              </div>
            );

          case "lessor info":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-gray-700">Your Contact Information</h1>
                  <div className="m-3 flex flex-col gap-4">
                      <div className="shadow-lg p-4 text-xl rounded-lg">If you would like to change the name, phone, or email address associated with this account, please do so from within your <span onClick={handleNavigation} className="underline text-mainColor cursor-pointer font-bold">Account Settings.</span></div>
                      <div className="flex gap-4 w-full justify-between">
                        <div className="w-1/2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name" value={fullName} readOnly class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>
                        <div className="w-1/2">
                            <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" value={email}  readOnly class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />

                            </div>           
                        </div>
                      </div> 
                      <div className="w-full">
                        <label for="phonenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="number" id="email"  value={phonenumber} readOnly class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone number" required />
                      </div>
                 </div> 

                  <div className="py-5">
                    <h1 className="font-bold text-3xl text-gray-700">Company Info</h1>
                    <div className="m-3 flex flex-col gap-4">
                        <div className="shadow-lg p-4 text-xl rounded-lg">If you prefer not to have your personal name and phone number on the lease, you can enter your company information, which will be used instead. Your personal phone is still required to help us prevent fraud.</div>
          
                        <div className="w-full">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>                      
                        <div className="w-full">
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Phone</label>
                          <input type="number" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        </div>
                    </div> 
                  </div>

                 <div className="py-5 flex flex-col gap-4">
                  <h1 className="font-bold text-3xl text-gray-700">Emergency Line (optional)</h1>
                  <div className="w-full space-y-2">
                      <label for="name" class="block mb-2 text-lg  text-gray-500 dark:text-white">Phone where tenants can reach someone in a maintenance emergency</label>
                      <input type="number" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000-000-0000" required />
                    </div>
                  </div>

                  <div className="py-5 flex flex-col gap-4">
                    <h1 className="font-bold text-3xl text-gray-700">Lessor Address (Home or Business)</h1>
                    <h1 className=" text-xl text-gray-500">A lessor address is required on all leases.</h1>
                    <div className="w-full space-y-2">
                      <label for="name" class="block mb-2 text-lg  text-gray-500 dark:text-white">Start typing the street address</label>
                      <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="start typing ..." required />
                    </div> 
                  </div>


                  <div className="flex justify-between mt-[50px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[150px] rounded-lg"
                    >
                      Save & Next
                    </button>    
                  </div>

                   {/* Terms of Use */}
                  <div className="text-center p-4 text-sm text-gray-600">
                      <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                      contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                      prior to use.
                      </p>
                  </div>

                </div>
                </div>
                {/* Lessor Info Form */}
              </div>
            );

          case "terms agreement":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4 flex flex-col shadow-lg p-4 gap-6">
                 
                  <div className="text-2xl font-semibold text-mainColor">Please agree to the following before creating your lease.</div>
                  <div className="text-xl text-gray-600">By clicking "I agree", you acknowledge that you have read, understand, have had the opportunity to consult with counsel of your choosing, 
                    and agree to the <span className="cursor-pointer text-blue-900 text-2xl font-bold" onClick={handleOpenModal}>provisions</span> stated herein.</div>
                </div>

                 {/* Modal */}
                      {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
                          <div className="bg-white shadow-lg rounded-lg relative w-1/2 max-h-[80vh] overflow-y-scroll py-20">
                            {/* Close Button */}
                            <button
                              className="absolute top-4 right-4 text-gray-600 hover:text-black p-8  text-3xl"
                              onClick={handleCloseModal}
                            >
                              ✖
                            </button>
                            
                            {/* Modal Content */}
                            <div className="p-6">
                              <p className="text-xl">
                                The law firm of Gordon & Rees Scully Mansukhani, LLP (the "Firm") has prepared example residential leases ("Forms") for
                                publication on the Rentals site. These Forms are merely to provide information and examples for self-help purposes. 
                                The Firm strives to keep the Forms accurate, current and up-to-date. However, because the law changes rapidly, 
                                the Firm cannot guarantee that all of the information on the Rentals site is completely current. The law is different from jurisdiction to jurisdiction, and may be subject to interpretation by different courts. The law is a personal matter, and no Forms like the kind published on the Rentals site can fit every circumstance. Furthermore, the Forms are not legal advice and are not guaranteed to be correct, complete or up-to-date. Therefore, if you need legal advice for your specific problem, 
                                you must consult a licensed attorney in your area. Except as part of a Firm Legal Engagement (defined below), we do not review any information you input on the Forms for legal accuracy or sufficiency, draw legal conclusions, provide opinions about your selection of forms, or apply the law to the facts of your situation. If you need legal advice for a specific problem, you should consult with a licensed attorney. Use of the Forms or any other legal information published on the Rentals site is not a substitute for legal advice from a qualified attorney licensed to practice in an appropriate jurisdiction. Communications between you, the Firm, and/or Rentals may not be protected as privilege communications under the attorney-client privilege or work product doctrine. Also, if you submit questions to the Firm or Rentals, the communications between you and the individual who answers your question may not be protected as privileged communications under the attorney-client privilege or work product doctrine. Your use of the Forms does not create an attorney-client relationship between you and Gordon & Rees Scully Mansukhani, LLP, or between you and any Gordon & Rees Scully Mansukhani, LLP employee or representative, unless you specifically enter into a Legal Services Agreement executed by an authorized partner of the Firm. Unless you are otherwise represented by an attorney, including any external attorney, you represent yourself in any legal matter you undertake through use of our Forms.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}


                    <div className="flex justify-between mt-[30px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[150px] rounded-lg"
                    >
                      I Agree
                    </button>    
                  </div>
              </div>
            );
          default:
            return <div>Select an option to begin</div>;
    }
  };

  return (
    <Layout>
  <div className="w-full h-full flex flex-col bg-gray-100 m-0">
    {/* Header */}
    <div className="bg-mainColor lg:h-[70px] h-[100px] text-white px-4 py-3 flex items-center">
      <button
        className="mr-4 text-xl"
        onClick={() => navigate(`/lease-form/${propertyID}`)}
      >
        ←
      </button>
      {property ? (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-white">
          <h2 className="text-lg sm:text-xl font-bold">
            {property.propertyType?.label}
          </h2>
          <p>{property.doorNumber}, {property.streetName}, {property.landMark}</p>
          <p>
            {property.selectedCity?.name}, {property.selectedState?.name}, {property.selectedCountry?.name}
          </p>
        </div>
      ) : (
        <p className="text-center">Loading property details...</p>
      )}
    </div>

    {/* Main Content */}
    <div className="w-full mx-auto flex flex-col sm:flex-row gap-4 p-4">
      {/* Side Menu */}
      <div className="w-full sm:w-1/4 bg-white border-r p-4">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`p-2 cursor-pointer rounded-lg ${
                activeItem === item
                  ? "bg-mainColor text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Form Content */}
      <div className="w-full sm:w-3/4 p-4 sm:p-6">{renderFormContent()}</div>
    </div>
  </div>
</Layout>

  );
};

export default LeaseCreateForm;
