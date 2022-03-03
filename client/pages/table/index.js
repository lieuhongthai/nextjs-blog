import * as React from "react";
import { Table } from "antd";
import { columns, data } from "./dataTable";
import io from "socket.io-client";
import {useSnackbar} from "notistack"
export default function TableLoadWithSocketIo(props) {
	const {enqueueSnackbar} = useSnackbar();
	const socket = React.useRef();
	const [rows, setRows] = React.useState([]);
	const [ids, setIds] = React.useState("");
	const [room, setRoom] = React.useState("room1");
	const [dataIsDelete, setDataIsDelete] = React.useState(null);
	React.useEffect(() => {
		//connect socket io
		socket.current = io.connect("http://localhost:8080");

		socket.current.on("getIds", (data) => {
			setIds(data);
		});
		//join room
		socket.current.emit("setJoinRoom", room);
		//joined room
		socket.current.on("successfulConnection", (data) =>
			console.log(12005, "log : ", data, props)
		);
		socket.current.on("sendNotificationDeleteRowClient", (data) => {
			setDataIsDelete(data);
		});
		setRows(data);
		return () => {
			socket.current.disconnect();
		};
	}, []);
	React.useEffect(() => {
		if (dataIsDelete !== null) {
			afterDeleteRow(dataIsDelete);
		}
	}, [dataIsDelete]);
	const deleteRow = (zIndex, row) => {
		const dataRow = rows.filter((value, index, arr) => index !== zIndex);
		setRows(dataRow);
		socket.current.emit("sendNotificationDeleteRowServer", zIndex, row, room);
	};
	const afterDeleteRow = (row) => {
		const dataRow = rows.filter((value, index, arr) => {
			console.log(
				12005,
				"value : ",
				value,
				"row : ",
				row,
				value.key !== row.key
			);
			return value.key !== row.key;
		});
		setRows(dataRow);
		enqueueSnackbar("messsage");
	};
	return (
		<>
			<Table columns={columns(deleteRow)} dataSource={rows} />
		</>
	);
}
