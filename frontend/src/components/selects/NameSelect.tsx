import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import * as Inter from "../../interfaces/Interfaces";

const NameSelect: React.FC<Inter.IPropsSelect> = ({data, handleData}) => {

	return (
		<Select style={{ width: "18%", height: "34px" }} value={data} onChange={handleData}>
			<Option value="">Все</Option>
			<Option value="ПРГС">ПРГС</Option>
			<Option value="ПРГСЭ">ПРГСЭ</Option>
			<Option value="ТТСК">ТТСК</Option>
		</Select>
	);
};

export default NameSelect;