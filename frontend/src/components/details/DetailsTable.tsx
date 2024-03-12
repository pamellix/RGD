import React, {ChangeEvent, useEffect, useState} from "react";
import Table from "@mui/joy/Table";
import { useAppDispatch } from "../../redux/store";
import { useAppSelector } from "../../redux/store";
import { fetchDetails } from "../../redux/slices/GetDetails";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import styles from "./Styles.module.css";
import * as Inter from "../../interfaces/Interfaces";
import { NavLink } from "react-router-dom";
import { fetchCreateDetails } from "../../redux/slices/CreateDetail";


const DetailsTable: React.FC = () => {

	const dispatch = useAppDispatch();
	const [toggle, setToggle] = useState(false);
	const [detailData, setDetailData] = useState({devOrg: "", classChar: "", classDes: "" , registryNum: "", docCode: "" , detail: "", description: ""});
	const [filter, setFilter] = useState("");

	const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	const handleDetailData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
		setDetailData({...detailData, [name]: e.target.value});
	};

	const handleToggle = () => {
		setToggle(toggle => !toggle);
	};

	useEffect(() => {
		async function getAllDetails () {
			try {
				await dispatch(fetchDetails());
			} catch {
				console.log("ERROR 404");
			}
		}
    
		getAllDetails();
		return;
	}, []);

	async function updateDB() {
		try {
			await dispatch(fetchDetails());
		} catch {
			console.log("ERROR 404");
		}
	}


	const data: Inter.DetailsTable[] = useAppSelector((state) => state.getDetails);

	async function submit () {

		if (detailData.detail.length > 255 || detailData.classDes.length > 255 || detailData.description.length > 255) {
			alert("Слишком много букв в одном из полей!");
			return;
		}

		const data: Inter.CreateDetail = {
			detail: `${detailData.devOrg}.${detailData.classChar}.${detailData.registryNum}${detailData.docCode === "" ? "" : ` ${detailData.docCode}`}`,
			classificator: detailData.classDes,
			description: detailData.description
		};

		try {
			await dispatch(fetchCreateDetails(data));
		} catch {
			console.log("ERROR 405");
		}

	}

	if (!Array.isArray(data)) {
		return null;
	}

	const initData = filter === "" ? data : data.filter((item) => item.detail.includes(filter));

	return (<main className={styles.detailsTable}>
		<div style={{ width: "100%" }}>
			<div className={styles.detailsButtons}>
				<Button onClick={() => handleToggle()}>Добавить деталь</Button>
				<Button onClick={() => updateDB()}>Обновить данные</Button>
			</div>
			<Input placeholder="Искать по коду" variant="outlined" className={styles.input} value={filter} onChange={(e) => handleFilter(e)}/>
		</div>
		<Table borderAxis="bothBetween" color="neutral" size="lg" stripe="odd" variant="outlined">
			<thead>
				<tr>
					<th style={{ width: "20%" }}>id</th>
					<th style={{ width: "80%" }}>Деталь</th>
				</tr>
			</thead>
			<tbody>
				{initData.map((item, index) => (
					<tr key={index}>
						<NavLink to={`${item.detail}`}>
							<td>{item.id}</td>
						</NavLink>
						<td>{item.detail}</td>
						{/* <td>{item.description}</td> */}
					</tr>
				))}
			</tbody>
		</Table>
		<div className={styles.popUp} style={{ display: `${toggle ? "block" : "none"}`}}>
			<div className={styles.popUpWindow}>
				<Button onClick={() => handleToggle()}>Закрыть</Button>
				<Input placeholder="Код организации разработчика" variant="outlined" className={styles.input} value={detailData.devOrg} onChange={(e) => handleDetailData(e, "devOrg")}/>
				<Input placeholder="Код класс. характеристики" variant="outlined" className={styles.input} value={detailData.classChar} onChange={(e) => handleDetailData(e, "classChar")}/>
				<p>Вставьте описание класс. характеристики по <a href="https://classinform.ru/ok-eskd/kod" target="_blank" rel="noopener noreferrer">ЕСДК (ОК 012-93)</a></p>
				<Input placeholder="Класс. хар. (макс: 255 сим.)" variant="outlined" className={styles.input} value={detailData.classDes} onChange={(e) => handleDetailData(e, "classDes")}/>
				<Input placeholder="Порядковый рег. номер" variant="outlined" className={styles.input} value={detailData.registryNum} onChange={(e) => handleDetailData(e, "registryNum")}/>
				<Textarea minRows={3} placeholder="Описание" variant="outlined" className={styles.input} value={detailData.description} onChange={(e) => handleDetailData(e, "description")}/>
				<Input placeholder="Код документа (при необходимости)" variant="outlined" className={styles.input} value={detailData.docCode} onChange={(e) => handleDetailData(e, "docCode")}/>
				<Input variant="outlined" className={styles.input} value={`${detailData.devOrg}.${detailData.classChar}.${detailData.registryNum} ${detailData.docCode}`} readOnly/>
				<Button onClick={submit}>Добавить</Button>
			</div>
		</div>
	</main>);
};

export default DetailsTable;