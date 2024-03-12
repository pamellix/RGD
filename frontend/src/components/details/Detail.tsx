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
		<h2>Деталь: {data.detail}</h2>
		<p>Классификатор: {data.classificator}</p>
		<span style={{display: "block"}}>Описание: {data.description}</span>
		<NavLink to="../all-details">Вернуться ко всем деталям</NavLink>
	</section>);
};

export default Detail;