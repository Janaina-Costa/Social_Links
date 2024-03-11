import logo from './assets/LOGO_VOZES_FOLIA_COLOR .png';
import Image from './components/Image';
import Links from './components/Link';

function App() {
  return (
    <main
      className="bg-dark-gray w-96 max-mobile:w-[20.5rem] mx-auto mt-[7.25rem] rounded-lg text-color-white
    "
    >
      <section className="p-6 flex flex-col justify-center items-center text-lg">
        <Image src={logo} alt="Logo marca do canal Vozes da Folia" />
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="hover:text-color-hotpink hover:brightness-200 hover:scale-125 transition duration-500 ease-in-out">
            <a href="https://www.instagram.com/vozesdafolia/">@vozesdafolia</a>
          </h1>
        </div>
        <ul className="w-full max-w-full mt-8  ">
          <Links
            href='"https://www.youtube.com/@vozesdafolia"'
            text="Youtube"
          />
        </ul>
      </section>
    </main>
  );
}

export default App;
