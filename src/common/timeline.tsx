import styles from "../components/styles";
interface Props {
  startYr: string;
  endYr: string;
}
const Timeline = ({startYr, endYr}: Props) => {
  return (
    <div style={styles.timeline}>
      <div style={styles.timelinePoint}>
        <p style={styles.timelineTxt}>{startYr} - {endYr}</p>
      </div>
    </div>
  );
};
export default Timeline;
