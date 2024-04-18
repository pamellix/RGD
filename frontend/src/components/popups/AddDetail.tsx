import React from "react";
import styles from "../details/Styles.module.css";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import {ToastContainer, toast} from "react-toastify";
import * as Inter from "../../interfaces/Interfaces";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCreateDetails } from "../../redux/slices/CreateDetail";

interface Props {
    toggle: boolean;
    handleToggle: () => void;
}

const AddDetail: React.FC<Props> = ({toggle, handleToggle}) => {

	const dispatch = useAppDispatch();

	const name = useAppSelector((state) => state.login);
	const [detailData, setDetailData] = React.useState({devOrg: "", classChar: "", classDes: "" , registryNum: "", docCode: "" , detail: "", description: "", firstUse: ""});
    
	const handleDetailData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
		setDetailData({...detailData, [name]: e.target.value});
	};

	async function submit () {
		if (detailData.detail.length > 255 || detailData.classDes.length > 255 || detailData.description.length > 255) {
			alert("Слишком много букв в одном из полей!");
			return;
		}

		const currentDate = new Date();

		const data: Inter.CreateDetail = {
			code: "000",
			creator: name.login,
			makeDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`,
			decNumber: `${detailData.devOrg}.${detailData.classChar}.${detailData.registryNum}${detailData.docCode === "" ? "" : ` ${detailData.docCode}`}`,
			name: detailData.classDes,
			note: detailData.description,
			firstUse: detailData.firstUse
		};

		try {
			await dispatch(fetchCreateDetails(data));
			toast.info("Success!");
		} catch {
			console.log("ERROR 405");
		}

	}

	return (
		<>
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
					<Input placeholder="Первое использование" variant="outlined" className={styles.input} value={detailData.firstUse} onChange={(e) => handleDetailData(e, "firstUse")}/>
					<Input variant="outlined" className={styles.input} value={`${detailData.devOrg}.${detailData.classChar}.${detailData.registryNum} ${detailData.docCode}`} readOnly/>
					<Button onClick={submit}>Добавить</Button>
				</div>
			</div>
			<ToastContainer/>
		</>
	);
};

export default AddDetail;