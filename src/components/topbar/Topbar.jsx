import "./topbar.css";

function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fab fa-facebook-square"></i>
        <i className=" topIcon fab fa-twitter-square"></i>
        <i className=" topIcon fab fa-pinterest-square"></i>
        <i className=" topIcon fab fa-snapchat-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">HOME</li>
          <li className="topListItems">ABOUT</li>
          <li className="topListItems">CONTACT</li>
          <li className="topListItems">WRITE</li>
          <li className="topListItems">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-0/p640x640/40500775_2184437201774664_2907716400107749376_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=19026a&_nc_ohc=I7Vu09UAVdkAX82mhdN&_nc_ht=scontent.fhyd14-2.fna&tp=6&oh=660dc4126531d7e4ab6c3d5957203665&oe=60DA6476"
          alt="profile-img"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
