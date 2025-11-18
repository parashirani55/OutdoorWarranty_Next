import Image from "next/image";
import Link from "next/link";

export default function RvRoadsideAssistanceHero(){
    return(
        <>
        <section className="bg-white flex justify-center items-center">
      <div className="container max-w-[1166px] px-4 py-12">
        <div className="rounded-2xl shadow-lg overflow-hidden">
         
          {/* layout: content (left) | image (right) on lg */}
          <div className="flex flex-col lg:flex-row items-center">
           
            {/* CONTENT (LEFT) */}
            <div className="w-full lg:w-1/2 p-6 md:p-10 flex justify-center items-center order-2 lg:order-1">
              <div className="w-full max-w-xl">
                <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold mb-2 text-[#064517] leading-tight">
                  24/7 RV Roadside Assistance
                </h1>

                <p className="text-[15px] sm:text-[16px] text-[#334E68] font-medium mb-6">
                  Your safety net on the open road. Get help anywhere, anytime in the US &amp; Canada.
                </p>

                {/* GRID OF BENEFITS (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <Benefit
                    icon={TowingIcon}
                    title="Unlimited Towing"
                    desc="to the nearest qualified repair facility."
                  />
                  <Benefit
                    icon={PlusIcon}
                    title="Flat Tire Service"
                    desc="to install your spare when you need it most."
                  />
                  <Benefit
                    icon={TruckIcon}
                    title="Battery Jump-Start"
                    desc="to get you back on the road quickly."
                  />
                  <Benefit
                    icon={BoxIcon}
                    title="Emergency Fuel Delivery"
                    desc="to get you to the next service station."
                  />
                  <Benefit
                    icon={LockIcon}
                    title="Lockout & Key Service"
                    desc="if you're locked out of your RV."
                  />
                  <Benefit
                    icon={MechanicIcon}
                    title="Mobile Mechanic"
                    desc="dispatch for minor on-site repairs."
                  />
                </div>

                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-block bg-[#064517] hover:bg-[#034b16] text-white font-semibold px-7 sm:px-9 py-3 sm:py-4 rounded-lg transition text-[16px] sm:text-[17px]"
                  >
                    Get My Personalized Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* IMAGE (RIGHT) */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative w-full h-[300px] sm:h-[420px] md:h-[615px]">
                <Image
                  src="/RV_Roadside Assistance_img/RV-Roadside-Assistance.jpeg"
                  alt="RV Roadside Assistance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-bottom-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

/* -------------------------
   Benefit small component
------------------------- */
function Benefit({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.FC<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">
        <Icon className="w-8 h-8 text-[#045c1c]" />
      </div>
      <div>
        <p className="text-[#064517] font-semibold">{title}</p>
        <p className="text-[#334e68] text-sm">{desc}</p>
      </div>
    </div>
  );
}

/* ---------------------------------
   SVG ICONS (from your Elementor HTML)
   — kept shapes/paths exactly as provided
---------------------------------- */

function TowingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-48 96H96v128h416V192z"></path>
    </svg>
  );
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"></path>
      <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z"></path>
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
    </svg>
  );
}

function MechanicIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M241.406 21l-15.22 34.75c-7.864.478-15.703 1.472-23.467 2.97l-23.282-30.064-25.094 8.532-.125 38.25c-10.63 5.464-20.817 12.07-30.44 19.78L88.313 79.25 70.156 98.563 88.312 133c-5.852 8.346-10.925 17.072-15.218 26.094l-38.938 1.062-7.906 25.28 31.438 23.158c-1.505 9.38-2.24 18.858-2.282 28.344L20.5 254.625l3.656 26.25 38.313 7.5c2.284 7.982 5.107 15.826 8.5 23.5L45.72 343.22l14.093 22.436 39.25-9.187c2.47 2.895 5.037 5.757 7.718 8.53 5.643 5.835 11.565 11.206 17.72 16.125l-7.625 39.313 22.938 13.25 29.968-26.094c8.606 3.462 17.435 6.23 26.407 8.312l9.782 38.406 26.405 2.157 15.875-36.22c10.97-.66 21.904-2.3 32.656-4.938l25.22 29.22 24.593-9.844-.72-14.813-57.406-43.53c-16.712 4.225-34.042 5.356-51.063 3.436-31.754-3.58-62.27-17.92-86.218-42.686-54.738-56.614-53.173-146.67 3.438-201.406 27.42-26.513 62.69-39.963 98-40.344 37.59-.406 75.214 13.996 103.438 43.187 45.935 47.512 52.196 118.985 19.562 173.095l31.97 24.25c3.997-6.28 7.594-12.75 10.75-19.375l38.655-1.063 7.906-25.28-31.217-23c1.513-9.457 2.262-19.035 2.28-28.594l34.688-17.625-3.655-26.25-38.28-7.5c-3.196-10.993-7.444-21.762-12.75-32.125l22.81-31.594-15.25-21.657-37.56 10.906c-.472-.5-.93-1.007-1.408-1.5-5.998-6.205-12.33-11.89-18.937-17.064l7.188-37.125L334 43.78l-28.5 24.814c-9.226-3.713-18.702-6.603-28.313-8.75l-9.343-36.688L241.406 21zM183.25 174.5c-10.344.118-20.597 2.658-30 7.28l45.22 34.314c13.676 10.376 17.555 30.095 7.06 43.937-10.498 13.85-30.656 15.932-44.53 5.408l-45.188-34.282c-4.627 24.793 4.135 51.063 25.594 67.344 19.245 14.597 43.944 17.33 65.22 9.688l4.78-1.72 4.03 3.063 135.19 102.564 4.03 3.062-.344 5.063c-1.637 22.55 7.59 45.61 26.844 60.217 21.46 16.28 49.145 17.63 71.78 6.5l-45.186-34.28c-13.874-10.526-17.282-30.506-6.78-44.344 10.5-13.84 30.537-15.405 44.217-5.032l45.188 34.283c4.616-24.784-4.11-51.067-25.563-67.344-19.313-14.658-43.817-17.562-64.968-10.033l-4.75 1.688-4.03-3.063-135.19-102.562-4.03-3.063.344-5.03c1.55-22.387-7.85-45.194-27.157-59.845-12.544-9.516-27.222-13.978-41.78-13.812zm43.563 90.25l163.875 124.344L379.406 404 215.5 279.625l11.313-14.875z"></path>
    </svg>
  );
}