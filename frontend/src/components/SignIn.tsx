import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import "@fontsource/inter";
import { useAppDispatch } from "../redux/store";
import { useNavigate } from "react-router";
import { fetchCreateUser } from "../redux/slices/SignUp";
import * as Inter from "../interfaces/Interfaces";

export default function SignIn() {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [data, setData] = React.useState({login: "", password: "", role: ""});
	const handleData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => {
		setData({...data, [name]: e.target.value});
	};

	async function submit () {

		const date: Inter.CreateUser = {
			login: data.login,
			password: data.password,
			role: data.role
		};

		try {
			await dispatch(fetchCreateUser(date));
			console.log("S");
		} catch {
			console.log("Такой пользователь уже существует");
		}

		navigate("/");
	}

	return (
		<main>
			<CssBaseline />
			<Sheet sx={{ width: 300, mx: "auto", my: 30, py: 3, px: 2, display: "flex", flexDirection: "column", gap: 2, borderRadius: "sm", boxShadow: "md",}} variant="outlined">
				<div>
					<Typography level="h4" component="h1">
						<b>Sign up</b>
					</Typography>
				</div>
				<FormControl>
					<FormLabel>Login</FormLabel>
					<Input name="login" type="text" placeholder="login" value={data.login} onChange={(e) => handleData(e, "login")}/>
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>
					<Input name="password" type="password" placeholder="password" value={data.password} onChange={(e) => handleData(e, "password")}/>
				</FormControl>
				<FormControl>
					<select value={data.role} onChange={(e) => handleData(e, "role")}>
						<option value="user">User</option>
						<option value="admin">Admin</option>
					</select>
				</FormControl>
				<Button sx={{ mt: 1 /* margin top */ }} onClick={() => submit()}>Sign in</Button>
				{/* <Typography
					endDecorator={<Link href="/sign-in">Sign up</Link>}
					fontSize="sm"
					sx={{ alignSelf: "center" }}
				>
          Don&apos;t have an account?
				</Typography> */}
			</Sheet>
		</main>
	);
}