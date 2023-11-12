import axios from 'axios';
import Link from 'next/link';

const getUsers = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/users');
  return res?.data;
};

const Foods = async () => {
  const users = await getUsers();

  return (
    <div>
      <Link href="/">
        <button className="btn btn-primary">Ke Halaman Home</button>
      </Link>

      {users?.map((user) => (
        <div key={user?.id}>{user?.name}</div>
      ))}
    </div>
  );
};

export default Foods;
