import { Button,  Space } from "antd";
const columnsData = (deleteRow)=>{
return(
	[
		{
			title: 'Name',
			dataIndex: 'name',
			filters: [
			  {
				text: 'Joe',
				value: 'Joe',
			  },
			  {
				text: 'Jim',
				value: 'Jim',
			  },
			  {
				text: 'Submenu',
				value: 'Submenu',
				children: [
				  {
					text: 'Green',
					value: 'Green',
				  },
				  {
					text: 'Black',
					value: 'Black',
				  },
				],
			  },
			],
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['descend'],
		  },
		  {
			title: 'Age',
			dataIndex: 'age',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		  },
		  {
			title: 'Address',
			dataIndex: 'address',
			filters: [
			  {
				text: 'London',
				value: 'London',
			  },
			  {
				text: 'New York',
				value: 'New York',
			  },
			],
			onFilter: (value, record) => record.address.indexOf(value) === 0,
		  },
	  {
		title: "Action",
		key: "action",
		align:"center",
		render: (text, record, zIndex) => (
			<Space size="middle">
			Invite {record.name}
			<Button onClick={()=>deleteRow(zIndex,record)}>Delete</Button>
		</Space>
		),
	  },
	]
);

}

export default columnsData;
