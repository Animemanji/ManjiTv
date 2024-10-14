'use client'

import { MenuLink } from "./menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';

import {
  MdDashboard,
  MdLogout,
} from "react-icons/md";
import { useEffect } from "react";
import { FaBlog, FaUpload } from "react-icons/fa";


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Blog",
        path: "/dashboard/blog",
        icon: <FaBlog />,
      },
      {
        title: "Anime Uplod",
        path: "/dashboard/animeuplod",
        icon: <FaUpload />,
      },
    ],
  },
];



const Sidebar = async () => {
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/check-auth');
      if (!res.ok) {
        router.push('/Adminlogin');
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/images/mia-khalifa.jpg" alt="" width={50} height={50} style={{borderRadius:"100%"}} />
        <div className={styles.userDetail}>
          <span className={styles.username}>Gojo uploader</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item =>(
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} className={styles.logout}>
      <MdLogout />Long out</button>
    </div>
  );
};

export default Sidebar;