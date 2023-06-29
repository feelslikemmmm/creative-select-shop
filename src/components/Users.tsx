import { UserProps } from 'src/types';

const Users = ({ user }: UserProps) => {
  const { photoURL, displayName } = user;

  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-7 h-7 md:w-10 md:h-10 rounded-full mr-2"
        src={photoURL as string}
        alt={displayName as string}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
};

export default Users;
