import Image from "../Assets/Images/Sport_balls.png";

const Header = () => {
  return (
    <div className="header">
      <img
        src={Image}
        alt="Alt"
        style={{
          width: "5%",
        }}
      ></img>
      <h1 style={{ color: "white" }}> Sports Registraion Portal</h1>
    </div>
  );
};

export default Header;
