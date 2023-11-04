import background from "../assets/background.png";

const styles = {
  appContainer: {},
  homeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "gray",
    display: "flex",
  },
  profView: {
    paddingLeft: 20,
    paddingRight: 5,
    display: "flex",
    backgroundColor: "maroon",
    width: "30%",
    height: "100%",
    position: "fixed",
    flexDirection: "column",
    //   backgroundImage: `url(${background})`
  },
  infoView: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  profPic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  linkView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  btnLink: {
    backgroundColor: "transparent",
    margin: 5,
    // marginLeft: 2,
  },
  socialIcon: {
    height: 25,
    width: 25,
  },
  artView: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  portfolioView: {
    position: "absolute",
    left: "36%",
    top: 0,
    right: 0,
  },
  scrollLine: {
    position: "absolute",
    width: "2px", // Adjust the width as needed
    height: "100%", // Takes the full height of the div
    background: "red", // Line color
    top: 0, // Position at the top of the div
    left: "0.006%",
    transform: "translateX(-50%)",
  },
  timeline: {
    position: "relative",
    height: 100,
    display:"flex",
    flexDirection:"row"
  },
  timelinePoint: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#0077b6",
    borderRadius: "50%",
    transform: "translateX(-50%)",
  },
  timelineTxt: {
    display:"flex",
    flexDirection:"row",
    position: "absolute",
    top: 5,
    transform: "translateX(-50%)",
    textAlign: "left",
    fontSize: 14,
    color: "#fff",
  },
  aboutBtn:{
    backgroundColor:"transparent"
  },
hireView:{
  backgroundColor:"white",
  display:"flex",
  flexDirection:"column",
  // flex:1,
  width:"50%",
  // zIndex:1,
  // justifyContent:"center", 
  marginLeft:"40%",
},
detView:{
  marginLeft:20
},
hireTitle:{
  color:"black",
}
};
export default styles as any;
