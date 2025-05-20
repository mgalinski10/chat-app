import Link from 'next/link';

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

type ItemProps = {
  id: number;
  firstName: string;
  lastName: string;
};

const ContactListItem = ({ id, firstName, lastName }: ItemProps) => {
  return (
    <Link
      href={`/messages/${id}`}
      className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:cursor-pointer hover:bg-gray-50"
    >
      <div className="flex flex-col items-center w-full h-full">
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${id}`}
          alt={`${firstName} ${lastName}`}
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
        <p className="text-center font-medium">
          {firstName} {lastName}
        </p>
      </div>
    </Link>
  );
};

type ListProps = {
  contacts: Contact[];
};

const ContactList = ({ contacts }: ListProps) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactListItem
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
