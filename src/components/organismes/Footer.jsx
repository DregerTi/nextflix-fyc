import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub, AiFillInstagram } from 'react-icons/ai';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-3 px-8 pt-20 text-gray-400 w-full">
      <div className="text-sm font-medium">Copyright © 2024 Nextflix</div>
      <div className="flex space-x-4">
        <Link href="https://github.com/DregerTi/nextflix-fyc/tree/master" target="_blank" rel="noopener noreferrer" aria-label={'intagram'}><AiFillInstagram /></Link>
        <Link href="https://github.com/DregerTi/nextflix-fyc/tree/master" target="_blank" rel="noopener noreferrer" aria-label={'twitter'}><AiOutlineTwitter /></Link>
        <Link href="https://github.com/DregerTi/nextflix-fyc/tree/master" target="_blank" rel="noopener noreferrer" aria-label={'Github'}><AiOutlineGithub /></Link>
      </div>
    </footer>
  );
};

export default Footer;