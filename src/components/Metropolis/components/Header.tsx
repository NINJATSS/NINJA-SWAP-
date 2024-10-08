import { cn } from '@site/src/utils';
import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import BurgerIcon from './icons/BurgerIcon';
import CrossIcon from './icons/CrossIcon';
import { DOCS_URL } from '../constants';

const LINKS = [
    {
        label: 'Docs',
        path: DOCS_URL,
        style: 'link',
    },
    {
        label: 'Resources',
        path: 'https://www.jupresear.ch/c/developers/40',
        style: 'link',
    },
    {
        label: 'Changelog',
        path: 'https://t.me/jup_dev',
        style: 'link',
    },
    {
        label: 'FAQs',
        path: 'https://discord.com/channels/897540204506775583/910250162402779146',
        style: 'link',
    },
    {
        label: 'Start Building',
        path: DOCS_URL,
        style: 'button',
    },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(0);
    const threshold = 50;

    useEffect(() => {
        let ticking = false;

        const updateScrolled = () => {
            const scrollY = window.pageYOffset;

            setScrolled(scrollY > threshold ? 1 : 0);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrolled);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled]);

    return (
        <div>
            <header className={cn(scrolled ? "bg-[#131C25]" : "bg-transparent", "flex justify-center px-5 py-5 fixed z-50 top-0 left-0 right-0 transition-all duration-500")}>
                <div className="xl:max-w-6xl w-full flex items-center justify-between">
                    <a href="/metropolis" className='hover:no-underline m-0'>
                        <span className="flex flex-row items-center space-x-2.5">
                            <img
                                alt="logo"
                                loading="lazy"
                                width="32"
                                height="32"
                                decoding="async"
                                data-nimg="1"
                                src="/img/jupiter-logo.svg"
                                style={{ color: 'transparent' }}
                            />
                            <div className="flex">
                                <div className="text-lg font-bold text-white">Jupiter</div>
                            </div>
                        </span>
                    </a>
                    <div className="items-center space-x-4 ml-8 overflow-auto hidden md:flex">
                        {LINKS.map((link) => {
                            if (link.style === 'button') {
                                return (
                                    <a href={link.path} key={link.label} target="_blank" className="bg-[#4A5C41]/90 border border-solid border-transparent rounded-full text-center py-1.5 px-[1.15rem] m-0 hover:border-[#c7f284] hover:no-underline transition-colors ease-out duration-200">
                                        <span className="-m-1 text-sm font-semibold inline-block text-[#c7f284]">
                                            {link.label}
                                        </span>
                                    </a>
                                );
                            }
                            else {
                                return (
                                    <a href={link.path} key={link.label} target="_blank" className='hover:no-underline'>
                                        <span className="px-3 py-1 text-sm font-semibold text-white hover:text-[#c7f284] transition-colors ease-in duration-200">{link.label}</span>
                                    </a>
                                );
                            }
                        })}
                    </div>
                </div>
            </header>
            <div className="fixed top-[1.3rem] right-7 z-50 block md:hidden">
                <Menu
                    overlayClassName={ "top-0 left-0 right-0 bottom-0" }
                    customBurgerIcon={<BurgerIcon width={30} height={30} color={"#ffffff"} />}
                    customCrossIcon={<CrossIcon width={24} height={24} color={"#ffffff"} />}
                    width={ "65%" }
                    right
                >
                    <div className='w-full'>
                        <div className="w-full h-screen flex flex-col overflow-auto gap-2 items-center pt-6 bg-gradient-to-b from-[#223345] to-[#131C25] md:bg-transparent md:from-transparent md:to-transparent">
                            <a href="/" target="_blank" className='hover:no-underline mx-auto mb-4 mt-4'>
                                <span className="flex flex-row items-center space-x-2.5">
                                    <img
                                        alt="logo"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        src="/img/jupiter-logo.svg"
                                        style={{ color: 'transparent' }}
                                    />
                                    <div className="flex">
                                        <div className="text-lg font-bold text-white">Jupiter</div>
                                    </div>
                                </span>
                            </a>
                            
                            {LINKS.map((link) => {
                                if (link.style === 'button') {
                                    return (
                                        <a href={link.path} key={link.label} target="_blank" className="bg-[#4A5C41]/90 border border-solid border-transparent rounded-full text-center py-1.5 px-[1.15rem] m-0 mt-4 hover:border-[#c7f284] hover:no-underline transition-colors ease-out duration-200">
                                            <span className="-m-1 text-sm font-semibold inline-block text-[#c7f284]">
                                                {link.label}
                                            </span>
                                        </a>
                                    );
                                }
                                else {
                                    return (
                                        <a href={link.path} key={link.label} target="_blank" className='hover:no-underline'>
                                            <span className="text-sm font-semibold text-white hover:text-[#c7f284] transition-colors ease-in duration-200">{link.label}</span>
                                        </a>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </Menu>
            </div>
        </div>
    );
};

export default Header;
