import React, {ChangeEvent, useEffect, useState} from "react";
import { useAppDispatch } from "../../redux/store";
import { useAppSelector } from "../../redux/store";
import { fetchDetails } from "../../redux/slices/GetDetails";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import styles from "./Styles.module.css";
import * as Inter from "../../interfaces/Interfaces";
import "react-toastify/dist/ReactToastify.css";
import { isEmptyObject } from "./NullObject";
import NameSelect from "../selects/NameSelect";
import AddDetail from "../popups/AddDetail";
import DecTable from "../tables/DecTable";


const DetailsTable: React.FC = () => {

	const dispatch = useAppDispatch();

	const [filter, setFilter] = useState({name: "", naming: "", coder: "", firstUse: "", decNumber: ""});
	const [toggle, setToggle] = React.useState(false);
    
	const handleToggle = () => {
		setToggle(toggle => !toggle);
	};

	const handleFilter = (e: ChangeEvent<HTMLInputElement>, name: string) => {
		setFilter({...filter, [name]: e.target.value});
	};

	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null,
	) => {setFilter({...filter, name: newValue!});};

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
			setFilter({name: "", naming: "", coder: "", firstUse: "", decNumber: ""});
			await dispatch(fetchDetails());
		} catch {
			console.log("ERROR 404");
		}
	}


	const data: Inter.DetailsTable[] = useAppSelector((state) => state.getDetails);
	

	if (!Array.isArray(data)) {
		return null;
	}

	const initData = data.filter((item) => {
		if (filter.decNumber && !item.decNumber.includes(filter.decNumber)) {
			return false;
		}
		if (filter.firstUse && !item.firstUse.includes(filter.firstUse)) {
			return false;
		}
		if (filter.naming && !item.name.includes(filter.naming)) {
			return false;
		}
		if (filter.coder && !item.code.includes(filter.coder)) {
			return false;
		}
		if (filter.name && !item.decNumber.includes(filter.name)) {
			return false;
		}
		return true;
	});

	return (<main className={styles.detailsTable}>
		<div style={{ width: "100%" }}>
			<div className={styles.detailsButtons}>
				<Button onClick={() => handleToggle()}>Добавить деталь</Button>
				<Button onClick={() => updateDB()}>Обновить данные</Button>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<NameSelect data={filter.name} handleData={handleChange}/>
				<Input style={{ width: "18%" }}placeholder="Искать по дец.номеру" variant="outlined" className={styles.input} value={filter.decNumber} onChange={(e) => handleFilter(e, "decNumber")}/>
				<Input style={{ width: "18%" }} placeholder="Наименование" variant="outlined" className={styles.input} value={filter.naming} onChange={(e) => handleFilter(e, "naming")}/>
				<Input style={{ width: "18%" }} placeholder="Шифр" variant="outlined" className={styles.input} value={filter.coder} onChange={(e) => handleFilter(e, "coder")}/>
				<Input style={{ width: "18%" }} placeholder="Первое Использование" variant="outlined" className={styles.input} value={filter.firstUse} onChange={(e) => handleFilter(e, "firstUse")}/>
			</div>
		</div>
		<DecTable data={initData}/>
		<AddDetail toggle={toggle} handleToggle={handleToggle}/>
	</main>);
};

export default DetailsTable;