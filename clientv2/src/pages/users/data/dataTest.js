import React from "react";

const dataTest = () => {
  return (
    <>
      <div className="ant-table-wrapper">
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <div className="ant-table">
              <div className="ant-table-container">
                <div className="ant-table-content">
                  <table style={{ tableLayout: "auto" }}>
                    <colgroup></colgroup>
                    <thead className="ant-table-thead">
                      <tr>
                        <th className="ant-table-cell">Name</th>
                        <th className="ant-table-cell">Age</th>
                        <th className="ant-table-cell">Address</th>
                        <th className="ant-table-cell">Tags</th>
                        <th className="ant-table-cell">Action</th>
                      </tr>
                    </thead>
                    <tbody className="ant-table-tbody">
                      <tr
                        data-row-key="1"
                        className="ant-table-row ant-table-row-level-0"
                      >
                        <td className="ant-table-cell">
                          <p>John Brown</p>
                        </td>
                        <td className="ant-table-cell">32</td>
                        <td className="ant-table-cell">
                          New York No. 1 Lake Park
                        </td>
                        <td className="ant-table-cell">
                          <span className="ant-tag ant-tag-green">NICE</span>
                          <span className="ant-tag ant-tag-geekblue">
                            DEVELOPER
                          </span>
                        </td>
                        <td className="ant-table-cell">
                          <div
                            className="ant-space ant-space-horizontal ant-space-align-center"
                            style={{ gap: "16px" }}
                          >
                            <div className="ant-space-item" style={{}}>
                              <p>Invite John Brown</p>
                            </div>
                            <div className="ant-space-item">
                              <p>Delete</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-row-key="2"
                        className="ant-table-row ant-table-row-level-0"
                      >
                        <td className="ant-table-cell">
                          <p>Jim Green</p>
                        </td>
                        <td className="ant-table-cell">42</td>
                        <td className="ant-table-cell">
                          London No. 1 Lake Park
                        </td>
                        <td className="ant-table-cell">
                          <span className="ant-tag ant-tag-volcano">LOSER</span>
                        </td>
                        <td className="ant-table-cell">
                          <div
                            className="ant-space ant-space-horizontal ant-space-align-center"
                            style={{ gap: "16px" }}
                          >
                            <div className="ant-space-item" style={{}}>
                              <p>Invite Jim Green</p>
                            </div>
                            <div className="ant-space-item">
                              <p>Delete</p>
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
              className="ant-pagination ant-table-pagination ant-table-pagination-right"
              unselectable="unselectable"
            >
              <li
                title="前のページ"
                className="ant-pagination-prev ant-pagination-disabled"
                ariaDisabled="true"
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
                title="2"
                className="ant-pagination-item ant-pagination-item-2 "
                tabindex="0"
              >
                <a rel="nofollow">2</a>
              </li>
              <li
                title="次のページ"
                tabindex="0"
                className="ant-pagination-next"
                ariaDisabled="false"
              >
                <button
                  className="ant-pagination-item-link"
                  type="button"
                  tabindex="-1"
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

export default dataTest;
