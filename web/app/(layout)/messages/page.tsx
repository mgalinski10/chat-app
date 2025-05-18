import { redirect } from 'next/navigation';

export default function MessagesPage() {
  // TODO: REdirect to first conversation if exists, if not, display Spinner or smth
  redirect('/messages/1');
}
