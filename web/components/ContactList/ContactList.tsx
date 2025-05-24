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
      className="bg-white rounded-xl shadow p-4 aspect-square flex flex-col items-center justify-center text-center hover:cursor-pointer hover:bg-gray-50"
    >
      <img
        src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${id}`}
        // src={'/piwonia.jpg'}
        alt={`${firstName} ${lastName}`}
        className="w-20 h-20 rounded-full object-cover mb-3"
      />
      <p className="font-medium">
        {firstName} {lastName}
      </p>
    </Link>
  );
};

type ListProps = {
  contacts: Contact[];
};

const ContactList = ({ contacts }: ListProps) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full mb-5">
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
