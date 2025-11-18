"use client"

import Image from "next/image";
import { useState } from "react";

export default function TrailerAndFifthWheelContent() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        zip: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };


    return (
        <>
            <section className="max-w-[728px] mx-auto px-4  leading-relaxed text-[#09360c]">
                {/* Intro */}
                <div className="space-y-4 mb-8">
                    <p>
                        RV extended warranties for fifth wheels and travel trailers offer protection for major mechanical systems, including suspension, brakes, plumbing, air conditioning, heating, appliances, and electrical components. Coverage extends beyond the standard manufacturer’s warranty and helps reduce unexpected repair expenses. Added benefits of extended warranty include trip interruption reimbursement, food and lodging allowances, and service call coverage. Optional features (power surge protection and commercial use coverage) offer further value. Coverage applies across the USA and Canada, and providers include roadside assistance and fast claims processing to support travel needs.
                    </p>

                    <p>
                        RV warranty plans provide flexibility through customization based on type,
                        age, and usage. Coverage options range from exclusionary policies to stated component plans,
                        with pricing influenced by vehicle condition and level of protection, ranging from $2,000 to $15,000.
                        Financing plans divide the cost into manageable payments, making warranty protection more accessible.
                        Choosing the right plan involves reviewing RV travel frequency, repair risk, and age of the unit.
                        Providers with strong customer support, broad mechanical coverage, and benefits like trip
                        reimbursement deliver greater long-term value. Selecting a warranty company with experience
                        in <strong> fifth wheel insurance, extended warranty for travel trailers,</strong> and <strong>travel trailer warranty</strong>
                        ensures specialized protection for specific RV ownership needs.
                    </p>
                </div>

                {/* SECTION 1 */}
                <h2 className="text-[32px] my-4 text-[#064517] leading-12">
                    Why is a Fifth-Wheel Extended Warranty Important for RV owners?
                </h2>
                <p className="mb-4">
                    A Fifth-Wheel Extended Warranty <strong>(travel trailer extended warranty)</strong> is important for RV owners due to the risk of expensive mechanical failures over time. An extended warranty for fifth wheels
                    <strong>(travel trailer warranty)</strong>covers heating units, refrigerators, electrical components, and transmissions. Manufacturer warranties expire within one year and exclude labor costs, making extended
                    protection more reliable for long-term use. An <strong>extended warranty for travel trailers</strong> offers more than repair coverage. Plans provide roadside assistance, towing services, and trip interruption
                    protection, which help reduce stress during breakdowns or travel delays.
                </p>

                <p className="mb-6">
                    Coverage under extended warranties applies at licensed repair facilities and mobile
                    service providers across the U.S. and Canada. Claims support teams handle approvals,
                    helping <strong>RV Owners</strong> avoid upfront repair costs and delays. Warranty plans match the
                    specific needs of the vehicle and owner. Customization options allow selection of
                    systems or appliances based on travel habits or usage. Lower pricing is available
                    when coverage is purchased early in the RV’s lifespan. A well-chosen plan provides
                    long-term value. <strong>RV extended warranty</strong> increases resale appeal by allowing transfer
                    of coverage to the next owner. Warranty plans focus on protecting against repair
                    costs and maintaining usability, unlike <strong>fifth wheel insurance</strong> , which addresses
                    damage and liability.
                </p>

                {/* section-2 */}
                <h3 className="text-[28px] mb-2">Where can I get a Quote for A Fifth-Wheel or Travel Trailer Extended Warranty?</h3>
                <p>You can get a quote for a fifth-wheel or travel trailer extended warranty from Outdoor Warranty, a provider
                    that offers specialized coverage for RV trailers and fifth-wheels. Outdoor Warranty delivers exclusionary
                    and comprehensive plans that protect key mechanical systems (chassis, axles, plumbing, Heating, Ventilation,
                    and Air Conditioning [HVAC], and appliances). Coverage extends to high-wear parts (slide-outs, appliances, and leveling systems).
                    Pricing is competitive, with adjustable deductibles to match different budgets. Roadside assistance, towing, and mobile mechanic
                    services are part of the claims support process, which works directly with licensed repair centers. Plans are transferable and
                    renewable, helping boost resale value while maintaining long-term protection. Extended warranty quotes tailored to fifth-wheels
                    or travel trailers are accessed through <strong>Outdoor Warranty,</strong> providing cost-effective and reliable service for RV owners.
                </p>


                {/* section-3  ⭐⭐⭐⭐ Elementor Section Inserted Here */}
                <section className="flex justify-center my-10">
                    <div className="text-center bg-white shadow-lg rounded-xl p-6 max-w-2xl w-full">

                        {/* Logo */}
                        <div className="mb-3 flex justify-center">
                            <Image
                                src="/assets/outdoowarranty-logo.svg"
                                alt="Outdoor Warranty"
                                width={123}
                                height={123}
                                className="object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-[26px] font-bold text-[#064517]">
                            Protect Your Fifth Wheel Adventure
                        </h2>

                        {/* Subtitle */}
                        <p className="text-[#334E68] mb-4">
                            Get a free quote and avoid costly, unexpected repairs
                        </p>

                        {/* Rating */}
                        <div className="flex justify-center items-center gap-1 mb-4 text-[#f5b301]">
                            <span className="text-[#034b16] pr-2 font-medium">
                                Rated Excellent 4.8/5
                            </span>

                            {[1, 2, 3, 4, 5].map((i) => (
                                <StarIcon key={i} className="w-5 h-5 text-[#f5b301]" />
                            ))}
                        </div>

                        {/* FORM */}
                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                onChange={handleChange}
                                value={formData.name}
                                required
                                className="w-full border rounded-md px-3 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                                value={formData.email}
                                required
                                className="w-full border rounded-md px-3 py-2"
                            />
                            <input
                                type="tel"
                                placeholder="Mobile Phone Number"
                                onChange={handleChange}
                                value={formData.phone}
                                required
                                className="w-full border rounded-md px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Zip Code"
                                onChange={handleChange}
                                value={formData.zip}
                                required
                                className="w-full border rounded-md px-3 py-2"
                            />

                            {/* Terms */}
                            <p className="text-sm text-gray-600">
                                You agree to receive automated follow-up, reminder, and
                                promotional messages. Text and data rates may apply. Reply STOP to
                                end. View our{" "}
                                <a href="#" className="underline text-green-700">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="underline text-green-700">
                                    Privacy Policy
                                </a>.
                            </p>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#064517] hover:bg-[#034b16] text-white px-4 py-3 rounded-lg font-semibold cursor-pointer"
                            >
                                Get My Free Fifth Wheel Quote
                            </button>
                        </form>

                        <hr className="my-6" />

                        {/* Bottom 3 Icons */}
                        <div className="grid grid-cols-3 text-center gap-4 text-[#334E68]">
                            <div>
                                <CheckIcon className="w-8 h-8 mx-auto text-[#064517]" />
                                <p className="text-sm mt-2">Comprehensive Coverage</p>
                            </div>

                            <div>
                                <LocationIcon className="w-8 h-8 mx-auto text-[#064517]" />
                                <p className="text-sm mt-2">Nationwide Service</p>
                            </div>

                            <div>
                                <DollarIcon className="w-8 h-8 mx-auto text-[#064517]" />
                                <p className="text-sm mt-2">Save Thousands</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-4 */}
                <h3 className="text-[28px] mb-2">Is the Fifth Wheel Insurance and RV Warranty the Same?</h3>

                <p>No, Fifth Wheel Insurance and RV Warranty are not the same. Fifth Wheel Insurance covers
                    damage from accidents, theft, vandalism, and weather-related events. It provides financial
                    protection for losses caused by external forces and is required by law. RV Warranty applies
                    to mechanical or electrical failures caused by wear and tear or aging components. It pays
                    for repairs on appliances, plumbing, or electronics, and is optional with fixed terms.
                    Insurance handles physical damage, while a warranty addresses internal breakdowns. RV
                    owners combine warranties with <strong>insurance for RVs</strong> to ensure complete protection.
                </p>

                {/* SECTION 5 */}
                <h3 className="text-[32px] mt-8 mb-2 leading-9 text-[#045c1c]">
                    What Types of Travel Trailer Extended Warranty Plans are Available?
                </h3>
                <p className="mb-3">The types of travel trailer extended warranty plans available are listed below.</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Exclusionary plans offer broad protection for mechanical systems, chassis, suspension, and critical living components (electrical, plumbing, and HVAC).</li>
                    <li>Inclusionary plans focus on air conditioning, appliances, and the water heater.</li>
                    <li>Powertrain-only plans cover essential drivetrain components (engine, transmission, and related parts).</li>
                    <li>Comprehensive service plans address common breakdown points (leveling systems, slide-outs, and specialty appliances).</li>
                    <li>Other plans offer emergency roadside assistance, towing services, and mobile mechanic access during travel.</li>
                    <li>Transferable plans allow the <strong>extended warranty for travel trailers</strong> to move to a new owner, which improves resale value.</li>
                    <li>Renewable plans support long-term ownership by extending the duration of warranty protection.</li>
                </ul>

                {/* section-6 */}
                <h3 className="text-[28px] mb-2">How does a Fifth-Wheel Exclusionary Warranty differ from a Comprehensive Warranty?</h3>
                <p className="mb-4">Fifth-Wheel Exclusionary Warranty differs from a Comprehensive Warranty by offering coverage for mechanical and electrical components in the fifth-wheel RV, except for parts listed as excluded in the contract. An exclusionary plan omits maintenance items, cosmetic components, and pre-existing conditions. RV owners who prefer an exclusionary warranty receive the highest level of protection, which results in a higher premium due to the broad scope of coverage.</p>
                <p className="mb-6">A Comprehensive Warranty for a fifth-wheel RV only covers components that are explicitly listed in the warranty agreement. The contract covers plumbing, air conditioning, suspension, and appliances. A component not named in the plan is excluded from protection. A comprehensive warranty suits owners seeking essential system coverage at a lower cost, without paying for extended protection across vehicle parts.</p>

                {/* section-7 */}
                <h3 className="text-[28px] mb-2">What does a Fifth Wheel Exclusionary Warranty Typically Cover?</h3>
                <p className="mb-6">
                    A Fifth Wheel Exclusionary Warranty covers nearly every mechanical component in the RV, offering extensive protection. Coverage includes engine and transmission systems, which handle the powertrain functions. Suspension and steering systems are protected, ensuring safe and stable towing. Heating and cooling systems (HVAC) are included for interior comfort. Plumbing systems receive coverage for mechanical failures in water lines and fixtures. Electrical systems (wiring, outlets, and control panels) are protected. Refrigeration units and appliances are included, covering costly items (fridge or microwave). Mechanical components are covered unless explicitly excluded. Brake pads, wiper blades, tires, and light bulbs are considered wear-and-tear and are not covered. Cosmetic and structural parts (paint, fabric, or body panels) are excluded. Damages from accidents, weather events, or pre-existing issues are not eligible for claims. The Fifth Wheel Exclusionary Warranty ranks among the most complete RV extended service plans, helping reduce out-of-pocket repair expenses.
                </p>

                {/* section-8 */}
                <h3 className="text-[28px] mb-2">
                    What does a Comprehensive Travel Trailer Extended Warranty Include?
                </h3>
                <p className="mb-4">
                    A comprehensive travel trailer extended warranty covers major mechanical and electrical systems beyond the manufacturer’s warranty. Coverage applies to brakes, suspension, slide-outs, leveling systems, and powertrain components (if applicable). Critical comfort systems (air conditioners, refrigerators, heating units, water heaters, and HVAC components) are protected for travel convenience.
                </p>
                <p className="mb-4">
                    Electrical systems (wiring, lighting, control panels) and plumbing systems (fresh water lines, waste water lines, water pumps) are part of the warranty coverage. Additional protection extends to propane systems, entertainment equipment, interior features, and exterior components (depending on the plan). Coverage applies to parts and labor costs for repairs. Warranties offer reimbursement for travel charges, up to a specified limit. Transferable contracts increase resale value.
                </p>
                <p className="mb-6">
                    Excluded items are routine maintenance, wear-and-tear components, cosmetic issues, environmental damage, and accident-related damage. Financial backing by regulated underwriters (insurance companies) ensures claim reliability. A comprehensive travel trailer extended warranty helps reduce repair expenses and protects vital components during ownership.
                </p>

                {/* section-9 */}
                <h3 className="text-[24px] mb-2">
                    Are Roadside Assistance and Towing Included in Fifth Wheel Extended Warranty Plans?
                </h3>
                <p className="mb-4">
                    Yes, roadside assistance and towing are included in fifth-wheel extended warranty plans. Extended warranty providers bundle roadside assistance and towing services with the standard coverage to support large RVs during unexpected breakdowns. Towing coverage applies up to a set mileage limit, helping reduce costs when transporting the unit to a repair facility.
                </p>
                <p className="mb-6">
                    Standard services involve flat tire changes, battery jump-starts, emergency fuel delivery, lockout help, and towing. Plans offer extra benefits, including trip interruption reimbursement (lodging and meals), pet boarding reimbursement, and mobile mechanic dispatch. The add-ons improve support during travel and increase value. Fifth-wheel owners benefit from <strong>Roadside Assistance</strong> by increasing safety and convenience for themselves and their fellow owners.
                </p>

                {/* section-10 */}
                <h3 className="text-[24px] mb-2">
                    Can I Use Any Repair Facility with a Travel Trailer Extended Warranty?
                </h3>
                <p className="mb-4">
                    No, you cannot use any repair facility with a travel trailer extended warranty. Coverage applies only when repairs are performed at licensed and approved service centers designated by the warranty provider. Authorized facilities ensure proper diagnostics, qualified labor, and the use of approved replacement parts.
                </p>

                <p className="mb-4">
                    Limited access to approved locations creates specific challenges. The nearest authorized repair center is sometimes located far from the breakdown site, requiring long-distance towing. Appointment availability is not consistently immediate, which delays service. Labor costs at authorized centers occasionally exceed the amount the warranty covers.
                </p>

                <p className="mb-6">
                    Fifth wheel insurance allows repairs at a licensed shop without provider-imposed restrictions. Insurance covers accident-related damage and gives RV owners greater flexibility in choosing repair facilities.
                </p>

                {/* section-11 */}
                <h3 className="text-[24px] mb-2">
                    Is a Fifth-Wheel Extended Warranty Transferable and Renewable?
                </h3>
                <p className="mb-4">
                    Yes, a fifth-wheel extended warranty is transferable and renewable. Transferability allows the warranty to be passed to a new owner when the fifth wheel is sold, increasing resale value. The new owner receives the remaining coverage period without interruption. Warranty providers tend to require a transfer fee, but the added value to the vehicle justifies the cost.
                </p>

                <p className="mb-6">
                    Renewability gives the current owner the option to extend coverage beyond the original term. Extended protection supports long-term use and keeps repair costs manageable as the RV ages. Continuous warranty coverage prevents gaps and eliminates the need to buy a new plan. Transferable and renewable terms improve the portability and resale value of the fifth-wheel RV.
                </p>


                {/* section-12 */}
                <h3 className="text-[28px] mb-2">
                    How does Emergency Technical Support and Concierge Service Work for Towable RVs?
                </h3>
                <p className="mb-4">
                    Emergency technical support and concierge service work for towable RVs by offering direct access to 24/7 technical help and travel-related assistance. RV owners contact a dedicated hotline to speak with technical experts who provide step-by-step instructions to resolve mechanical or electrical problems on-site. Further assistance includes coordinating mobile mechanics or arranging transport to an authorized repair facility when needed. Immediate guidance helps reduce downtime and maintain travel schedules.
                </p>

                <p className="mb-4">Concierge service offers support by locating nearby repair shops, scheduling service appointments, and organizing rental vehicles or lodging during breakdowns. Assistance extends to dispatching roadside services and monitoring progress until the RV reaches the designated facility. Availability remains continuous, even in remote locations.</p>

                <p className="mb-6">
                    Emergency support and concierge features lower stress during travel disruptions, reduce repair-related delays, and limit unnecessary expenses. Towable RV owners benefit from expert assistance and streamlined coordination, improving the ownership and travel experience.
                </p>


                {/* section-13 */}
                <h3 className="text-[24px] mb-2">
                    Will a Mobile Mechanic Come to Service my Travel Trailer on The Road?
                </h3>
                <p className="mb-4">
                    Yes, a mobile mechanic will come to service a travel trailer on the road. Mobile RV repair services operate by sending technicians directly to the trailer’s location (campground, rest stop, or roadside). Mobile mechanics carry essential tools and standard replacement parts to handle on-site repairs.
                </p>

                <p className="mb-6">
                    Services cover electrical systems, plumbing, appliances, and slide-outs. The mechanic arrives at the site, diagnoses the issue, and provides a precise estimate before beginning work. Repairs involving unavailable or specialized parts require ordering, which delays completion until a return visit. RV warranty providers or roadside assistance services dispatch mobile technicians when contacted. On-site service reduces the need for towing and helps restore trailer functionality without shop visits.
                </p>

                {/* section-14 */}
                <h3 className="text-[24px] mb-2">
                    How does Trip Interruption Coverage Protect Fifth Wheel Owners?
                </h3>
                <p className="mb-4">
                    Trip Interruption Coverage protects fifth-wheel owners by reimbursing specific expenses caused by a covered mechanical breakdown during travel. The warranty provider covers delays that make the fifth wheel inoperable or uninhabitable, helping the owner manage unexpected disruptions.
                </p>

                <p className="mb-6">
                    Covered expenses from the warranty provider are lodging, meals, and transportation while the fifth wheel undergoes repair. Failures involving the engine, transmission, slide-outs, or water systems qualify when they prevent safe use of the unit. Roadside issues (flat tire) activate the benefit if the problem causes a significant interruption. The warranty company offers Trip Interruption Coverage to reduce out-of-pocket costs and ensure continued comfort for the owner and passengers.
                </p>

                {/* section-15 */}
                <h3 className="text-[28px] mb-2">
                    How does Substitute Transportation Apply to Fifth Wheels During Repair?
                </h3>
                <p className="mb-4">
                    Substitute transportation applies to fifth wheels during repair by providing a way to move the trailer when the fifth wheel hitch or towing vehicle is not operational. A separate truck equipped with a working fifth wheel hitch is used to relocate the trailer to a repair facility or another location. RV transport companies offer services that handle fifth wheel trailers, using trained drivers and proper towing equipment.
                </p>

                <p className="mb-6">
                    Trailer relocation during repairs prevents delays and keeps travel schedules uninterrupted. Use of substitute transportation avoids safety risks linked to towing with a damaged or non-functional hitch. Availability of professional hauling services ensures reliable movement of the trailer during repair periods.
                </p>


                {/* SECTION 16 */}
                <h2 className="text-[32px] mt-10 leading-11 mb-2">
                    What are Common Exclusions in Travel Trailer Extended Warranty Contracts?
                </h2>
                <p className="mb-4">Common exclusions in travel trailer extended warranty contracts are listed below.</p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li><strong>Wear and Tear:</strong> Damage caused by everyday use or aging of parts (tires, brake pads, upholstery, carpeting, and soft goods).</li>
                    <li><strong>Routine Maintenance Items:</strong> Filters, fluids, belts, and consumables (spark plugs or air filters) are not part of the warranty coverage.</li>
                    <li><strong>Cosmetic Damage:</strong> Scratches, dents, fading, and non-functional flaws (cracked trim or discolored panels) are excluded.</li>
                    <li><strong>Preexisting Conditions:</strong> Issues found before the start of the warranty (water damage, rust, or faulty wiring) are not eligible for claims.</li>
                    <li><strong>Neglect or Improper Maintenance:</strong> Failures caused by poor care (skipped oil changes, missed inspections, or misused appliances) are excluded.</li>
                    <li><strong>Modifications and Alterations:</strong> Unauthorized changes (aftermarket satellite dishes, custom cabinetry, or rewired electrical systems) void related warranty claims.</li>
                    <li><strong>Improper Loading or Towing:</strong> Damage caused by unsafe towing practices (unbalanced cargo, overloaded trailers, or incorrect hitching) is not covered.</li>
                    <li><strong>Acts of Nature:</strong> Losses caused by natural events (floods, lightning, earthquakes, or falling trees) are not included.</li>
                    <li><strong>Collision, Vandalism, or Theft:</strong> Damage from external events (accidents, break-ins, graffiti, or stolen parts) falls under RV insurance, not warranty coverage.</li>
                    <li><strong>Routine Maintenance and Cleaning:</strong> Costs related to regular upkeep (tank flushing, roof sealing, interior cleaning, or exterior washing) are the owner’s responsibility.</li>
                    <li><strong>Consequential Damage:</strong> Secondary failures caused by a non-covered part (water damage from a failed water pump or electrical shorts from a faulty converter) are not covered.</li>
                </ol>


                {/* section 17 */}
                <h3 className="text-[28px] mb-2">
                    Can I Customize a Fifth-Wheel Extended Warranty to Fit My Specific RV Needs?
                </h3>
                <p className="mb-4">
                    Yes, you can customize a fifth-wheel extended warranty to fit specific RV needs. Warranty providers offer multiple plan levels (exclusionary, inclusionary, and powertrain-only coverage), allowing selection based on RV components, usage, and budget. Each plan targets different system groups to offer flexibility in protection.
                </p>

                <p className="mb-6">
                    Customization options allow adjustment of deductible amounts and coverage terms (1 to 7 years). Fifth-wheel warranty providers offer optional add-ons for appliances (refrigerators, stoves), electronics (control panels, navigation units), tire and wheel protection (road hazard damage), and roadside assistance (towing, fuel delivery, mobile repair). Tailored warranties ensure coverage aligns with the equipment and travel demands of the RV.
                </p>


                {/* section 18 */}
                <h3 className="text-[28px] mb-2 leading-9">
                    How much does a Travel Trailer Extended Warranty Typically Cost?
                </h3>
                <p className="mb-6">
                    A travel trailer extended warranty typically costs $2,000 to $3,000 for basic coverage. A mid-level plan offering broader protection ranges from $3,000 to $7,000. A high-end policy for luxury or older trailers with advanced features costs $10,000 to $15,000. Cost depends on the trailer’s age, mileage, type, and chosen coverage level. The provider’s reputation and plan structure influence the price. A direct quote from a warranty company gives the accurate cost based on specific trailer details.
                </p>

                {/* section 19 */}
                <h3 className="text-[24px] mb-2 leading-9">
                    Is Financing Available for Fifth-Wheel Extended Warranties?
                </h3>
                <p className="mb-6">
                    Yes, financing is available for fifth-wheel extended warranties. Warranty providers offer interest-free payment plans, allowing the cost to be divided into manageable monthly installments. Financing terms range from 6 to 24 months, providing flexibility based on budget needs. RV dealerships bundle the extended warranty cost with the fifth-wheel financing. Interest-free financing reduces the burden of large upfront payments while keeping long-term protection affordable. The RV Buying Guide offers additional insights for comparing warranty payment options.
                </p>


                {/* SECTION 20 */}
                <h2 className="text-[28px] mt-10 leading-9 mb-2">
                   How do I File a Claim and Get My Fifth Wheel Repaired while Traveling?
                   </h2>
                <p className="mb-4">File a claim and get your fifth wheel repaired while traveling by following the nine steps listed below.</p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li><strong>Identify the issue and check warranty coverage.</strong> Confirm if the problem with the fifth wheel is covered under the extended warranty plan.</li>
                    <li><strong>Contact the warranty provider’s claims department.</strong> Start the claims process and provide the policy number during the call.</li>
                    <li><strong>Wait for repair authorization.</strong> Allow the claims team to assess the issue and approve work through a nearby authorized repair facility.</li>
                    <li><strong>Bring the fifth wheel to an authorized repair center.</strong> Present the policy information to allow the repair shop to work directly with the warranty provider.</li>
                    <li><strong>Allow the repair shop to diagnose and estimate.</strong> Let the facility inspect the issue, create a cost estimate, and get approval before beginning repairs.</li>
                    <li><strong>Proceed with repairs after approval.</strong> Ensure the work begins only after the warranty provider authorizes it and confirms deductible requirements.</li>
                    <li><strong>Ensure final invoice submission.</strong> Confirm that the repair facility sends the completed repair invoice directly to the warranty provider for payment.</li>
                    <li><strong>Stay in communication throughout the process.</strong> Maintain updates with the repair center and the warranty provider to avoid delays.</li>
                    <li><strong>Use additional policy benefits.</strong> Take advantage of rental car coverage or trip interruption reimbursement to reduce out-of-pocket costs.</li>
                </ol>


                {/* section 21 */}
                <h3 className="text-[28px] mb-2 leading-9">
                How does a Travel Trailer Extended Warranty Affect the RV’s Resale Value?
                </h3>
                <p className="mb-6">
                A travel trailer’s extended warranty affects the RV’s resale value by increasing buyer confidence and market appeal. Transferable coverage allows the new owner to continue using the warranty, which adds a strong incentive during resale. Buyers view an active extended warranty as a sign of care and maintenance, making the unit more attractive. Extended protection reduces future repair costs for the next owner, justifying a higher selling price. Longer remaining coverage adds more value if multiple years are active. The presence of a warranty helps preserve the RV’s condition, maintaining a stronger resale position in competitive listings. An extended warranty becomes a valuable advantage when <strong>selling my RV</strong> to potential buyers.
                </p>

            </section>
        </>
    )
}

/* Icons */
function StarIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 576 512"
        >
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 512 512"
        >
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
    );
}

function LocationIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 384 512"
        >
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
        </svg>
    );
}

function DollarIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 288 512"
        >
            <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
        </svg>
    );
}
