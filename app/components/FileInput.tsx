import { FilePond } from "react-filepond";
import styled from "@emotion/styled";

export default styled(FilePond)`
	width: 300px;

	& .filepond--credits {
		display: none;
	}

	& .filepond--drop-label {
		color: #4c4e53;
	}

	& .filepond--label-action {
		text-decoration-color: #babdc0;
	}

	& .filepond--panel-root {
		border-radius: 2em;
		background-color: #edf0f4;
		height: 1em;
	}

	& .filepond--item-panel {
		background-color: #595e68;
	}

	& .filepond--drip-blob {
		background-color: #7f8a9a;
	}
`;
