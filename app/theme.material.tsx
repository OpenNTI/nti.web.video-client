import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@emotion/cache";

const CacheKey = "nt-css";
export const cache = createEmotionCache({ key: CacheKey });

export const Theme = createTheme({
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

export const Provider = (props: object) => (
	<CacheProvider value={cache}>
		<ThemeProvider theme={Theme} {...props} />
	</CacheProvider>
);
