import './styles.css';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return <button className="btn">{text}</button>;
};

export default ButtonIcon;
