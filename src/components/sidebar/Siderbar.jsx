import "./sidebar.css";

export default function Siderbar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-0/p640x640/40500775_2184437201774664_2907716400107749376_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=19026a&_nc_ohc=I7Vu09UAVdkAX82mhdN&_nc_ht=scontent.fhyd14-2.fna&tp=6&oh=660dc4126531d7e4ab6c3d5957203665&oe=60DA6476"
          alt="profile-img"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores
          ducimus omnis quidem consequuntur quae molestiae, nesciunt tempora
          veniam veritatis, animi cumque natus deserunt dolor vero! Neque beatae
          doloremque dignissimos!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-facebook-square"></i>
          <i className=" sidebarIcon fab fa-twitter-square"></i>
          <i className=" sidebarIcon fab fa-pinterest-square"></i>
          <i className=" sidebarIcon fab fa-snapchat-square"></i>
        </div>
      </div>
    </div>
  );
}
