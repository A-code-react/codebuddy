import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function DropDown() {

    return (
        <Box sx={{ display: "flex" }}>
            <List>
                <ListItem
                    disablePadding
                    sx={{ display: "block" }}

                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Dropdown"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                        <ExpandLessIcon />  <ExpandMoreIcon />
                    </ListItemButton>
                </ListItem>
                {/* <Collapse in={isCollapse} timeout="auto" unmountOnExit>
                        <List>
                            {["Option 1", "Option 2", "Option 3"].map((text, index) => (
                                <ListItem
                                    key={text}
                                    disablePadding
                                    sx={{ display: "block", paddingLeft: 4 }}
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? "initial" : "center",
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text}
                                            sx={{ opacity: open ? 1 : 0 }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse> */}
            </List>

            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                        sx={{ display: "block", paddingLeft: 4 }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
        </Box>
    );
}
