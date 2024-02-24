// import { Card } from 'antd'
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import React from "react";

export type Card = {
  url: string;
  name: string;
  climate: string;
  terrain: string;
  population: string;
};

const DataCard = (props: {
  data: {
    url: string;
    name: string;
    climate: string;
    terrain: string;
    population: string;
  };
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/card-detail?id=${props?.data?.url}`);
      }}
      style={{
        cursor: "pointer",
        padding: "20px",
        textAlign: "center",
        border: "2px solid black",
        borderRadius: "20%",
        fontSize: "25px",
        width: "400px",
        backgroundColor: "#faf1f1",

        margin: "20px",
      }}
    >
      <div>
        <b style={{ fontWeight: 600 }}>Name:</b> {props?.data.name}
      </div>
      <hr />
      {/* <div>
        Rotation Period:   {props?.data.rotation_period} 
        </div><hr />
        <div>
        Orbital Period:   {props?.data.orbital_period} 
        </div><hr />
        <div>
        Diameter:   {props?.data.diameter} 
        </div><hr /> */}
      <div>
        <b style={{ fontWeight: 600 }}>Climate:</b> {props?.data.climate}
      </div>
      <hr />
      {/* <div>
        Gravity:   {props?.data.gravity} 
        </div><hr /> */}
      <div>
        <b style={{ fontWeight: 600 }}>Terrain:</b> {props?.data.terrain}
      </div>
      <hr />
      {/* <div>
        Surface Water:   {props?.data.surface_water} 
        </div><hr /> */}
      <div>
        <b style={{ fontWeight: 600 }}>Population:</b> {props?.data.population}
      </div>
      <hr />
      {/* <div>
        Films:  {props?.data.films}
        </div><hr /> */}
      {/* <div>
        Created:  {props?.data.created}
        </div><hr /> */}
      {/* <div>
        Edited:  {props?.data.edited}
        </div><hr />
        <div>
        URL:  {props?.data.url}
        </div><hr /> */}
    </div>
  );
};

export default DataCard;
