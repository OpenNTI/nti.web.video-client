import Button from "@mui/material/Button";
import Text from "@mui/material/Typography";

export default function Index() {
	return (
		<div>
			<Text variant="h1">
				Welcome to the NextThought Video Production Helper App
			</Text>
			<Text variant="body1">
				For more information please contact{" "}
				<Button variant="text">support.</Button>
			</Text>
		</div>
	);
}
