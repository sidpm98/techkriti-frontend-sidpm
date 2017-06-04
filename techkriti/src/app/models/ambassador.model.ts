export interface AmbassadorQuestion {
  question: string;
  answer: string;
}

export class Ambassador {
  personal: {
    name: string;
    contact: string;
    email: string;
    address: {
      house: string;
      locality: string;
      landmark: string;
      pincode: string;
    };
    whatsapp: string;
  };

  college: {
    name: string;
    city: string;
    strength: string;
    address: {
      house: string;
      locality: string;
      landmark: string;
      pincode: string;
    };
    contact: {
      director: {
        name: string;
        phone: string;
        email: string;
      };
      president: {
        name: string;
        phone: string;
        email: string;
      };
    }
  };

  miscellaneous: string[];
}
