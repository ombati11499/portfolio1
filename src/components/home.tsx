import styles from "./styles";
import profPic from "../assets/PROFPIC.png";
import linkd from "../assets/linkedIn.svg";
import insta from "../assets/insta.svg";
import x from "../assets/x.svg";
import medium from "../assets/medium.svg";
import git from "../assets/git.svg";
import mail from "../assets/mail.svg";

import { Button } from "@mui/base";
import Article from "../common/article";
import Timeline from "../common/timeline";

interface HomeProps {}
type LinkProps =
  | "offer"
  | "portfolio"
  | "hire me"
  | "cv"
  | "presentations"
  | "personal blog";

const Home = ({}: HomeProps) => {
  const Links: LinkProps[] = [
    "offer",
    "portfolio",
    "hire me",
    "cv",
    "presentations",
    "personal blog",
  ];
  const socialIcons = [
    { name: "mail", img: mail },
    { name: "linkedIn", img: linkd },
    { name: "git", img: git },
    { name: "instagram", img: insta },
    { name: "x", img: x },
    { name: "medium", img: medium },
  ];
  const Articlelinks = [
    { href: "https://youtube.com", text: "Article link 1" },
    { href: "https://youtube.com", text: "Article link 2" },
    { href: "https://youtube.com", text: "Article link 3" },
    { href: "https://youtube.com", text: "Article link 4" },
    { href: "https://youtube.com", text: "Article link 5" },
  ];
  return (
    <div style={styles.homeContainer}>
      <div style={styles.profView}>
        <>
          <div style={styles.infoView}>
            <img src={profPic} alt="profilePic" style={styles.profPic} />
            <p>OmbatiTech</p>
            <span>FREELANCE FULL_STACK ENGINEER</span>
          </div>
          <div style={styles.linkView}>
            {Links.map((link: string) => (
              <Button style={styles.btnLink}>
                <text>{link.toUpperCase()}</text>
              </Button>
            ))}
          </div>
          <div style={{ marginLeft: 38 }}>
            <p>GET IN TOUCH</p>
            {socialIcons.map((icon: any) => (
              <Button style={styles.btnLink}>
                <img src={icon.img} alt={icon.name} style={styles.socialIcon} />
              </Button>
            ))}
          </div>
          <div style={styles.artView}>
            <p>FEATURED ON MY BLOG</p>
            {Articlelinks.map(({ href, text }) => (
              <a href={href}>{text}</a>
            ))}
          </div>
        </>
      </div>
      <></>
      <div style={styles.portfolioView}>
        <div style={styles.scrollLine}></div>
        <p>Portfolio</p>
        <Article />
        <Timeline startYr="2023" endYr="To-date"/>
        <Article />
        <Timeline startYr="2022" endYr="2023"/>
        <Article />
      </div>
      {/* <p style={{textAlign:""}}></p> */}
    </div>
  );
};

export default Home;
