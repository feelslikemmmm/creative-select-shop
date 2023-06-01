import { User } from 'firebase/auth';

interface UserProps {
  user: User;
}

const Users = ({ user }: UserProps) => {
  const { photoURL, displayName } = user;

  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={photoURL as string}
        alt={displayName as string}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
};

export default Users;
