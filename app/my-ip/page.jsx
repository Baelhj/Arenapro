"use client";

import React from 'react'
import { useEffect, useState } from "react";





const myIp = () => {
  const [ip, setIP] = useState(null);
  useEffect(() => {
    const fetchIP = async () => {
      const response = await fetch("api/ip");
      const data = await response.json();
      setIP(data.ip);
    };
  
    fetchIP();
  }, [])
  
  return (
    <div>
      {/* LEFT SIDE */}
      <div>
        <div>
          <h3>My IP Information:</h3>
        </div>
        <div>
        <p>
          <span>ISP:</span>
          <span></span>
        </p>
        <p>
          <span>City:</span>
          <span></span>
        </p>
        <p>
          <span>Region:</span>
          <span></span>
        </p>
        <p>
          <span>Country:</span>
          <span></span>
        </p>
        </div>
      </div>

      {/* MIDDLE SIDE */}
      <div>
        <div>map</div>
        <div>Hide my ip</div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div>
          <h3>My IP Address is:</h3>
          {ip ? <p>{ip}</p> : <p>Loding...</p>}
        </div>
        <div>ditectation</div>
      </div>
    </div>
  )
}

export default myIp