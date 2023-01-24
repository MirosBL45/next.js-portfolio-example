import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/avatar.png';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import React, { useState, useEffect } from 'react';
import { smooth } from './utilities/smooth-scroll';

export default function Home() {
  //set dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  //show/hide nav on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = smooth(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Next.JS Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoMJ.png" />
        <link rel="shortcut icon" href="/logoMJ.png" type="image/x-icon" />
        <meta name="description" content="Next.JS Portfolio" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, programming, ReactJS, Next.JS Portfolio"
        />
        <meta name="author" content="Miroslav Jovic" />
        <meta name="robots" content="index, follow" />
        <meta name="title" content="Next.JS Portfolio | ReactJS" />
        <meta property="og:title" content="Next.JS Portfolio | ReactJS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Next.JS Portfolio" />
        <meta property="twitter:title" content="Next.JS Portfolio" />
        <meta property="twitter:description" content="Next.JS Portfolio" />
        <meta property="og:site_name" content="Next.JS Portfolio | ReactJS" />
        <meta property="analytics-s-channel" content="homepage" />
        <meta property="name" content="Next.JS Portfolio | ReactJS" />
        <meta property="description" content="Next.JS Portfolio" />
        <meta
          property="keywords"
          content="HTML, CSS, JavaScript, programming, ReactJS, Next.JS Portfolio"
        ></meta>
      </Head>
      <nav
        style={{ top: visible ? '0' : '-140px' }}
        className="navigation py-10 px-5 md:px-20 lg:px-40 flex justify-between bg-gray-100 dark:bg-gray-800"
      >
        <a
          href="https://github.com/MirosBL45"
          target="_blank"
          title="Miroslav's GitHub"
        >
          <h1 className="resume text-xl font-burtons dark:text-gray-400">
            miroslav
          </h1>
        </a>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="resume cursor-pointer text-2xl dark:text-gray-400"
              title="switch dark/light mode"
            />
          </li>
          <li className="resume">
            <a
              className="bg-gradient-to-r from-cyan-500 to-red-500 text-white px-4 py-2 rounded-md ml-8 dark:text-gray-300"
              href="https://www.linkedin.com/in/mj888/"
              target="_blank"
              title="Miroslav's Linkedin"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700">
        {/* LANDING PAGE */}
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="mt-20 text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Dimitri Marco
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-500">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://github.com/MirosBL45"
              target="_blank"
              title="Miroslav's GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mj888/"
              target="_blank"
              title="Miroslav's Linkedin"
            >
              <AiFillLinkedin />
            </a>
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-60 w-60 mt-20 mb-20 overflow-hidden sm:h-70 sm:w-70 md:h-96 md:w-96">
            <Image src={avatar} alt="waving" />
            {/* objectFit="cover" */}
          </div>
        </section>
        {/* SERVICES */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-500">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600 flex-1">
              <Image
                src={design}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-purple-500">
                Design Tools I Use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-600 flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Excellent consulting
              </h3>
              <p className="py-2 dark:text-gray-400">
                Feel free to ask anything that interests you about your site,
                that's all yours.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-purple-500">
                Design Tools I Use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600 flex-1">
              <Image
                src={code}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Great Coding
              </h3>
              <p className="py-2 dark:text-gray-400">
                Clean code that guarantees the loading speed of your site on all
                devices.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-purple-500">
                Design Tools I Use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Indesign</p>
            </div>
          </div>
        </section>
        {/* PORTFOLIO */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-500">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web1}
                alt="website1"
                title="work example"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web2}
                alt="website2"
                title="work example"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web3}
                alt="website3"
                title="work example"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web4}
                alt="website4"
                title="work example"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web5}
                alt="website5"
                title="work example"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web6}
                alt="website6"
                title="work example"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
