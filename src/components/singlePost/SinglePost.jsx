import "./singlepost.css";
import Sidebar from "./../sidebar/Siderbar";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://lh3.googleusercontent.com/5tl2LwhP5nQOh_p4rSsvC1jdA-9SjPQkBCQNiRSoullFJFiPhlg0oyQw8C_1jzMVLuTmmQWxlfQNQLJl0XknL38mwcuhI6WohTc0FJ4MX5e5YWPs97wcP1hj660uhEPtkoV_aqOrTiFYRpLnvZkJZRt8qRfbTkbI-ofPZukIhy8zFR-2ChfE4AIh-VZCGr2ivpIeNJvVdtaAaxNLJMUeHxl2sLn0bUmw879v-v5mXT8Vafza3E9RbBkuv92n8QV2K89LeslVPmPC5YuoAMWJ5LZORYBcw5ge4K01hmNgrIqZr1nKYxoxzwGyUhatCaWb33YHAUFUIkToSt2OxKYUIvpi25VQqsawLacj-CK6-4FhmDJhqzeELxOArKQ-CY8ma0GaNgpxj4vwA7tWhdl_SKCaIQ7fooDwBoScMRxQaNmIgl4hKuLCm2gVCrhXabLuyavfV1kl3h9IhmtAIAQQTgbeirgNDqmQH8VC0G0VqQSAufgmF_ODhE5h7aKHmWcKcPSXimttDX5-EBSCdHYK1XZL9esO4G6V3O_FZQIOsiLG1WB1KQEqm8kxh4GcIAFzkVC2cy133vJRpciXUMyBL7TtUl8shVNJifcdHus5YgIX2asaO23ZhpY1M4tKxeZ-5y-J5RGBIGTT1ClbR-2ArL1moLATRCUh8uteim0s_uzt650Jbm5fh6B6hQsn6r_pen47oQPatDi8srBIeE4-_-Rw=w960-h721-no?authuser=0"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Anil</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDes">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
}
