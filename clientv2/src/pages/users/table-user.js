import React from "react";
import { Table } from "antd";
import columns from "./data/column";
// import dataRows from "./data/dataRows";
import qs from "qs";
import { useHover } from "../../common/hook-hover";
const TableUser = () => {
  const [rows, setRows] = React.useState([]);
  const { hoverProps, isHovered } = useHover({
    // onHoverStart: () => {
    //   console.log("onHoverStart");
    // },
    // onHoverEnd: () => {
    //   console.log("onHoverEnd");
    // },
  });
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 10,
    total: 20,
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    FetchApiData(pagination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomuserParams = (params) => ({
    results: params.pageSize,
    page: params.current,
  });
  function FetchApiData(params = {}) {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPagination((dataState) => ({
          ...dataState,
          ...params,
          // total: 200,
        }));
        setRows(data.results);
        setLoading(false);
      });
  }

  function onChangeHandle(pagination, filters, sorter, extra) {
    FetchApiData(pagination);
  }

  const DeleteRow = (zIndex) => {
    const filterRow = rows.filter((value, index, arr) => index !== zIndex);
    setRows(filterRow);
  };

  return (
    <div>
      <div {...hoverProps}
      style={{
        height: 150,
        width: 150,
        background: "transparent",
        border: "1px solid #cbcbcb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 6,
        marginBottom: 6,
        // ...(isHovered && { backgroundColor: "#e2e2e2" })
        backgroundColor: isHovered ? "#e2e2e2":"white"
      }}
      
      >aaaaaaaaa {isHovered}</div>
      <Table
        key={"master-table"}
        columns={columns(DeleteRow)}
        rowKey={(record) => record.cell}
        dataSource={rows}
        pagination={pagination}
        onChange={onChangeHandle}
        loading={loading}
      />
    </div>
  );
};

export default TableUser;
