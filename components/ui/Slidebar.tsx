import { useContext } from 'react'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, Typography, ListItemText } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { UIContext } from '@/context/ui';

const menuItem: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']


const Slidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext( UIContext );

    return (
        <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>

            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }} >
                    <Typography variant="h4">
                        Menu
                    </Typography>
                </Box>

                <List>
                    {
                        menuItem.map((texto, index) => (
                            <ListItem button key={texto}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                    <ListItemText primary={texto} />
                                </ListItemIcon>
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItem.map((texto, index) => (
                            <ListItem button key={texto}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                    <ListItemText primary={texto} />
                                </ListItemIcon>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}

export default Slidebar