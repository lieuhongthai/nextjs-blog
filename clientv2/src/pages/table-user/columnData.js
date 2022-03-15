import { Button, Space } from "antd";
import { Tag} from 'antd';
const columnsData = (deleteRow) => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (text, record, zIndex) => (
        <Space size="middle">
          Invite {record.name}
          <Button onClick={() => deleteRow(zIndex, record)}>Delete</Button>
        </Space>
      ),
    },
  ];
};

export default columnsData;
