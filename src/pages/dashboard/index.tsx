import DataCard, { Card } from "@/components/card";
import { Flex } from "antd";
// import { Flex, Pagination, notification } from 'antd';
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ReactPaginate from "react-paginate";

const Dashboard = (props: { data: any }) => {
  const [data, setData] = useState(props?.data);
  const [pageChange, setPageChange] = useState("");
  const router = useRouter();
  console.log(data, "fsafdsadfasdfsa");
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const endOffset = itemOffset + 10;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = data.results.slice(itemOffset, endOffset);

  const customRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        pageChange || "https://swapi.dev/api/planets/?format=json"
      );
      setData(response.data);
      console.log(response, "hfdajksfksjaf");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    customRequest();
  }, [pageChange]);

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
        <div>
          <h1
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
              fontWeight: "800",
              padding: "30px",
              fontSize: "50px",
              color: "#333333",
            }}
          >
            Dashboard
          </h1>
          <div
            style={{
              display: "flex",
              // flexDirection: "column",
              height: "auto",
              flexWrap: "wrap",
              width: "100%",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
              // padding: "10px",
              fontSize: "2rem",
              alignContent: "center",
            }}
          >
            {data.results?.map((value: Card, index: number) => {
              return <DataCard key={index} data={value} />;
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              margin: "40px",
            }}
          >
            <div
              onClick={() => {
                setPageChange(data.previous);
              }}
              style={{
                border: "1px solid #cccccc",
                borderRadius: "6px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              Prev
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              {(() => {
                const arr = [];
                for (let i = 0; i < data.count / 10; i++) {
                  arr.push(
                    <div
                      onClick={() => {
                        setTimeout(() => {
                          router.push(`/dashboard?page=${i + 1}`);
                        }, 1500);
                        setPageChange(
                          `https://swapi.dev/api/planets/?page=${
                            i + 1
                          }&format=json`
                        );
                      }}
                      style={{
                        border: "1px solid #cccccc",
                        borderRadius: "6px",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <h1>{i + 1}</h1>
                    </div>
                  );
                }
                return arr;
              })()}
            </div>
            <div
              onClick={() => {
                setPageChange(data.next);
              }}
              style={{
                border: "1px solid #cccccc",
                borderRadius: "6px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              Next
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let data;
  try {
    const response = await axios.get(
      "https://swapi.dev/api/planets/?format=json"
    );
    console.log(response, "hfdajksfksjaf");
    data = response.data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: data || null,
    },
  };
};

export default Dashboard;
