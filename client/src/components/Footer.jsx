import { lazy, Suspense } from "react";
import Community from "../footer-ui/Community";
import CompanyInfo from "../footer-ui/CompanyInfo";
import Support from "../footer-ui/Support";
import FollowUs from "../footer-ui/FollowUs";

const LazyPaymentsComponent = lazy(() =>
  import("../footer-ui/PaymentsComponent")
);

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-green-400 h-auto absolute">
      <div className="absolute top-0 right-0 w-1/5 h-1/4 bg-white rounded-bl-full opacity-30"></div>
      <div className="flex flex-col pt-28 ">
        <div className="flex gap-6 p-16">
          <div>
            <Community />
          </div>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyPaymentsComponent />
            </Suspense>
          </div>
          <div>
            <CompanyInfo />
          </div>
          <div>
            <Support />
          </div>
        </div>
        <div className="flex left-0 p-16 mt-5">
          <FollowUs />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/4 bg-teal-200 rounded-tr-full opacity-30"></div>
    </div>
  );
};

export default Footer;
