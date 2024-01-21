import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub, AiFillInstagram } from 'react-icons/ai';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-3 px-8 pt-20 text-gray-400 w-full">
      <div className="text-sm font-medium">Copyright © 2024 Nextflix</div>
      <div className="flex space-x-4">
        <Link href="lien_vers_instagram" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></Link>
        <Link href="lien_vers_twitter" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></Link>
        <Link href="lien_vers_github" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></Link>
      </div>
    </footer>
  );
};

export default Footer;