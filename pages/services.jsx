import { useRouter } from "next/router";
import { Footer, Header } from "../components";

export default function Services() {
  const router = useRouter();
  return (
    <div>
      <Header active="services" />

      {/* Content */}
      <div className="w-full">
        <p className="w-full  text-center tracking-wide uppercase text-[1.2rem] text-black font-extrabold  ">
          Services
        </p>
        <div className="w-[70px] h-[4px] bg-[#d32131]  mx-auto" />

        <div className=" p-6 md:px-12 space-y-8">
          <p className="text-[0.9rem] text-gray-500 font-[300] w-[90%] mx-auto leading-6">
            At Serene PSL, we believe in nurturing a strong safety culture and
            we put our continuous efforts to provide our clients with a safe
            working environment. We carry out work place health and safety
            audit, electrical and mechanical safety audit, fire audit,
            environmental and risk management consultancy services for
            commercial buildings, manufacturing units, small, medium and large
            industrial plants and office premises. Expert Safety Auditors of
            Serene PSL carry out audits as per ‘The Code of Practice’ on
            Occupational Safety & Health ‘Indian Standard – 14489:1998, OSHAS:
            18000, EMS: 14000& NBC 2005 and other national and international
            standard applicable for particular industry.Our Audit Consultants
            have extensive experience and technical expertise that is highly
            valued across the industries.
          </p>

          {/* Services list */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-4">
            <div className="col-span-1  w-full ">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src="/fire_audit.jpg"
                  alt="fire_audit"
                  className="object-cover w-full  h-[350px]"
                />
                <div className="w-full p-4 space-y-4">
                  <h1 className="font-[Oswald] text-[1.6rem] tracking-tighter">
                    Fire Audit
                  </h1>
                  <p className="font-light text-[0.8rem]">
                    After evaluating the performance of a building, we produce a
                    report of suggestions that can bring the building to an
                    acceptable level of safety, considering the feasibility and
                    the cost of the suggested actions.Focusing on achieving fire
                    and life safety environments, property protection, and
                    compliances, we tailor our services to mitigate the
                    properties’ risks.
                  </p>
                  <button
                    onClick={() => {
                      router.push(
                        `https://wa.me/254713763057?text=Hello%2CI%20would%20like%20to%20enquire%20about%20this%20product%20%3A%20http%3A%2F%2Flocalhost%3A3000%2Fproduct%2F`
                      );
                    }}
                    className="border-none outline-none bg-red-700 text-white px-4 py-2"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1  w-full ">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src="/osh_audit.png"
                  alt="osh_audit"
                  className="object-cover w-full  h-[350px]"
                />
                <div className="w-full p-4 space-y-4">
                  <h1 className="font-[Oswald] text-[1.6rem] tracking-tighter">
                    Occupation Safety & Health Audit
                  </h1>
                  <p className="font-light text-[0.8rem]">
                    After evaluating the performance of a building, we produce a
                    report of suggestions that can bring the building to an
                    acceptable level of safety, considering the feasibility and
                    the cost of the suggested actions.Focusing on achieving fire
                    and life safety environments, property protection, and
                    compliances, we tailor our services to mitigate the
                    properties’ risks.
                  </p>
                  <button
                    onClick={() => {
                      router.push(
                        `https://wa.me/254713763057?text=Hello%2CI%20would%20like%20to%20enquire%20about%20this%20product%20%3A%20http%3A%2F%2Flocalhost%3A3000%2Fproduct%2F`
                      );
                    }}
                    className="border-none outline-none bg-red-700 text-white px-4 py-2"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1  w-full">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src="/environmental_audit.jpg"
                  alt="env_audit"
                  className="object-cover w-full  h-[350px]"
                />
                <div className="w-full p-4 space-y-4">
                  <h1 className="font-[Oswald] text-[1.6rem] tracking-tighter">
                    Environment Impact Assessment & Audit
                  </h1>
                  <p className="font-light text-[0.8rem]">
                    After evaluating the performance of a building, we produce a
                    report of suggestions that can bring the building to an
                    acceptable level of safety, considering the feasibility and
                    the cost of the suggested actions.Focusing on achieving fire
                    and life safety environments, property protection, and
                    compliances, we tailor our services to mitigate the
                    properties’ risks.
                  </p>
                  <button
                    onClick={() => {
                      router.push(
                        `https://wa.me/254713763057?text=Hello%2CI%20would%20like%20to%20enquire%20about%20this%20product%20%3A%20http%3A%2F%2Flocalhost%3A3000%2Fproduct%2F`
                      );
                    }}
                    className="border-none outline-none bg-red-700 text-white px-4 py-2"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1  w-full">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src="/sys_design.webp"
                  alt="env_audit"
                  className="object-cover w-full  h-[350px]"
                />
                <div className="w-full p-4 space-y-4">
                  <h1 className="font-[Oswald] text-[1.6rem] tracking-tighter">
                    System Design
                  </h1>
                  <p className="font-light text-[0.8rem]">
                    After evaluating the performance of a building, we produce a
                    report of suggestions that can bring the building to an
                    acceptable level of safety, considering the feasibility and
                    the cost of the suggested actions.Focusing on achieving fire
                    and life safety environments, property protection, and
                    compliances, we tailor our services to mitigate the
                    properties’ risks.
                  </p>
                  <button
                    onClick={() => {
                      router.push(
                        `https://wa.me/254713763057?text=Hello%2CI%20would%20like%20to%20enquire%20about%20this%20product%20%3A%20http%3A%2F%2Flocalhost%3A3000%2Fproduct%2F${data?.id}`
                      );
                    }}
                    className="border-none outline-none bg-red-700 text-white px-4 py-2"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <p className="w-full  text-center tracking-wide uppercase text-[1.2rem] text-black font-extrabold  ">
              Other services
            </p>
            <p className="text-gray-500 w-full text-center font-light text-[0.9rem]">
              For in-depth review of workplace safety operations
            </p>
            <div className="w-[70px] h-[4px] bg-[#d32131]  mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 px-4 space-y-8">
              {[
                {
                  title: "Health & Safety Contract management",
                  icon: null,
                  description:
                    "In an emergency situation, all employees should know the right protocol to leave the premises in and for this repeated practice is desirable.",
                },
                {
                  title: "Risk Assessment",
                  icon: null,
                  description:
                    "In an emergency situation, all employees should know the right protocol to leave the premises in and for this repeated practice is desirable.",
                },
                {
                  title: "Occupational Hygiene/safety monitoring",
                  icon: null,
                  description:
                    "In an emergency situation, all employees should know the right protocol to leave the premises in and for this repeated practice is desirable.",
                },
                {
                  title: "Fire risk assessment",
                  icon: null,
                  description:
                    "In an emergency situation, all employees should know the right protocol to leave the premises in and for this repeated practice is desirable.",
                },
                {
                  title: "Evacuation/emergency response ",
                  icon: null,
                  description:
                    "In an emergency situation, all employees should know the right protocol to leave the premises in and for this repeated practice is desirable.",
                },
                {
                  title: "Safety Conformity ",
                  icon: null,
                  description:
                    "In an emergency situation, all employees should know the right protocol to leave the premises in and for this repeated practice is desirable.",
                },
              ].map((service) => (
                <MiniService
                  key={service}
                  label={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </div>
            <div className="col-span-1">
              <img
                src="/product-2.webp"
                alt=""
                className="w-2/3 mx-auto object-cover"
              />

              <p className=" mt-6 tracking-wide uppercase text-[1rem] text-black font-extrabold  ">
                Equipment Servicing & Maintenance
              </p>

              <div className="w-[70px] h-[4px] bg-[#d32131]  mt-2" />
              <p className="text-[0.9rem] text-gray-500 font-[300] w-[90%] mt-8 leading-6">
                We offer perfect and consistent operations. We undertake
                <br />
                <br />
                &bull;Annual maintenance <br /> &bull;Systems commissioning{" "}
                <br />
                &bull;Hydrostatic testing
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const MiniService = ({ label, icon, description }) => {
  return (
    <div className="flex space-x-8">
      <img src="/favicon.ico" alt="" className="w-[60px] h-[60px]" />
      <div className="space-y-2">
        <p className="font-[Oswald] cursor-pointer font-medium text-red-700 text-[1.1rem]">
          {label}
        </p>
        <p className="w-[90%] text-[0.8rem] text-gray-500 font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="p-4 bg-white md:flex md:justify-between">
      <img
        src="/favicon.ico"
        alt="service"
        className="w-full md:w-[200px] md:h-[200px]"
      />
      <div className=" w-full pt-6 md:w-[calc(100%-250px)] space-y-6 my-auto">
        <h1 className="w-full text-[1.3rem] font-[Oswald]">
          Expert fire inspection services
        </h1>
        <p className="text-[0.8rem] text-gray-600 font-[300]">
          Fire protection system inspections and fire sprinkler inspections can
          result in expenses and lost revenue due to code violations, regulatory
          errors, or conflicts with authorities. Our expert inspectors
          understand multiple systems, local regulations, and code
          requirements.Our licensed team performs all fire protection
          inspections, from quarterly to fifty-year, and provides electronic
          documentation of results.
        </p>
      </div>
    </div>
  );
};
