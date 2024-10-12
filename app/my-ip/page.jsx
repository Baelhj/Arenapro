"use client";

import React from 'react'
import { useEffect, useState } from "react";


const MyIp = () => {
  const [ip, setIP] = useState(null);
  useEffect(() => {
    const fetchIP = async () => {
      const response = await fetch("api/ip");
      const data = await response.json();
      setIP(data.ip);
    };
  
    fetchIP();
  }, [])


  const [ipData, setIpData] = useState(null)
  useEffect(() => {
    const fetchIPData = async () => {
    try {
      const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
      const data = await response.json();
      setIpData(data)
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  }
  
    fetchIPData();
  }, [])
  
  
  return (
    <div>
      {/* LEFT SIDE */}
      <div>
        <div>
          <h3>My IP Information:</h3>
        </div>

        { ipData ?
        (<div>
        <p>
          <span>ISP:</span>
          <span>{ipData.organization_name}</span>
        </p>
        <p>
          <span>City:</span>
          <span>{ipData.city}</span>
        </p>
        <p>
          <span>Region:</span>
          {ipData.region ? <span>{ipData.region}</span> : <p>Not dedected</p> }
        </p>
        <p>
          <span>Country:</span>
          <span>{ipData.country}</span>
        </p>
        </div>)

        :

        (<p>LoAdinG...</p>)
        }

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

export default MyIp