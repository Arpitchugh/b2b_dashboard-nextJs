'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DRAWER_WIDTH = 240;

const LINKS = [
	{ text: 'Overview', href: '/', icon: HomeIcon },
	{ text: 'Deals', href: '/deals', icon: StarIcon },
	{ text: 'Inventory', href: '/inventory', icon: ChecklistIcon },
	{ text: 'Transactions', href: '/transactions', icon: ChecklistIcon },
	{ text: 'TDS', href: '/tds', icon: ChecklistIcon },
	{ text: 'Legal', href: '/legal', icon: ChecklistIcon },
	{ text: 'Data Cellar', href: '/data-cellar', icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
	{
		text: 'Intugine',
		subText: 'Intugine Solutions Pvt LTD',
		icon: AccountCircleIcon,
		href: '/profile',
	},
];

export default function SideNav() {
	const [activeLink, setActiveLink] = React.useState('/');
	const handleLinkClick = href => {
		setActiveLink(href);
	};
	return (
		<Drawer
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: DRAWER_WIDTH,
					boxSizing: 'border-box',
					height: '100%',
					background: '#0C0C0C',
				},
			}}
			variant='permanent'
			anchor='left'
		>
			<Box
				sx={{
					display: 'flex',
					gap: '10px',
					alignItems: 'center',
					mb: 6,
					mx: 3,
					mt: 3,
				}}
			>
				<Image
					src='./icons/tap_icon.svg'
					width={30}
					height={30}
					alt='Tap logo'
				/>
				<Image
					src='./icons/tap_text.svg'
					width={45}
					height={40}
					alt='Tap text'
				/>
			</Box>
			<List>
				{LINKS.map(({ text, href, icon: Icon }) => {
					const isActive = href === activeLink;
					return (
						<ListItem
							key={href}
							disablePadding
						>
							<ListItemButton
								component={Link}
								href={href}
								onClick={() =>
									handleLinkClick(
										href
									)
								} // Set the active link on click
								sx={{
									backgroundColor:
										isActive
											? '#yourSelectedBackgroundColor'
											: '',
									'&:hover': {
										backgroundColor:
											'#yourHoverBackgroundColor',
									},
									color: isActive
										? '#FFFFFF'
										: '#6D6D6D',
								}}
							>
								<ListItemIcon>
									<Icon
										sx={{
											fontSize: '2rem',
											color: isActive
												? '#FFFFFF'
												: '#6D6D6D',
										}}
									/>
								</ListItemIcon>
								<ListItemText
									primary={
										text
									}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
			<Divider sx={{ mt: 'auto' }} />
			<List
				sx={{
					color: '#D4D4D4',
				}}
			>
				{PLACEHOLDER_LINKS.map(
					({
						text,
						subText,
						href,
						icon: Icon,
					}) => (
						<ListItem
							key={text}
							disablePadding
						>
							<ListItemButton
								component={Link}
								href={href}
								onClick={() =>
									handleLinkClick(
										href
									)
								}
							>
								<ListItemIcon
									sx={{
										color: '#6D6D6D',
									}}
								>
									<Icon />
								</ListItemIcon>

								<Box>
									<Typography
										sx={{
											color: '#D4D4D4',
											fontWeight: '700',
										}}
									>
										{
											text
										}
									</Typography>
									<Typography
										sx={{
											color: '#C8C8C8',
										}}
									>
										{
											subText
										}
									</Typography>
								</Box>
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
		</Drawer>
	);
}
