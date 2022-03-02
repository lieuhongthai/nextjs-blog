import React from "react";
import { PageHeader } from "antd";
const PageHeaderLayout = ({ title, subTitle }) => {
  <PageHeader
    className="site-page-header"
    title={title || "title"}
    subTitle={subTitle || "This is a subtitle"}
  />;
};

export default PageHeaderLayout;
