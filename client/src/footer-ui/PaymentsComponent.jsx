const PaymentsComponent = () => {
  return (
    <div className="flex flex-col gap-4 text-white font-montserrat">
      <div>
        <p className="font-bold text-xl mb-2">Accepted Cards</p>
      </div>
      <div role="button" tabIndex={0}>
        <img
          src="https://roboclasses.com/cdn/shop/files/Untitled-design-4_300x300.png?v=1700561873"
          alt="cards-image"
          height={230}
          width={230}
        />
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0627/5982/9642/files/strem_logo_1.png?v=1705736307"
          alt="certified-image"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default PaymentsComponent;
