// import { notification } from 'antd';
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

export type CardData = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  created: string;
  edited: string;
};

const CardDetail = () => {
  const router = useRouter();
  const id: string = String(router.query.id) || "";
  console.log(router, "fdasdfsafda");
  const [data, setData] = useState<CardData>();
  const [loading, setLoading] = useState(false);

  const customRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.get(id);
      setData(response.data);
      console.log(response, "12345");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    customRequest();
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            marginTop: "100px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TailSpin color="gray" radius={"8px"} />
        </div>
      ) : (
        <div
          style={{
            cursor: "pointer",
            width: "100%",
            padding: "2rem",

            height: "100%",
            gap: "5px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f9f8f8",
          }}
        >
          {/* description */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <b style={{ fontWeight: 800, fontSize: "24px" }}>{data?.name}</b>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              //   paddingLeft: "10rem",
              //   paddingRight: "15rem",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                // paddingLeft: "5rem",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}>Population:</b>{" "}
                {data?.population}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Rotation Period:</b>{" "}
                {data?.rotation_period}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Orbital Period:</b>{" "}
                {data?.orbital_period}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Diameter:</b> {data?.diameter}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Climate:</b> {data?.climate}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Gravity:</b> {data?.gravity}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Terrain:</b> {data?.terrain}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Surface Water:</b>{" "}
                {data?.surface_water}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Population:</b>{" "}
                {data?.population}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Created Date:</b>{" "}
                {data?.created?.slice(0, 10)}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Edited Date:</b>{" "}
                {data?.edited?.slice(0, 10)}
              </div>
            </div>
            <div
              style={{
                width: "500px",
                display: "flex",
                justifyContent: "space-between",
                // flexDirection: "column",
                gap: "30px",
                flexWrap: "wrap",
              }}
            >
              <b style={{ fontWeight: 600 }}> Residents:</b>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // flexDirection: "column",
                  flexWrap: "wrap",
                }}
              >
                {data?.residents?.map((value) => {
                  return (
                    <div
                      key={value}
                      onClick={() => {
                        router.push(`/resident-details?id=${value}`);
                      }}
                      style={{
                        cursor: "pointer",
                        padding: "20px",
                        textAlign: "center",
                        border: "2px solid black",
                        borderRadius: "10px",
                        backgroundColor: "#faf1f1",
                        margin: "5px",
                        width: "150px",
                        height: "100px",
                        flexWrap: "wrap",
                      }}
                    >
                      People: {value.slice(29, -1)}
                    </div>
                  );
                })}{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetail;
