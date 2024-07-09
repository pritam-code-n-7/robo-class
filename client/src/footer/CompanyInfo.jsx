

const CompanyInfo = () => {
  return (
    <div className="text-white flex flex-col gap-6 w-96 text-balance font-montserrat">
      <p className="font-bold text-xl">Company Info</p>
      <p className="font-light underline">About Us</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="font-bold">Head Office:</p>
          <p>
            ISB Edtech FZE,Business Center,Sharjah Publishing City Free Zone,
            Sharjah, United Arab Emirates
          </p>
        </div>
        <div className="flex">
          <p className="font-bold">Phone:</p>
          <a className="underline">+917003641488</a>
        </div>
        <div className="flex">
          <p className="font-bold">Whatsapp:</p>
          <a className="underline">+917003641484</a>
        </div>
        <div className="flex">
          <p className="font-bold">Email:</p>
          <a className="underline">support@roboclasses.com</a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
