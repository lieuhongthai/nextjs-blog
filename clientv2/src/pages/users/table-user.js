import React from "react";
import { Table } from "antd";
import columns from "./data/column";
import dataRows from "./data/dataRows";
const TableUser = () => {
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 2,
    total: 3,
  });
  // const [loading,setLoading] = React.useState(false);

  function onChangeHandle(pagination, filters, sorter, extra) {
    console.log(12005, pagination, filters, sorter, extra);
    setPagination(pagination);
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataRows}
        pagination={pagination}
        onChange={onChangeHandle}
        loading={false}
      />


    </div>
  );
};

export default TableUser;
