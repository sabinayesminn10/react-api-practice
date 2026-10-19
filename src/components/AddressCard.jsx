import { Globe } from "lucide-react";
import { LayoutFreeform } from "lucide-react";
import { X } from "lucide-react";
import { MapPin } from "lucide-react";
import ContactCredentials from "./ContactCredentials";

const AddressCard = ({ contact }) => {
  // console.log(contact);
  
  return (
    <div className="flex flex-col border border-blue-600 bg-white rounded-xl w-95">
      <div className="flex">
        <img
          src="/plain-soft-abstract-gradient-background-shining-colorful-illustration-in-blur-style-vector.jpg"
          alt=""
          className="w-full h-30 rounded-l-xl"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-lg font-bold">{contact.name}</h2>
        <p className="font-semibold text-gray-800">{contact.role}</p>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-800" />
          <p className=" text-gray-900">{contact.location}</p>
        </div>

        <p className="text-gray-800">{contact.description}</p>

        <div className="flex items-center gap-3">
          <ContactCredentials
            iconName="mail"
            credential={contact.email}
          />
        </div>
        <div className="flex items-center gap-3">
          <ContactCredentials iconName="calendar" credential={contact.dateOfBirth} />
        </div>
        <div className="flex items-center gap-3">
          <ContactCredentials iconName="phone" credential={contact.phone} />
        </div>
      </div>
      <div className="flex items-center justify-between p-3">
        <p className="text-sm text-gray-900">{contact.joined}</p>
        <div className="flex gap-2">
          <Globe />
          <X />
          <LayoutFreeform />
        </div>
      </div>
    </div>
  );
};
export default AddressCard;
