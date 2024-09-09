import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };

  return (
    <React.Fragment >
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', display:{/*xl:"none", lg:"none",md:"none",*/sm:"inline",xs:"inline"}}}>
      
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 35, height: 35 ,backgroundColor:"#27374C"}}><MenuIcon/></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu className="menu-span-font"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt:-0.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 12,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link style={{textDecoration:"none"}} to="/deposit-confirmation">
        <MenuItem className="menu-span-item"  >
      
           <span >
           Deposit Confirmation
           </span>
           
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/deposit-confirmation-black">
        <MenuItem className="menu-span-item" >
       
          <span >
           Deposit Confirmation Black
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/withdrawal-request">
        <MenuItem className="menu-span-item" >
       
          <span >
          Withdarawal Request
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Divider />
        <Link style={{textDecoration:"none"}} to="/withdrawal-request-black">
        <MenuItem className="menu-span-item" >
       
          <span >
          Withdarawal Request Black
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-statement">
        <MenuItem className="menu-span-item" >
       
          <span >
          Account Statement
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-statement-black">
        <MenuItem className="menu-span-item" >
       
          <span >
          Account Statement Black
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/password-reset-request">
        <MenuItem className="menu-span-item" >
       
          <span >
           Password Reset Request
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/password-reset-request-black">
        <MenuItem className="menu-span-item" >
       
          <span >
           Password Reset Request Black
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/promotional-offer">
        <MenuItem className="menu-span-item" >
       
          <span >
           Promotional Offer
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/promotional-offer-black">
        <MenuItem className="menu-span-item" >
       
          <span >
           Promotional Offer Black
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/security-alert">
        <MenuItem className="menu-span-item" >
       
          <span >
           Security Alert
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/security-alert-black">
        <MenuItem className="menu-span-item" >
       
          <span >
           Security Alert Black
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/kyc">
        <MenuItem className="menu-span-item" >
       
          <span >
           Kyc
           </span>
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/kyc-black">
        <MenuItem className="menu-span-item" >
       
          <span >
           Kyc Black
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/welcome-message">
        <MenuItem className="menu-span-item" >
       
          <span >
           Welcome Message
           </span>
        </MenuItem>
        </Link>
        

        <Divider />
        <Link style={{textDecoration:"none"}} to="/welcome-message-black">
        <MenuItem className="menu-span-item" >
       
          <span >
           Welcome Message Black
           </span>
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-verification">
        <MenuItem className="menu-span-item" >
       
          <span >
          Account Verification
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-verification-black">
        <MenuItem className="menu-span-item" >
       
          <span >
          Account Verification Black
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/trade-execution">
        <MenuItem className="menu-span-item" >
       
          <span >
          Trade Execution
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/trade-execution-black">
        <MenuItem className="menu-span-item" >
       
          <span >
          Trade Execution Black
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/stop-loss">
        <MenuItem className="menu-span-item" >
       
          <span >
          Stop Loss
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/stop-loss-black">
        <MenuItem className="menu-span-item" >
       
          <span >
          Stop Loss Black
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/margin-call">
        <MenuItem className="menu-span-item" >
       
          <span >
         Margin Call Warning
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/margin-call-black">
        <MenuItem className="menu-span-item" >
       
          <span >
         Margin Call Warning Black
           </span>
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-suspension">
        <MenuItem className="menu-span-item" >
       
          <span >
         Account Suspension
           </span>
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-suspension-black">
        <MenuItem className="menu-span-item" >
       
          <span >
         Account Suspension Black
           </span>
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/platform-maintenance">
        <MenuItem className="menu-span-item" >
       
          <span >
         Platform Maintenance
           </span>
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/platform-maintenance-black">
        <MenuItem className="menu-span-item" >
       
          <span >
         Platform Maintenance Black
           </span>
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/market-update">
        <MenuItem className="menu-span-item" >
       
          <span >
         Market Update 
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/market-update-black">
        <MenuItem className="menu-span-item" >
       
          <span >
         Market Update Black
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/referral-program">
        <MenuItem className="menu-span-item" >
       
          <span >
         Referral Programme
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/referral-program-black">
        <MenuItem className="menu-span-item" >
       
          <span >
         Referral Programme Black
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-closure">
        <MenuItem className="menu-span-item" >
       
          <span >
        Account Closure
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/account-closure-black">
        <MenuItem className="menu-span-item" >
       
          <span >
        Account Closure Black
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/platform-update">
        <MenuItem className="menu-span-item" >
       
          <span >
         Platform Update
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/platform-update-black">
        <MenuItem className="menu-span-item" >
       
          <span >
         Platform Update Black
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/globe-newswire">
        <MenuItem className="menu-span-item" >
       
          <span >
        Globe Newswire
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/globe-newswire-black">
        <MenuItem className="menu-span-item" >
       
          <span >
        Globe Newswire Black
           </span>
        </MenuItem>
        </Link>



       
       
        
      </Menu>
    </React.Fragment>
  );
}