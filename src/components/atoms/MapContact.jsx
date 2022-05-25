import React from "react";

const MapContact = () => {
  return (
    <div>
      <div>
        <div className="bg-dark opacity-25 p-8">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.220269889314!2d-74.0504978!3d4.6731151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84b11427c2a95e25!2seducamas!5e0!3m2!1ses-419!2sco!4v1652382437017!5m2!1ses-419!2sco"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapContact;
