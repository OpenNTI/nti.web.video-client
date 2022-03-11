import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

type InputBreadCrumbProps = {
	children: React.ReactNode;
};

const GridItem = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

export default function InputBreadCrumb({ children }: InputBreadCrumbProps) {
	const cmps = React.Children.toArray(children);

	const breadcrumbs = cmps.slice(0, -1);
	const focused = cmps[cmps.length - 1];

	return (
		<Grid
			container
			spacing={2}
			padding={2}
			sx={{ justifyContent: "center" }}
		>
			{breadcrumbs.map((c, key) => (
				<GridItem item xs={3} key={`breadcrumb-${key}`}>
					{c}
				</GridItem>
			))}
			{focused ? (
				<GridItem item xs={12}>
					{focused}
				</GridItem>
			) : null}
		</Grid>
	);
}
