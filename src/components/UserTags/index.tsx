import './styles.css';

type Props = {
  fieldName: string;
  userData: string;
};

const UserTags = ({ fieldName, userData }: Props) => {
  return (
    <div className="user-form">
      <p>
        {fieldName} {userData}
      </p>
    </div>
  );
};

export default UserTags;
