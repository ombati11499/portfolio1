import { Button } from "@mui/material";
import { pages, socialIcons } from "./home";
import styles from "./styles";
interface Props {
  currentPage?: pages;
}

const Hire = ({}: Props) => {
  return (
    <div style={styles.hireView}>
      <div style={styles.detView}>
        <p style={styles.hireTitle}>Hire Me</p>
        <p style={styles.hireTitle}>
          I am currently available for hire and open to any ideas of
          cooperation.
        </p>
        <div style={{ display: "flex", flexDirection: "column", flex:1, flexGrow:"inherit" }}>
          {socialIcons.map(({ name, img }: any) => (
            <button
              style={{
                backgroundColor: "maroon",
                height: 50,
                width: 50,
                margin: 10,
              }}
            >
              <img src={img} alt={name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hire;
