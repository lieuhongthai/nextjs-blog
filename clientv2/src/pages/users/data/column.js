import { Tag, Space, Button } from "antd";

const columns = (DeleteRow) =>{
  return (
    [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: name => `${name.first} ${name.last}`,
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: "gender",
      },
      {
        title: "Location",
        dataIndex: "location",
        key: "location",
        render: location => `${location.state}`
      },
      {
        title: "Email",
        key: "email",
        dataIndex: "email",
        render: (email) => (
          <>
                <Tag color={"green"} key={email}>
                  {email.toUpperCase()}
                </Tag>
          </>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (text, record, index) => (
          <Space size="middle">
            <Button onClick={()=>DeleteRow(index)} type="ghost">Delete</Button>
          </Space>
        ),
      },
    ]
  );

} 


export default columns;
