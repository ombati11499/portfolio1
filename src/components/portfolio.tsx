import Article from "../common/article"
import Timeline from "../common/timeline"
import styles from "./styles"

const Portfolio =()=>{
    return(
        <div style={styles.portfolioView}>
        <div style={styles.scrollLine}></div>
        <p>Portfolio</p>
        <Article />
        <Timeline startYr="2023" endYr="To-date"/>
        <Article />
        <Timeline startYr="2022" endYr="2023"/>
        <Article />
      </div>
    )
}
export default Portfolio;