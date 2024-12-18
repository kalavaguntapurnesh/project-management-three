import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className='w-full lg:p-28 pt-[100px]'>
        <div className='max-w-[1400px] lg:mx-auto mx-4 sm:px-6 px-4'>
            {/* title */}
            <div className='lg:flex items-center justify-between'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-blue-900 text-start'>
                    Terms of Use
                </h1>
                <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-2xl text-blue-900 text-end'>
                    Last Modified: <span className='text-lg'>December 18, 2024</span>
                </h1>
            </div>
            
            {/* terms */}

            <div className='flex flex-col p-4 mt-10'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    1. Acceptance of the Terms of Use.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                    Welcome to the website of Rentals, Inc., a Delaware Corporation, operating under the name "Rentals" ("Rentals," "we," or "us"). The following terms and conditions (the "Terms of Use") govern your access to and use of <span className='cursor-pointer underline'>www.rentals.com</span>, including any content, functionality, and services (the "Services") provided on or through <span className='cursor-pointer underline'>www.rentals.com</span> (the "Website"). We will refer to landlords and property managers of rental properties using the Service as "Managers," and tenants or potential tenants using the Service as "Tenants." Any individual using the Service or Website, including Managers and Tenants, will be referred to as a "User."
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                    Please review these Terms of Use carefully before using the Website. By using the Website or by selecting the option to accept or agree to these Terms of Use when presented, you acknowledge and agree to be bound by these Terms of Use and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms of Use or the Privacy Policy, you must not access or use the Website.
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                    This Website is available to Users who are 18 years of age or older and reside in the United States or any of its territories or possessions. By using this Website, you confirm that you are of legal age to enter into a binding agreement with Rentals and meet all eligibility requirements stated above. If you do not meet these requirements, you must not access or use the Website.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    2. Changes to the Terms of Use.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        We may periodically update and revise these Terms of Use, including changes to our fees and Services, at our sole discretion. Any updates will take effect immediately upon posting, and will apply to all subsequent access to and use of the Website. By continuing to use the Website after the revised Terms of Use are posted, you acknowledge and agree to the changes. You are encouraged to review this page periodically to stay informed of any updates, as they will be binding upon you.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    3. Description of Services.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Rentals currently offers a comprehensive, internet-based platform that enables Managers to efficiently oversee their rental properties. This includes features such as promoting available rental units, screening prospective tenants with secure credit and background checks, creating and managing customized lease agreements, handling online ACH payments for Tenant Payments with automatic receipts and reminder notices, managing the move-in/move-out checklist digitally, processing maintenance requests, and generating property management reports (including rent collected and maintenance expenses) (the "Services"). Further details about the Services are provided below. Users may choose to use some or all of the available features. RENTALS RESERVES THE RIGHT TO MODIFY, ADD, OR REMOVE THESE SERVICES.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    4. Registration Obligation and Account Security
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>4.1 User Registration.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        To access the Services, Users must provide certain registration details or other required information. It is a condition of using the Website that all information you provide is accurate, up-to-date, and complete. You agree that all information you submit to register with the Website or otherwise, including but not limited to using any interactive features, is subject to our Privacy Policy. You consent to all actions we take regarding your information as outlined in our Privacy Policy.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>4.2 Validation of Identity.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Users authorize Rentals, either directly or through third parties, to conduct any inquiries deemed necessary to verify your identity. This may involve requesting additional information, asking you to confirm ownership of your email address or financial instruments, obtaining a credit report, or cross-referencing your information with third-party databases or other sources. Nothing in this agreement shall be interpreted as requiring Rentals to verify the identity of any User on the Website, nor will Rentals be held liable for any failure to verify a User's identity.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>4.3 Account Security.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        If you are provided with, or choose, a username, password, or any other piece of information as part of our security procedures, you must keep this information confidential and not share it with any other person or entity. You also acknowledge that your account is personal to you and agree not to allow anyone else to access the Website or any of its parts using your username, password, or other security information. You agree to notify us immediately if there is any unauthorized access to or use of your username, password, or any other security breach. Exercise caution when accessing your account from public or shared computers to ensure others cannot view or record your password or other personal information. We reserve the right to disable any username, password, or other identifier, whether chosen by you or provided by us, at any time and for any reason, including but not limited to situations where we believe you have violated any part of these Terms of Use.

                        Fees and Payments. Rentals reserves the right to modify or increase the fees for access to any part of the Service or the Service as a whole at any time. All fees are payable through the User's account.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    5. Access to Platform; Background Checks; Payments; and Reporting
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>5.1 Manager Access to Platform.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        The Manager will be charged a monthly subscription fee based on the service plan selected for use of the Services. The access fee will be due on the same day each month as when the Manager initially started using the Service. Some Services may be provided to the Manager at no cost, while others may be available for a one-time fee, on a subscription basis, or under another lawful pricing structure. In all cases, the Manager is purchasing a license to access and use these features and functionalities, and nothing is being sold to the Manager. Additionally, these features and functionalities may not transfer across different operating systems or devices (e.g., mobile devices, computers, etc.). We reserve the right to modify or increase the fees for access to the Services at any time. All fees are earned by us as compensation for services rendered when charged and are non-refundable.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>5.2 Tenant Background Check.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                       The Tenant will be charged a fee for each Background Check initiated through the Service, as applicable. All fees are earned by us as compensation for services rendered when charged and are non-refundable.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>5.3 Tenant ACH Transactions.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        In certain cases, the Tenant will be charged a $2.50 convenience fee per transaction for any Tenant Payment made via ACH.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>5.4 Payment Cancellation; Refund Policy.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        For payments that you believe were made in error, Rentals may, at its sole discretion, void, rescind, or issue a credit for your Tenant Payment made through the Service, provided the payment has not yet been remitted to your Manager. If a payment dispute arises after the payment has been forwarded to your Manager, the responsibility to resolve the dispute lies between you and the Manager.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>5.5 Unauthorized Transactions.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Rentals is not responsible for any losses resulting from insufficient funds, returned checks, chargebacks, claims, reversals, WSUPP retrieval fees, recall fees, excessive return fees, early funding fees, account maintenance fees, or any other unsuccessful transactions or fees associated with such transactions. When applicable, fees for insufficient funds and returned checks will be passed on to Tenants.
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Rentals reserves the right to seek reimbursement from the Manager, who will reimburse Rentals if a fraudulent transaction, erroneous or duplicate transaction is discovered, or if Rentals receives a chargeback or reversal from any Tenant’s credit card company or bank for any reason. You acknowledge and agree that Rentals has the right to investigate any transactions for fraud. Furthermore, you agree to cooperate with any reasonable requests made by Rentals during this investigation. The Manager agrees that Rentals can obtain reimbursement by charging the Manager's account, deducting amounts from future transfers, charging the Manager's credit card or any bank account associated with the account, or through any lawful means, including using a third-party collection agency. Failure to reimburse for chargebacks or payment reversals may result in the termination of the Manager's account.
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        RENTALS IS NOT A COLLECTION AGENCY AND DOES NOT GUARANTEE PAYMENT BY THE TENANT, NOR DOES IT ASSUME ANY RISK ASSOCIATED WITH TRANSACTIONS MADE THROUGH THE SERVICE.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>5.6 Taxes and Information Reporting.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Rentals does not deduct any taxes, levies, duties, or similar governmental assessments of any kind, including but not limited to value-added, sales, use, or withholding taxes, that may be imposed by any jurisdiction (collectively referred to as "taxes"). It is the Manager's responsibility to determine which, if any, taxes apply to the payments received, and the Manager is solely responsible for assessing, collecting, reporting, and remitting the correct taxes to the appropriate authorities. Rentals is not responsible for determining whether taxes apply to rent collected or for calculating, collecting, reporting, or remitting taxes related to any rent payment.                    
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        The Manager acknowledges that Rentals may submit certain reports, including but not limited to an IRS Form 1099-K, to tax authorities regarding transactions processed by Rentals. For example, Rentals is required to report to the Internal Revenue Service the total amount of payments the Manager receives each calendar year across all of the Manager's Rentals accounts associated with the same tax identification number once the Manager exceeds $600 in aggregate payments through Rentals accounts in a calendar year (the “Reporting Threshold”). Rentals is also required to report payments to applicable state and local governments.
                    </p>
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <h1 className='lg:text-3xl text-xl text-blue-900 '>5.7 Taxpayer Identification Number and Withholding Tax.</h1>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Rentals may request that the Manager provide their tax identification number and/or a U.S. tax form, such as an IRS Form 1099-K. If the Manager fails to provide the requested information and documentation, the Manager understands and agrees that their account may be subject to limitations and federal and state withholding taxes at the applicable rates on all U.S. source income payments received. Rentals will remit all withholding taxes to the appropriate taxing authorities and cannot refund those amounts.
                    </p>
                </div>
            </div>
            
            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    6. Service Cancellation.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Users may cancel their use of the Service at any time, effective immediately, by contacting us at support@rpm.com. You will remain responsible for any outstanding payments and fees due at the time of cancellation.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    7. Prohibited Uses.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-xl text-sm text-blue-900 '>
                        In connection with the Services or your use of the Website, you agree not to:
                        <div className='ml-[25px]'>
                            <ul className="list-disc">
                                <li>Breach this agreement.</li>
                                <li>Violate any applicable federal, state, local, or international law or regulation.</li>
                                <li>Violate the legal rights (including privacy and publicity rights) of others or distribute material that could lead to civil or criminal liability or conflict with these Terms of Use or our Privacy Policy.</li>
                                <li>Disclose or distribute another User's information to a third party, or use such information for marketing purposes without the User's express consent.</li>
                                <li>Infringe on our or any third party's intellectual property rights, including copyrights, patents, trademarks, trade secrets, or rights of publicity and privacy.</li>
                                <li>Engage in defamatory, libelous, threatening, or harassing behavior.</li>
                                <li>Provide false, inaccurate, or misleading information, including Taxpayer Information.</li>
                                <li>Send or receive funds that we reasonably believe to be fraudulent.</li>
                                <li>Impersonate any person, misrepresent your identity or affiliation, or deceive others in any way.</li>
                                <li>Participate in credit card fraud, check fraud, money laundering, or assist others in such activities.</li>
                                <li>Refuse to cooperate with investigations or provide confirmation of your identity or any information you provide to us.</li>
                                <li>Use an anonymizing proxy.</li>
                                <li>Conduct your business or use the Services in a way that results in complaints, disputes, claims, reversals, chargebacks, fees, fines, penalties, or liability to Rentals, other Users, third parties, or you.</li>
                                <li>Send unsolicited emails to Users or use the Services for sending unsolicited emails to third parties.</li>
                                <li>Take actions that impose an unreasonable or disproportionately large load on our infrastructure.</li>
                                <li>Facilitate viruses, Trojan horses, worms, or other harmful computer programs that may damage, interfere with, intercept, or expropriate systems, data, or information.</li>
                                <li>Use robots, spiders, or other automatic devices or manual processes to monitor or copy our Website without prior written permission.</li>
                                <li>Use any device, software, or routine to bypass our robot exclusion headers or interfere with the Website or Services.</li>
                                <li>Take any action that may cause us to lose services from our internet service providers, payment processors, or other suppliers.</li>
                            </ul>
                        </div>
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    8. Reliance on Information Posted.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Users acknowledge that Rentals does not verify the identity or accuracy of any User or any information provided by the User on the Services or Website. Any other information presented on or through the Website, including, but not limited to material published on our blog, information in Rent Roll Reports, or details in Cash Flow Reports, is made available solely for general informational purposes. We do not guarantee the accuracy, completeness, or usefulness of the User information or any other content. Any reliance you place on such information is entirely at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    9. Intellectual Property Rights.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        The Website, along with all its content, features, and functionality (including, but not limited to, all information, software, text, images, audio, video, and the design, selection, and arrangement of these elements), is owned by Rentals, its licensors, or other content providers, and is protected by copyright, trademark, patent, trade secret, and other intellectual property laws, both in the United States and internationally.
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        These Terms of Use grant you limited rights to use the Website for the purposes described in these Terms. You may not reproduce, distribute, modify, create derivative works from, publicly display, perform, republish, download, store, or transmit any materials from the Website except as specified below:
                    </p>
                    <div className='ml-[25px] text-blue-900'>
                        <ul className="list-disc">
                            <li>Your computer may temporarily store copies of materials incidentally as you access and view them.</li>
                            <li>You may store files that are automatically cached by your Web browser to enhance display performance.</li>
                            <li>You may print one copy of a reasonable number of pages from the Website for personal, non-commercial use, but not for further reproduction, publication, or distribution.</li>
                        </ul>
                    </div>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        You must not:
                        <div className='ml-[25px]'>
                            <ul className="list-disc">
                                <li>Modify copies of any materials from the Website.</li>
                                <li>Use any images, photographs, videos, or audio separately from the accompanying text.</li>
                                <li>Remove or alter any copyright, trademark, or other proprietary notices from copies of materials from the Website.</li>                   
                            </ul>
                        </div>
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        If you wish to make any use of material on the Website other than that set out in this section, please address your request to: support@avail.co.
                        If you print, copy, modify, download or otherwise use or provide any other person with access to any part of the Website in breach of the Terms of Use, your right to use the Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by Avail. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark and other laws.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    10. Trademarks.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        The name "Rentals," the company logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Rentals or its affiliates or licensors. You may not use these marks without the prior written consent of Rentals. All other names, logos, product and service names, designs, and slogans displayed on this Website are the trademarks of their respective owners.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    11. Copyright Infringement.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        We take claims of copyright infringement seriously and will respond to notices of alleged copyright infringement that comply with applicable law. If you believe any materials accessible on or from the Services infringe your copyright, you may request removal of those materials (or access to them) by submitting written notification to our Copyright Agent (designated below) in accordance with the Digital Millennium Copyright Act (DMCA), specifically under 17 U.S.C. § 512.
                        The written notice (the "DMCA Notice") must include the following information:
                        <div className='ml-[25px]'>
                            <ul className="list-disc">
                                <li>Identification of the copyrighted work: A description of the copyrighted work you believe has been infringed.</li>
                                <li>Identification of the infringing material: A description of the material that is claimed to be infringing, and information that will help us locate it (e.g., URLs or other specific details).</li>
                                <li>Contact Information: Your name, address, phone number, and email address, so we can contact you.</li>    
                                <li>Statement of good faith belief: A statement that you believe in good faith that the material is not authorized by the copyright owner, its agent, or the law.</li>
                                <li>Statement of good faith belief: A statement that you believe in good faith that the material is not authorized by the copyright owner, its agent, or the law.                                </li>
                                <li>Statement of accuracy: A statement that the information provided in the notice is accurate, and under penalty of perjury, that you are the copyright owner or authorized to act on behalf of the owner.                                </li>
                                <li>Signature: Your physical or electronic signature.</li>
                                <li>Please send the DMCA Notice to our Copyright Agent at the following address:</li>
                                <li>[Insert Copyright Agent Contact Information for Georgia, U.S.]</li>               
                            </ul>
                        </div>
                        Once we receive the DMCA Notice, we will take appropriate action in accordance with the DMCA, which may include removing or disabling access to the infringing content.                   
                     </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    12. Privacy Statement.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Protecting your privacy is a priority for us. Please review our <span className='font-bold cursor-pointer underline'>Privacy Policy</span> to understand our commitment to safeguarding your privacy, as well as how we use and disclose your information.
                    </p>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        If you receive information about another User through the Services, you are required to keep that information confidential and use it solely in connection with the Services. You are not permitted to disclose or distribute a User's information to third parties or use it for marketing purposes unless you have received the User's explicit consent to do so.
                    </p>
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    13. Links from the Website.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        The Website may contain links to other websites and resources provided by third parties, including third-party service providers that facilitate certain aspects of the Services. We have no control over the content of these sites or resources, and we accept no responsibility for them or for any loss or damage that may result from your use of them. If you choose to access any third-party websites linked from this Website, you do so at your own risk and are subject to the terms and conditions of use of those websites.
                    </p>                
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    14. Geographic Restrictions.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        The owner of the Website is based in the state of Illinois, United States. We provide this Website for use exclusively by individuals located within the United States. We make no representations that the Website or any of its content is accessible or suitable for use outside of the United States. Access to the Website may not be legal for certain individuals or in certain countries. If you access the Website from outside the United States, you do so at your own risk and are responsible for ensuring compliance with local laws.
                    </p>                
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    15. Disclaimer of Warranties.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. NEITHER RENTALS NOR ANY PERSON ASSOCIATED WITH RENTALS MAKES ANY WARRANTY OR REPRESENTATION REGARDING THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE.

                        WITHOUT LIMITING THE FOREGOING, NEITHER RENTALS NOR ANYONE ASSOCIATED WITH RENTALS REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.

                        RENTALS HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.

                        THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                    </p>                
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    16. Limitation on Liability.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        IN NO EVENT WILL RENTALS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES. THIS INCLUDES ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
                        THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.                  
                    </p>                
                </div>
            </div>

            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    17. Governing Law and Agreement to Arbitrate.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        All matters relating to the Website, these Terms of Use, and any dispute or claim arising therefrom or related thereto (including non-contractual disputes or claims) shall be governed by and construed in accordance with the internal laws of the State of Illinois, without giving effect to any choice or conflict of law provisions or rules (whether of the State of Illinois or any other jurisdiction).
                    </p>  

                    <p className='lg:text-lg text-sm text-blue-900 '>
                        YOU AGREE THAT ANY AND ALL DISPUTES OR CLAIMS BETWEEN YOU AND US SHALL BE RESOLVED EXCLUSIVELY THROUGH FINAL AND BINDING ARBITRATION, RATHER THAN IN COURT, EXCEPT THAT YOU MAY ASSERT CLAIMS IN SMALL CLAIMS COURT IF YOUR CLAIMS QUALIFY. THE FEDERAL ARBITRATION ACT WILL GOVERN THE INTERPRETATION AND ENFORCEMENT OF THIS SECTION 18. THE ARBITRABILITY OF ANY CLAIM OR DISPUTE SHALL BE DECIDED SOLELY BY AN ARBITRATOR. YOU AGREE THAT YOU AND WE MAY ONLY BRING CLAIMS AGAINST EACH OTHER ON AN INDIVIDUAL BASIS, AND NOT AS PART OF A CLASS ACTION OR REPRESENTATIVE ACTION OR PROCEEDING. UNLESS BOTH YOU AND WE AGREE OTHERWISE, THE ARBITRATOR CANNOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON'S CLAIMS AND CANNOT PRESIDE OVER A CONSOLIDATED, REPRESENTATIVE, OR CLASS PROCEEDING. FURTHER, THE ARBITRATOR CAN ONLY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF, AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF FOR THAT PARTY'S INDIVIDUAL CLAIM(S).
                        THE ARBITRATION WILL BE CONDUCTED BY THE AMERICAN ARBITRATION ASSOCIATION ("AAA") UNDER ITS RULES AND PROCEDURES, AS MODIFIED BY THIS SECTION 18. THE AAA'S RULES ARE AVAILABLE AT WWW.ADR.ORG, AND A FORM FOR INITIATING ARBITRATION PROCEEDINGS IS AVAILABLE ON THE AAA'S WEBSITE AT HTTP://WWW.ADR.ORG. THE ARBITRATION WILL BE HELD IN COOK COUNTY, ILLINOIS, OR AT ANOTHER MUTUALLY AGREED UPON LOCATION. IF THE VALUE OF THE RELIEF SOUGHT IS $10,000 OR LESS, EITHER YOU OR WE MAY ELECT TO HAVE THE ARBITRATION CONDUCTED BY TELEPHONE OR BASED SOLELY ON WRITTEN SUBMISSIONS, WHICH ELECTION SHALL BE BINDING ON BOTH PARTIES, SUBJECT TO THE ARBITRATOR'S DISCRETION TO REQUIRE AN IN-PERSON HEARING IF NECESSARY. ATTENDANCE AT AN IN-PERSON HEARING MAY BE MADE BY TELEPHONE, UNLESS THE ARBITRATOR REQUIRES OTHERWISE.
                        THE ARBITRATOR'S AWARD WILL BE FINAL AND BINDING, AND JUDGMENT ON THE AWARD MAY BE ENTERED IN ANY COURT HAVING JURISDICTION. PAYMENT OF ALL FILING, ADMINISTRATION, AND ARBITRATOR FEES WILL BE GOVERNED BY THE AAA'S RULES, UNLESS OTHERWISE STATED IN THIS SECTION 18. IF A COURT DECIDES ANY PART OF THIS SECTION 18 IS INVALID OR UNENFORCEABLE, THE REMAINING PARTS WILL STILL APPLY.
                    </p>              
                </div>
            </div>
            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    18. Entire Agreement.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        The Terms of Use and our Privacy Policy constitute the complete and exclusive agreement between you and Rentals, Inc., doing business as Avail, with respect to the Website. These documents supersede all prior and contemporaneous understandings, agreements, representations, and warranties, whether written or oral, relating to the Website.
                    </p>                
                </div>
            </div>
            <div className='flex flex-col p-4 mt-5'>
                <div className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-blue-900 font-bold text-start'>
                    19. Your Comments and Concerns.
                </div>
                <div className='mt-5 flex flex-col gap-4 ml-10'>
                    <p className='lg:text-lg text-sm text-blue-900 '>
                        Any feedback, comments, requests for technical support, or other communications related to the Website should be directed to support@rentals.com 
                    </p>                
                </div>
            </div>

        </div>
    </div>

  )
}

export default TermsAndConditions