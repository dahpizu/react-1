import React from "react";
import { CiBellOn } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { MdAccountCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function Movie() {
  return (
    <div>
      <div>
        <nav className="opt">
          <div className="logo-icon">
            <FaCodepen />
          </div>
          <ul className="option">
            <li>Movies</li>
            <li>Series</li>
            <li>Animation</li>
            <li>Genres</li>
          </ul>
          <div className="search">
            <IoIosSearch />
            search...
            <input type="text" className="search-input" />
          </div>
          <div className="icon">
            <CiBellOn />
            <CgMenuGridO />
            <MdAccountCircle />
          </div>
        </nav>
      </div>
      <div className="left-nav">
        <FaHourglassStart />
        <IoStarOutline />
        <CiStopwatch />
        <IoTimeOutline />
        <FaRegFolder />
        <IoSettingsOutline />
        <div className="logout">
          <IoIosLogOut />
        </div>
      </div>
      <div>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          deleniti sunt, alias saepe accusantium veritatis eos, illo eaque magni
          animi asperiores, ad laboriosam accusamus ducimus totam quis dolorum
          quas qui sapiente voluptates labore odio esse repudiandae similique!
          Cumque quos corrupti, atque ea sed ipsum dolores labore at vel,
          voluptatem natus repellendus quis libero, veritatis eligendi animi
          unde ipsa. Voluptate veniam repellendus saepe porro accusantium
          aspernatur doloribus labore iure expedita ratione, nulla sed?
          Laboriosam ab quod beatae nobis, ipsum reiciendis maxime! Cum, illum
          neque. Voluptate soluta eaque optio omnis ea consectetur, a voluptatum
          nulla inventore neque non sequi modi, rerum deleniti voluptas
          veritatis blanditiis ad animi. Cumque fuga voluptatem impedit culpa
          omnis saepe quod quia ad perferendis vero explicabo repellendus eos
          libero harum magnam facere, asperiores mollitia! Nemo molestiae
          architecto maiores! Tempora, cupiditate voluptas. Odio dolorum
          accusantium nemo excepturi, recusandae explicabo? Ullam enim
          necessitatibus aspernatur quam hic dolor porro accusantium pariatur
          vel quasi voluptatum expedita officia quis doloribus, alias autem
          esse, consequatur ea nostrum maxime tempore! Rerum, fugit culpa
          repellendus id quis similique soluta aperiam excepturi vitae commodi
          perferendis repellat voluptatem dicta placeat, tempore laborum nihil
          reiciendis atque dolor minima quibusdam architecto. Illum, quibusdam
          nulla expedita exercitationem commodi libero voluptatum incidunt
          quisquam architecto nobis facere saepe labore animi consequatur illo
          mollitia maxime aut quia voluptatibus eum ab. Impedit tempore, cum
          mollitia a id neque. Minima id voluptates ullam tenetur nulla quod
          facere incidunt odit quidem consectetur aperiam molestiae harum
          aspernatur molestias sit itaque ipsum consequatur, necessitatibus modi
          non quia error. Deleniti rerum error minus vero recusandae mollitia
          qui, et sunt quas minima, voluptatibus enim inventore ipsa dolore sint
          dolorem voluptas culpa! Sapiente provident consequatur maiores, libero
          numquam eligendi id, perferendis aliquid dolore quisquam ex vero illo
          dolores vitae eum nam itaque deleniti cupiditate alias, sequi
          perspiciatis nobis! Ea quam tenetur similique amet facere maxime
          molestias aliquid laborum exercitationem non hic placeat vero unde
          asperiores commodi, et rerum repellat voluptates libero debitis
          praesentium nemo. Voluptates debitis quaerat, earum sequi beatae ipsam
          provident laboriosam repellendus incidunt nam nesciunt, perferendis
          fuga iure saepe cum blanditiis sit amet quae cumque? Dicta similique,
          numquam laboriosam quos officiis sint voluptatum accusantium
          doloremque, autem voluptatibus, rerum porro quis maiores praesentium
          repellendus molestiae dolorem optio consectetur animi. Consequatur
          ipsam hic debitis commodi, atque adipisci sed, expedita vel fugiat
          assumenda ducimus, ullam eaque tempora et nobis quod quia illum labore
          amet ratione nesciunt aspernatur asperiores voluptas odio. Voluptates,
          possimus qui!
        </h1>
      </div>
    </div>
  );
}

export default Movie;
