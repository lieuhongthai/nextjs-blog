import React from "react";
import { Table } from "antd";
import "./user-table.css";
import columnsData from "./columnData";
import io from "socket.io-client";
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const UserTable = () => {
  const [rows, setRows] = React.useState(data);
  const socket = React.useRef();
  const [ids, setIds] = React.useState("");
  const [room, setRoom] = React.useState("room1");
  const [dataIsDelete, setDataIsDelete] = React.useState(null);

  React.useEffect(() => {
    //connect io
    socket.current = io.connect("http://localhost:8080");

    //get id connected
    socket.current.on("getId", (data) => setIds(data));

    //join room
    socket.current.emit("setJoinRoom", room);

    socket.current.on("sendNotificationDeleteRowClient", (data) => {
      setDataIsDelete(data);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [room]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const deleteRow = (zIndex, row) => {
    const filterRow = rows.filter((value, index, arr) => index !== zIndex);
    setRows(filterRow);
    socket.current.emit("sendNotificationDeleteRowServer", zIndex, row, room);
  };
  const columns = columnsData(deleteRow);

  React.useEffect(() => {
    if (dataIsDelete !== null) {
      afterDeleteRow(dataIsDelete);
    }
  }, [dataIsDelete]);

  const afterDeleteRow = (row) => {
    const filterRow = rows.filter((value, index, arr) => {
      return value.key !== row.key;
    });
    setRows(filterRow);
  };

  return (
    <>
      {/* <Table
        className="table-layout"
        columns={columns}
        dataSource={rows}
        onChange={onChange}
        showSorterTooltip={false}
        size="small"
        rowClassName="ant-row-table-active"
        onRow={(e) => {
          return {
            onClick: (e, index) => console.log(12005, e),
          };
        }}
      /> */}
      <div className="ant-div-active"></div>

      <div className="ant-table-wrapper table-layout">
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <div className="ant-table ant-table-small">
              <div className="ant-table-container">
                <div className="ant-table-content">
                  <table style={{tableLayout: 'auto'}}>
                    <colgroup></colgroup>
                    <thead className="ant-table-thead">
                      <tr>
                        <th className="ant-table-cell ant-table-column-has-sorters">
                          <div className="ant-table-filter-column">
                            <span className="ant-table-column-title">
                              <div className="ant-table-column-sorters">
                                <span className="ant-table-column-title">Name</span>
                                <span className="ant-table-column-sorter">
                                  <span className="ant-table-column-sorter-inner">
                                    <span
                                      role="img"
                                      aria-label="caret-down"
                                      className="anticon anticon-caret-down ant-table-column-sorter-down"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        data-icon="caret-down"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </span>
                            <span
                              role="button"
                              tabindex="-1"
                              className="ant-dropdown-trigger ant-table-filter-trigger"
                            >
                              <span
                                role="img"
                                aria-label="filter"
                                className="anticon anticon-filter"
                              >
                                <svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  data-icon="filter"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </th>
                        <th className="ant-table-cell ant-table-column-sort ant-table-column-has-sorters">
                          <div className="ant-table-column-sorters">
                            <span className="ant-table-column-title">Age</span>
                            <span className="ant-table-column-sorter ant-table-column-sorter-full">
                              <span className="ant-table-column-sorter-inner">
                                <span
                                  role="img"
                                  aria-label="caret-up"
                                  className="anticon anticon-caret-up ant-table-column-sorter-up"
                                >
                                  <svg
                                    viewBox="0 0 1024 1024"
                                    focusable="false"
                                    data-icon="caret-up"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                  </svg>
                                </span>
                                <span
                                  role="img"
                                  aria-label="caret-down"
                                  className="anticon anticon-caret-down ant-table-column-sorter-down active"
                                >
                                  <svg
                                    viewBox="0 0 1024 1024"
                                    focusable="false"
                                    data-icon="caret-down"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                          </div>
                        </th>
                        <th className="ant-table-cell">
                          <div className="ant-table-filter-column">
                            <span className="ant-table-column-title">Address</span>
                            <span
                              role="button"
                              tabindex="-1"
                              className="ant-dropdown-trigger ant-table-filter-trigger"
                            >
                              <span
                                role="img"
                                aria-label="filter"
                                className="anticon anticon-filter"
                              >
                                <svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  data-icon="filter"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </th>
                        <th className="ant-table-cell" style={{textAlign: "center"}}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="ant-table-tbody">
                      <tr
                        data-row-key="2"
                        className="ant-table-row ant-table-row-level-0 ant-row-table-active"
                      >
                        <td className="ant-table-cell">Jim Green</td>
                        <td className="ant-table-cell ant-table-column-sort">42</td>
                        <td className="ant-table-cell">London No. 1 Lake Park</td>
                        <td className="ant-table-cell" style={{textAlign: "center"}}>
                          <div
                            className="ant-space ant-space-horizontal ant-space-align-center"
                            style={{gap: "16px"}}
                          >
                            <div className="ant-space-item" >
                              Invite{" "}
                            </div>
                            <div className="ant-space-item" >
                              Jim Green
                            </div>
                            <div className="ant-space-item">
                              <button
                                type="button"
                                className="ant-btn ant-btn-default"
                              >
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-row-key="1"
                        className="ant-table-row ant-table-row-level-0 ant-row-table-active"
                      >
                        <td className="ant-table-cell">John Brown</td>
                        <td className="ant-table-cell ant-table-column-sort">32</td>
                        <td className="ant-table-cell">New York No. 1 Lake Park</td>
                        <td className="ant-table-cell" style={{textAlign: "center"}}>
                          <div
                            className="ant-space ant-space-horizontal ant-space-align-center"
                            style={{gap: "16px"}}
                          >
                            <div className="ant-space-item" >
                              Invite{" "}
                            </div>
                            <div className="ant-space-item" >
                              John Brown
                            </div>
                            <div className="ant-space-item">
                              <button
                                type="button"
                                className="ant-btn ant-btn-default"
                              >
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-row-key="3"
                        className="ant-table-row ant-table-row-level-0 ant-row-table-active"
                      >
                        <td className="ant-table-cell">Joe Black</td>
                        <td className="ant-table-cell ant-table-column-sort">32</td>
                        <td className="ant-table-cell">Sidney No. 1 Lake Park</td>
                        <td className="ant-table-cell" style={{textAlign: "center"}}>
                          <div
                            className="ant-space ant-space-horizontal ant-space-align-center"
                            style={{gap: "16px"}}
                          >
                            <div className="ant-space-item" >
                              Invite{" "}
                            </div>
                            <div className="ant-space-item" >
                              Joe Black
                            </div>
                            <div className="ant-space-item">
                              <button
                                type="button"
                                className="ant-btn ant-btn-default"
                              >
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-row-key="4"
                        className="ant-table-row ant-table-row-level-0 ant-row-table-active"
                      >
                        <td className="ant-table-cell">Jim Red</td>
                        <td className="ant-table-cell ant-table-column-sort">32</td>
                        <td className="ant-table-cell">London No. 2 Lake Park</td>
                        <td className="ant-table-cell" style={{textAlign: "center"}}>
                          <div
                            className="ant-space ant-space-horizontal ant-space-align-center"
                            style={{gap: "16px"}}
                          >
                            <div className="ant-space-item" >
                              Invite{" "}
                            </div>
                            <div className="ant-space-item" >
                              Jim Red
                            </div>
                            <div className="ant-space-item">
                              <button
                                type="button"
                                className="ant-btn ant-btn-default"
                              >
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <ul
              className="ant-pagination mini ant-table-pagination ant-table-pagination-right"
              unselectable="unselectable"
            >
              <li
                title="前のページ"
                className="ant-pagination-prev ant-pagination-disabled"
                aria-disabled="true"
              >
                <button
                  className="ant-pagination-item-link"
                  type="button"
                  tabindex="-1"
                  disabled=""
                >
                  <span
                    role="img"
                    aria-label="left"
                    className="anticon anticon-left"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="left"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                    </svg>
                  </span>
                </button>
              </li>
              <li
                title="1"
                className="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                tabindex="0"
              >
                <a rel="nofollow">1</a>
              </li>
              <li
                title="次のページ"
                className="ant-pagination-next ant-pagination-disabled"
                aria-disabled="true"
              >
                <button
                  className="ant-pagination-item-link"
                  type="button"
                  tabindex="-1"
                  disabled=""
                >
                  <span
                    role="img"
                    aria-label="right"
                    className="anticon anticon-right"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="right"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserTable;
