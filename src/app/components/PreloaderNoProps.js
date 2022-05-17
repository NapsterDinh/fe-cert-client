
import React from 'react';
import { Image } from "react-bootstrap";

import ReactLogo from "../assets/img/technologies/react-logo-transparent.svg";
import Dog from 'app/assets/gif/dogLoading.gif'

const PreloaderNoProps = () => (
  <>
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center`}>
      <Image className="loader-element animate__animated animate__jackInTheBox" src={ReactLogo} height={40} />
    </div>
  </>
)

export const LoadingTable = () => (
  <div className={`d-flex justify-content-center align-items-center w-100 h-100`}>
    <Image className="loader-element animate__animated animate__jackInTheBox" src={Dog} height={100} />
  </div>
)

export default PreloaderNoProps;
