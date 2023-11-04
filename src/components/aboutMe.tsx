import styles from "./styles";
// import { LinkProps } from "./home";

const AboutMe = () => {
  // const btns: LinkProps[] = [
  //   "offer",
  //   "portfolio",
  //   "hire me",
  //   "cv",
  //   "presentations",
  //   "personal blog",
  // ];
  return (
    <div style={styles.portfolioView}>
      <p>About Me</p>
      <p>Hi, I'm Ombati Tech.</p>
      <p>
        A freelance software engineer with 15 years of experience in front-end
        and back-end web development.
      </p>
      {/* {btns.map((btn: string) => (
        <div>
            <Button>
                <p>{btn}</p>
            </Button>
        </div>
    
      ))
      }
       */}
    </div>
  );
};
export default AboutMe;
