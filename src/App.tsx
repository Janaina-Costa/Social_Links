import logo from './assets/LOGO_VOZES_FOLIA_COLOR .png';
import Image from './components/Image';
import Links from './components/Links';
import data from './data';

function App() {
  const onRedirect = (href: string) => {
    window.location.href = href;
  };
  return (
    <main
      className="bg-dark-gray max-w-full w-[54rem] max-mobile:w-[20.5rem] mx-auto my-8 rounded-lg text-color-white overflow-hidden
    "
    >
      <section className="p-6 flex flex-col justify-center items-center text-lg">
        <Image src={logo} alt="Logo marca do canal Vozes da Folia" />
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="hover:text-color-hotpink hover:brightness-200 hover:scale-125 transition duration-500 ease-in-out">
            <a href="https://www.instagram.com/vozesdafolia/">@vozesdafolia</a>
          </h1>
        </div>
        <div className="w-full max-w-full mt-8 flex flex-col gap-8 ">
          {data.map((media) => (
            <Links
              key={media.name}
              text={media.name}
              isDisabled={media.disabled}
              onClick={() => onRedirect(media.link)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
