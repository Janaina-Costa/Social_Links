/* eslint-disable react/require-default-props */
interface IProps {
  text: string;
  href?: string;
  isDisabled?: boolean;
  onClick: (link: string) => void;
}

export default function Links({
  text,
  href = '',
  isDisabled = false,
  onClick,
}: IProps) {
  const onHandleClick = (link: string) => {
    onClick(link);
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`${
        isDisabled
          ? 'opacity-60'
          : 'hover:scale-95 transition duration-500 ease-in-out'
      } w-full bg-gradient-to-r from-grad-purple to-grad-green p-4 rounded-lg cursor-pointer flex items-center justify-center `}
      onClick={() => onHandleClick(href)}
    >
      {text}
    </button>
  );
}
