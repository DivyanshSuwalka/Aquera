// import { notification } from 'antd';
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

export type ResidentData = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
};

const ResidentDetail = () => {
  const router = useRouter();
  const id: string = String(router.query.id) || "";
  console.log(router, "fdasdfsafda");
  const [data, setData] = useState<ResidentData>();
  const [loading, setLoading] = useState(false);

  const customRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.get(id);
      setData(response.data);
      console.log(response, "123hhhh45");
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
                <b style={{ fontWeight: 600 }}>Height:</b> {data?.height}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Mass:</b> {data?.mass}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Hair color:</b>{" "}
                {data?.hair_color}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Skin color:</b>{" "}
                {data?.skin_color}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Eye color:</b> {data?.eye_color}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Birth Year:</b>{" "}
                {data?.birth_year}
              </div>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <b style={{ fontWeight: 600 }}> Gender:</b> {data?.gender}
              </div>
              {/* <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <b style={{ fontWeight: 600 }}> Homeworld:</b> {data.homeworld}
      </div> */}
              {/* <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <b style={{ fontWeight: 600 }}> Population:</b> {data.population}
      </div> */}
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
            {/* <div
      style={{
        width: "250px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <b style={{ fontWeight: 600 }}> Residents:</b>{" "}
      {data.residents?.map((value) => {
        return <div>{value}</div>;
      })}{" "}
    </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ResidentDetail;
