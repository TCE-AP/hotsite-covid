import React, { useState } from 'react';
import Head from 'next/head';

import { FiYoutube, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import logoSimples from '../assets/logo-simples-sm.svg';
import logoComTexto from '../assets/logo-com-texto.svg';
import Transition from '../components/General/Transition';
import ContatoForm from '../components/ContatoForm';

interface SocialLinks {
  icon: IconType | any;
  link: string;
}

const socialIconCSS = 'ml-6 text-gray-400 transition duration-200';

const socialLinks: SocialLinks[] = [
  {
    icon: (
      <FiYoutube
        className={`${socialIconCSS} hover:text-red-700 focus:text-red-700`}
        size={28}
      />
    ),
    link: 'https://www.youtube.com/channel/UCTysjH6OfRhnonCY76RxbGg',
  },
  {
    icon: (
      <FiFacebook
        className={`${socialIconCSS} hover:text-blue-800 focus:text-blue-800`}
        size={28}
      />
    ),
    link: 'https://www.facebook.com/TCEAP/',
  },
  {
    icon: (
      <FiTwitter
        className={`${socialIconCSS} hover:text-blue-400 focus:text-blue-400`}
        size={28}
      />
    ),
    link: '',
  },
  {
    icon: (
      <FiInstagram
        className={`${socialIconCSS} hover:text-blue-700 focus:text-blue-700`}
        size={28}
      />
    ),
    link: 'https://www.instagram.com/tceamapa/',
  },
];

interface MenuLinkItem {
  nome: string;
  link: string;
}

const menuLinks: MenuLinkItem[] = [
  {
    nome: 'Início',
    link: '/#inicio',
  },
  {
    nome: 'Ações',
    link: '/#acoes',
  },
  {
    nome: 'Legislação',
    link: '/#legislacao',
  },
  {
    nome: 'Orientações',
    link: '/#orientacoes',
  },
  {
    nome: 'Contato',
    link: '/#contato',
  },
];

const Home: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleMobileMenu(): void {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <Head>
        <title>TCE-AP | COVID-19</title>
      </Head>
      <div id="inicio" className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/#" aria-label="Home">
                      <img
                        src={logoComTexto}
                        alt="Logomarca TCE-AP"
                        width="200"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        id="main-menu"
                        aria-label="Main menu"
                        aria-haspopup="true"
                        onClick={toggleMobileMenu}
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4">
                  {menuLinks.map((item) => (
                    <a
                      key={item.nome}
                      href={item.link}
                      className="font-medium mr-8 text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      {item.nome}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <Transition
              show={mobileMenu}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md">
                  <div
                    className="rounded-lg bg-white shadow-xs overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="main-menu"
                  >
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={logoSimples}
                          alt="Logomarca simples do TCE-AP"
                        />
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                          aria-label="Close menu"
                          onClick={toggleMobileMenu}
                        >
                          <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      {menuLinks.map((item) => (
                        <a
                          key={item.nome}
                          href={item.link}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          {item.nome}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-blue-primary sm:text-5xl sm:leading-none md:text-6xl">
                  TCE-AP
                  <span className="text-gray-700"> contra o</span>
                  <br className="xl:hidden" />
                  <span className="text-gray-700">Coronavírus</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://www.tce.ap.gov.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-apoio focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Acesse nosso site
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/fachada.jpg"
            alt="Fachada do Tribunal"
          />
        </div>
      </div>
      <div
        id="acoes"
        className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8"
      >
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-blue-primary sm:text-4xl sm:leading-10">
              Nossas Ações
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-blue-primary">
                      Doações de Sextas Básicas
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">01 de Agosto de 2020</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-blue-primary">
                      Mingau Solidário
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">01 de Agosto de 2020</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-blue-primary">
                      Outro Evento
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint harum rerum voluptatem quo recusandae magni placeat
                      saepe molestiae, sed excepturi cumque corporis perferendis
                      hic.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">01 de Agosto de 2020</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="orientacoes" className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Siga nossas
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-primary sm:text-4xl sm:leading-10">
              Orientações
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-apoio text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Fique em Casa
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-apoio text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Use Máscara
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-apoio text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Mantenha distância
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-apoio text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Higienize-se
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="contato" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl leading-8 font-extrabold text-blue-primary sm:text-3xl sm:leading-9">
                Contato
              </h2>
              <div className="mt-3">
                <p className="text-lg leading-7 text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base leading-6 text-gray-500">
                    <p>+55 (96) 2101-4700</p>
                    <p className="mt-1">
                      Funcionamento Segunda à Sexta - 7:30 às 13:30
                    </p>
                    <p className="mt-1">
                      Atendimento de Protocolo Segunda à Sexta - 7:30 às 17:30
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base leading-6 text-gray-500">
                    <p>support@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContatoForm />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            {menuLinks.map((item) => (
              <div key={item.nome} className="px-5 py-2">
                <a
                  key={item.nome}
                  href={item.link}
                  className="text-base leading-6 text-gray-500 hover:text-blue-primary"
                >
                  {item.nome}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{social.link}</span>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2020 Tribunal de Contas do Estado do Amapá
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
