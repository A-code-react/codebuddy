import { styled } from '@mui/material/styles';
import { Search, Mic, SearchOutlined } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    '& .MuiInputBase-input::placeholder': {
        color: 'rgba(0, 0, 0, 0.6)',
    },
}));

const WhiteBackground = styled('div')(() => ({
    background: 'white',
    borderRadius: '24px', // Increase the border-radius for a rounded appearance
    display: 'flex',
    color: "blue",
    alignItems: 'center',
    margin: '20px auto', // Add margin for centering and spacing from top/bottom
    maxWidth: '600px', // Set a max-width for responsiveness
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
    '& > *': {
        gap: 1,
        margin: 'auto',
    },
}));

const SearchBar = () => {
    return (
        <WhiteBackground>
            <SearchIconWrapper>
                <Search />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Mic />
            <CenterFocusWeakIcon />
            <SearchOutlined />
        </WhiteBackground>
    );
}

export default SearchBar;
