import { Tag, Space, Button } from "antd";

const columns = (DeleteRow) =>{
  return (
    [
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
        render: (text, record, index) => (
          <Space size="middle">
            <p>Invite {record.name}</p>
            {/* <Button onClick={()=>DeleteRow(index)}>Delete<Button/> */}
            <Button onClick={()=>DeleteRow(index)}>Delete</Button>
          </Space>
        ),
      },
    ]
  );

} 


export default columns;
