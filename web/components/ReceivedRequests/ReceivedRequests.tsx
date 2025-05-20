import { useContacts } from '@/contexts/ContactsContext';
import { IoIosInformationCircleOutline } from 'react-icons/io';

interface RequestItemProps {
  id: number;
  firstName: string;
  lastName: string;
}

const RequestItem: React.FC<RequestItemProps> = ({
  id,
  firstName,
  lastName,
}) => {
  return (
    <div className="h-full w-full bg-white rounded-lg shadow flex flex-col p-4">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${id}`}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <p className="text-center">
        {firstName} {lastName}
      </p>

      <div className="mt-4 flex justify-between">
        <button className="bg-blue-800 text-white text-sm px-3 py-1 rounded hover:bg-blue-900 w-full mr-1">
          Accept
        </button>
        <button className="bg-gray-200 text-black text-sm px-3 py-1 rounded hover:bg-gray-300 w-full ml-1">
          Decline
        </button>
      </div>
    </div>
  );
};

const ReceivedRequests = () => {
  const { received } = useContacts();

  if (!received || received.length === 0) {
    return (
      <div className="w-full flex items-center justify-center space-x-2 text-gray-600">
        <IoIosInformationCircleOutline />
        <span>No available requests at the moment.</span>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full mb-5">
      {received.map((request) => (
        <li
          key={request.id}
          className="aspect-square bg-gray-100 rounded-lg shadow"
        >
          <RequestItem
            id={request.id}
            firstName={request.sentBy.firstName}
            lastName={request.sentBy.lastName}
          />
        </li>
      ))}
    </ul>
  );
};

export default ReceivedRequests;
