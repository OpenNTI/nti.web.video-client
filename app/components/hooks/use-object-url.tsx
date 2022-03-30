import { useState, useEffect, useMemo } from "react";

export function useBlob(content: string, type: string) {
	return useMemo(() => {
		if (!content) {
			return null;
		}

		return new Blob([content], { type });
	}, [content, type]);
}

export function useObjectURL(blob: Blob | null) {
	const [objectURL, setObjectURL] = useState<string | null>(null);

	useEffect(() => {
		if (!blob) {
			return;
		}

		const url = URL.createObjectURL(blob);
		setObjectURL(url);

		return () => {
			URL.revokeObjectURL(url);
			setObjectURL(null);
		};
	}, [blob]);

	return objectURL;
}
