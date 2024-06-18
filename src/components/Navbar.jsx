"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    
  ];
  const handler = () => {
    router.push("/login");
  };
  if(pathName.includes('dashboard')) return <div className="bg-green-700">
Dashboard in the page
  </div>
  return (
    <div className="flex justify-between items-center p-10 bg-cyan-700 ">
      <div>
        <h1 className="text-xl font-semibold">
          Next <span className="text-white">Hero</span>
        </h1>
      </div>
      <nav className="flex gap-4 list-none ">
        <ul className="flex justify-between space-x-4 text-white">
          {links?.map((link) => (
            <Link
              className={`${
                pathName === link.path && "text-black font-bold border-b-2 "
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={handler}
          className="border border-orange-600 px-2 py-1 rounded-md text-white"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
