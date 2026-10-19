import { Mail, Calendar, Phone } from "lucide-react";

const ContactCredentials = ({ iconName, credential }) => {
  return (
    <div className="flex items-center gap-3">
      {iconName === "mail" && <Mail size={16} className="text-gray-800" />}
      {iconName === "calendar" && (
        <Calendar size={16} className="text-gray-800" />
      )}
      {iconName === "phone" && <Phone size={16} className="text-gray-800" />}
      <p className="text-gray-700 font-semibold">{credential}</p>
    </div>
  );
};
export default ContactCredentials;
 