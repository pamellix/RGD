import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchDetail } from "../../redux/slices/GetDetail";
import { Button } from "@mui/joy";
import { NavLink } from "react-router-dom";
import styles from "./Styles.module.css";

const Detail: React.FC = () => {

	const params = useParams();
	const dispatch = useAppDispatch();
	const paramsSlug: string | undefined = params.slug;

	useEffect(() => {
		async function getDetail () {
			try {
				await dispatch(fetchDetail(paramsSlug ? paramsSlug : ""));
			} catch {
				console.log("ERROR");
			}
		}

		getDetail();
	}, []);

	const data = useAppSelector((state) => state.getDetail);

	return (<section className={styles.detail}>
		<p>ID: {data.id}</p>
		<h2>Деталь: {data.decNumber}</h2>
		<p>Первое использование: {data.firstUse}</p>
		<p>Имя: {data.name}</p>
		<p>Код: {data.code}</p>
		<p>Дата создания: {data.makeDate}</p>
		<span style={{display: "block"}}>Заметки: {data.note}</span>
		<NavLink to="../all-details">Вернуться ко всем деталям</NavLink>
	</section>);
};

export default Detail;