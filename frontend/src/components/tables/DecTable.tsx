import React from "react";
import styles from "../details/Styles.module.css";
import Table from "@mui/joy/Table";
import * as Inter from "../../interfaces/Interfaces";
import { NavLink } from "react-router-dom";

interface Props {
    data: Inter.DetailsTable[];
}

const DecTable: React.FC<Props> = ({data}) => {
	return(<Table borderAxis="bothBetween" color="primary" size="lg" stripe="odd" variant="outlined">
		<thead>
			<tr>
				<th style={{ width: "12%" }}>Шифр</th>
				<th style={{ width: "25%" }}>Дец. номер</th>
				<th style={{ width: "13%" }}>Наименование</th>
				<th style={{ width: "13%" }}>Дата создания</th>
				<th style={{ width: "13%" }}>Создатель</th>
				<th style={{ width: "15%" }}>Перв. использование</th>
			</tr>
		</thead>
		<tbody>
			{data.map((item, index) => (
				<tr key={index}>
					<td>{item.code}</td>
					<NavLink to={`${item.decNumber}`}>
						<td>{item.decNumber}</td>
					</NavLink>
					<td>{item.name}</td>
					<td>{item.makeDate}</td>
					<td>{item.creator}</td>
					<td>{item.firstUse}</td>
				</tr>
			))}
		</tbody>
	</Table>);
};

export default DecTable;