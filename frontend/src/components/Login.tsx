import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import "@fontsource/inter";
import ModeToggle from "./ModeToggle";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchLogin } from "../redux/slices/Login";
import { useNavigate } from "react-router";

export default function LoginFinal() {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [data, setData] = React.useState({login: "", password: ""});
	const handleData = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
		setData({...data, [name]: e.target.value});
	};

	const auth = useAppSelector((state) => state.login).login;

	async function submit () {
		try {
			const answer = await dispatch(fetchLogin(data.login));
			return answer?.payload !== "" ? navigate("/all-details") : alert("Неверный логин или пароль");
		} catch {
			console.log("ERROR");
		}
	}

	return (
		<main>
			<ModeToggle />
			<CssBaseline />
			<Sheet sx={{ width: 300, mx: "auto", my: 30, py: 3, px: 2, display: "flex", flexDirection: "column", gap: 2, borderRadius: "sm", boxShadow: "md",}} variant="outlined">
				<div>
					<Typography level="h4" component="h1">
						<b>Welcome!</b>
					</Typography>
					<Typography level="body-sm">Sign in to continue.</Typography>
				</div>
				<FormControl>
					<FormLabel>Login</FormLabel>
					<Input name="login" type="text" placeholder="login" value={data.login} onChange={(e) => handleData(e, "login")}/>
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>
					<Input name="password" type="password" placeholder="password" value={data.password} onChange={(e) => handleData(e, "password")}/>
				</FormControl>
				<Button sx={{ mt: 1 /* margin top */ }} onClick={() => submit()}>
					<p>Log in</p>	
				</Button>
				<Typography
					endDecorator={<Link href="/sign-in">Sign up</Link>}
					fontSize="sm"
					sx={{ alignSelf: "center" }}
				>
          Don&apos;t have an account?
				</Typography>
			</Sheet>
		</main>
	);
}