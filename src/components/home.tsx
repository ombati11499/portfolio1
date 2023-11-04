import React from "react";
import styles from "./styles";
// import { profPic, linkd, insta, medium, x, git, mail } from "../assets/index";
// import insta from "../assets/insta.svg";
import linkd from "../assets/linkedIn.svg";
import profPic from "../assets/PROFPIC.png";
// import x from "../assets/x.svg";
import medium from "../assets/medium.svg";
import git from "../assets/git.svg";
import mail from "../assets/mail.svg";
// import dotenv from "dotenv";
// dotenv.config();
import { Button } from "@mui/base";
import Portfolio from "./portfolio";
import { useState } from "react";
import AboutMe from "./aboutMe";
import Cv from "./cv";
import Hire from "./hire";
export type pages =
  | "home"
  | "aboutMe"
  | "portfolio"
  | "cv"
  | "hire"
  | "offer"
  | "presentations";
interface stateProps {
  currentPage: pages;
}
export interface HomeProps {
  currentpg?: pages;
}
export type LinkProps =
  | "offer"
  | "portfolio"
  | "hire me"
  | "cv"
  | "presentations"
  | "personal blog";

interface IconProps{
  name:string;
  img:any;
}
export const socialIcons:IconProps[] = [
  { name: "mail", img: mail },
  { name: "linkedIn", img: linkd },
  { name: "git", img: git },
  // { name: "instagram", img: insta },
  // { name: "x", img: x },
  { name: "medium", img: medium },
];
const Home: React.FC = ({}: HomeProps) => {
  const Links: LinkProps[] = [
    // "offer",
    "portfolio",
    // "hire me",
    "cv",
    // "presentations",
    "personal blog",
  ];

  const Articlelinks = [
    {
      href: import.meta.env.VITE_BLOG,
      text: "Article link 1",
      target: "_blank",
    },
    {
      href: import.meta.env.VITE_BLOG,
      text: "Article link 2",
      target: "_blank",
    },
    {
      href: import.meta.env.VITE_BLOG,
      text: "Article link 3",
      target: "_blank",
    },
  ];
  const [state, setState] = useState<stateProps>({
    currentPage: "home",
  });
  const { currentPage } = state;
  // const blogUrl =process.env.blog as string
const openLink =(name:string)=>{
  name==='medium'?window.open("https://medium.com/@ombaticomori", "_blank"):name==='linkedIn'?
  window.open("https://www.linkedin.com/in/christopher-omori-9042a5b7/", "_blank"):name==='git'?
  window.open("https://github.com/ombati11499", "_blank"):null
}
  const personalBlog = () => {
    window.open(import.meta.env.VITE_BLOG, "_blank");
  };
  const close = () => {
    setState({ ...state, currentPage: "home" });
  };
  const changePage = (link: string) => {
    link === "portfolio"
      ? setState({ ...state, currentPage: "home" })
      : link === "personal blog"
      ? personalBlog()
      : link === "cv"
      ? setState({ ...state, currentPage: "cv" })
      : link === "hire me"
      ? setState({ ...state, currentPage: "hire" })
      : link === "offer"
      ? setState({ ...state, currentPage: "offer" })
      : link === "presentations"
      ? setState({ ...state, currentPage: "presentations" })
      : null;
  };
  return (
    <div style={styles.homeContainer}>
      <div style={styles.profView}>
        <>
          <div style={styles.infoView}>
            <img src={profPic} alt="profilePic" style={styles.profPic} />
            <Button
              style={styles.aboutBtn}
              onClick={() => {
                setState({ ...state, currentPage: "aboutMe" });
              }}
            >
              <p>OmbatiTech</p>
            </Button>
            <span>FREELANCE FULL_STACK ENGINEER</span>
          </div>
          <div style={styles.linkView}>
            {Links.map((link: LinkProps) => (
              <Button
                style={styles.btnLink}
                onClick={() => changePage(link)}
              >
                <text>{link.toUpperCase()}</text>
              </Button>
            ))}
          </div>
          <div style={{ marginLeft: 38 }}>
            <p>GET IN TOUCH</p>
            {socialIcons.map(({name, img}: IconProps) => (
              <Button style={styles.btnLink}
              onClick={()=>openLink(name)}
              >
                <img src={img} alt={name} style={styles.socialIcon} />
              </Button>
            ))}
          </div>
          <div style={styles.artView}>
            <p>FEATURED ON MY BLOG</p>
            {Articlelinks.map(({ href, text, target }) => (
              <a href={href} target={target}>
                {text}
              </a>
            ))}
          </div>
        </>
      </div>
      <></>
      {currentPage === "home" ? (
        <Portfolio />
      ) : currentPage === "aboutMe" ? (
        <AboutMe />
      ) : currentPage === "cv" ? (
        <Cv close={close} />
      ) : currentPage === "hire" ? (
        <Hire />
      ) : null}
    </div>
  );
};

export default Home;
