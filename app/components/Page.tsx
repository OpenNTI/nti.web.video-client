import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

type PageProps = {
	title: string;
	children: React.ReactNode;
};

export default function Page({ title, children }: PageProps) {
	return (
		<Container maxWidth="md" sx={{ mt: 10 }}>
			<Paper elevation={3} sx={{ py: 3 }}>
				<Typography align="center" variant="h5" component="h1" mb={5}>
					{title}
				</Typography>
				{children}
			</Paper>
		</Container>
	);
}
