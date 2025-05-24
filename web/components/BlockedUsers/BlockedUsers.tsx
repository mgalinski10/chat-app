import axios from 'axios';
import { useContacts } from '@/contexts/ContactsContext';

type User = {
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

const BlockedItem = ({ id, firstName, lastName }: ItemProps) => {
  const { fetchBlockedUsers, fetchContacts } = useContacts();

  const handleUnblock = async () => {
    try {
      await axios.post(
        'http://localhost:5000/contacts/unblock',
        { blockedId: id },
        { withCredentials: true },
      );
    } catch (error) {
      console.error('Error unblocking user:', error);
    } finally {
      await fetchContacts();
      await fetchBlockedUsers();
    }
  };
  return (
    <div className="bg-white rounded-xl shadow p-4 aspect-square flex flex-col items-center justify-center text-center  ">
      <img
        src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${id}`}
        alt={`${firstName} ${lastName}`}
        className="w-20 h-20 rounded-full object-cover mb-3"
      />
      <p className="font-medium">
        {firstName} {lastName}
      </p>
      <button
        onClick={handleUnblock}
        className="mt-2 px-3 py-1 text-sm text-red-600 bg-red-100 rounded-full hover:bg-red-200 transition hover:cursor-pointer"
      >
        Unblock
      </button>
    </div>
  );
};

type ListProps = {
  blockedUsers: User[];
};

const BlockedUsers = ({ blockedUsers }: ListProps) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full mb-5">
      {blockedUsers.map((user) => (
        <li key={user.id}>
          <BlockedItem
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
          />
        </li>
      ))}
    </ul>
  );
};

export default BlockedUsers;
