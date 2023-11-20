import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import SideNav from './components/sideNav'; // Import the new component

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>
					<SideNav />
					{/* Use the SideNavigation component */}
					<Box
						component='main'
						sx={{
							flexGrow: 1,
							bgcolor: 'background.default',
							ml: `240px`,
							mt: [
								'48px',
								'56px',
								'64px',
							],
							p: 3,
						}}
					>
						{children}
					</Box>
				</ThemeRegistry>
			</body>
		</html>
	);
}
