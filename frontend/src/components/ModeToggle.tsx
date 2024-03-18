import React from "react";
import Button from "@mui/joy/Button";
import { useColorScheme } from "@mui/joy/styles";

export default function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);
  
	// necessary for server-side rendering
	// because mode is undefined on the server
	React.useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return <Button variant="soft">Change mode</Button>;
	}
  
	return (
		<Button
			variant="soft"
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}
		>
			{mode === "light" ? "Turn dark" : "Turn light"}
		</Button>
	);
}