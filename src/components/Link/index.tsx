interface IProps {
  text: string;
  href: string;
}

export default function Links({ href, text }: IProps) {
  return (
    <li className="w-full bg-gradient-to-r from-grad-purple to-grad-green p-4 rounded-lg cursor-pointer flex items-center justify-center hover:scale-95 transition duration-500 ease-in-out ">
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
}
