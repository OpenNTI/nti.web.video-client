import type { Fetcher } from "@remix-run/react/transition";
import React, { useEffect } from "react";

type FetchOnMountProps = {
	onMount: () => void;
	children: React.ReactNode;
};

export default function OnMount({ onMount, children }: FetchOnMountProps) {
	useEffect(() => {
		onMount();
	}, [onMount]);

	return <>{children}</>;
}
