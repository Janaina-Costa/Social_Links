/* eslint-disable react/require-default-props */
interface IProps {
  text: string;
  href?: string;
  isDisabled?: boolean;
  onClick: (link: string) => void;
  icon: string;
}

export default function Links({
  text,
  href = '',
  isDisabled = false,
  icon,
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
        isDisabled ? 'opacity-60' : 'hover:scale-95 transition duration-500'
      } w-[40rem] max-w-full bg-gradient-to-r from-grad-purple to-grad-green text-2xl p-4
        rounded-lg cursor-pointer flex items-center justify-center
        animate-[shake_2s_cubic-bezier(.36,.07,.19,.97)_infinite_both] `}
      onClick={() => onHandleClick(href)}
    >
      <img
        src={`${icon}`}
        alt={`Imagem do logo do ${icon}`}
        className="w-6 mr-2 shadow-sm"
      />
      {text}
    </button>
  );
}
