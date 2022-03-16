import React from "react";
import { Table } from "antd";
import columns from "./data/column";
import dataRows from "./data/dataRows";
const TableUser = () => {

  const [rows,setRows] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 2,
    total: 3,
  });
  // const [loading,setLoading] = React.useState(false);

  React.useEffect(()=>{
    setRows(dataRows);
  },[]);

  React.useMemo(()=>{
    setPagination(dataState=>({
      ...dataState,
      total: rows.length
    }))
  },[rows])

  function onChangeHandle(pagination, filters, sorter, extra) {
    console.log(12005, pagination, filters, sorter, extra);
    setPagination(pagination);
  }
  
  const DeleteRow = (zIndex)=>{
    console.log(12005, zIndex);
    const filterRow = rows.filter((value, index, arr)=> index !== zIndex);
    setRows(filterRow);
  }

  return (
    <div>
      <Table
        columns={columns(DeleteRow)}
        dataSource={rows}
        pagination={pagination}
        onChange={onChangeHandle}
        loading={false}
      />


    </div>
  );
};

export default TableUser;
