// import * as React from 'react';
// import './dashboard.css'
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
// // import Photos from './subpages/photos';
// // import Todos from './subpages/todos';
// // import Users from './subpages/users';
// // import Posts from './subpages/posts';
// // import Comments from './subpages/comments';
// // import Albums from './subpages/albums';
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// import ListIcon from '@mui/icons-material/List';
// import UploadIcon from '@mui/icons-material/Upload';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
// import CommentIcon from '@mui/icons-material/Comment';
// import { getData } from '../config/firebase/firebasemethods';
// import { useState } from 'react';
// // import InputValue from './subpages/inputValue';
// // import ShowDetail from './subpages/showDetail';
// import All from '../config/routing/nested';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function Dashboard(props) {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);
//   const [username, setUsername] = useState("");
//   const params = useParams();
//   const obj = {username};
//   const navigate = useNavigate();
//   React.useEffect(()=>{
//     if(params.id){
//       getData('users')
//     }
//   })
  
  
//   const dashboard = () =>{
//     navigate(`/dashboard/${username}`, {state: obj});
//     }
  



//     const album = () =>{
//       navigate(`/dashboard/album`, {state: obj});
//       }




//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const MoveToRoute = (route) =>{
//       navigate(route);
//   } 
  
// const [routes,setRoutes] = React.useState([
//   {
//   routeName: 'Home',
//   routeIcon: <HomeIcon/>,
//   route:'/home'
// },{
//   routeName: 'Details',
//   routeIcon: <HomeIcon/>,
//   route:'/details'
// },{
//   routeName: 'Users',
//   routeIcon: <PersonIcon/>,
//   route:'/users'
// },{
//   routeName: 'Todos',
//   routeIcon: <ListIcon/>,
//   route:'/todos'
// },{
//   routeName: 'Posts',
//   routeIcon: <UploadIcon/>,
//   route:'/posts'
// },{
//   routeName: 'Albums',
//   routeIcon: <LibraryBooksIcon/>,
//   route:'/albums'
// },{
//   routeName: 'Photos',
//   routeIcon: <PhotoSizeSelectActualIcon/>,
//   route:'/photos'
// },{
//   routeName: 'Comments',
//   routeIcon: <CommentIcon/>,
//   route:'/comments'
// },
// ]);


//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {routes.map((text, index) => (
//             <ListItem onClick={()=>{MoveToRoute(text.route)}} key={index} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {text.routeIcon}
//                 </ListItemIcon>
//                 <ListItemText primary={text.routeName} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
       
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         {/* <Routes>
//             <Route path="/home" element={<InputValue />}></Route> 
//             <Route path="/details" element={<ShowDetail />}></Route> 
//             <Route path="photos" element={<Photos />}></Route> 
//             <Route path="albums" element={<Albums />}></Route>
//             <Route path="todos" element={<Todos />}></Route>
//             <Route path="users" element={<Users />}></Route>
//             <Route path="posts" element={<Posts />}></Route>
//             <Route path="comments" element={<Comments />}></Route> 
            
//             </Routes> */}

//             <All/>
//       </Box>
//     </Box>
//   );
// }

import * as React   from 'react';
import PropTypes from 'prop-types';
import {AppBar , Box , CssBaseline , Divider , Drawer , IconButton , List , ListItem , ListItemButton , ListItemText
 , ListItemIcon   } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SpeedIcon from '@mui/icons-material/Speed';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate   } from 'react-router-dom';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Todos from './subpages/todos';
import All from '../config/routing/nested';
const drawerWidth = 240;
const style = {marginLeft:"35px"}
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const [username, setUsername] = useState("");
const obj = {username};
const navigate = useNavigate();
const dashboard= () =>{
  navigate(`/dashboard/${username}`, {state: obj});
  }
const profile = () =>{
  navigate(`/dashboaro`, {state: obj});
  }
const analysis = () =>{
  navigate(`/dashboard/analysis`, {state: obj});
  }
const accounting = () =>{
  navigate(`/dashboard/accounting`, {state: obj});
  }
const project = () =>{
  navigate(`/dashboard/projects`, {state: obj});
  }
  const messages = () =>{
    navigate(`/dashboard/mees`, {state: obj});
    }
    const out = () =>{
        navigate(`/login`);
        }

  const drawer = (
      <div className='toolbar'>
      <Toolbar sx={{backgroundColor:"#1976d2"}}/>
      <Divider />
      <List>
        {['Home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<SpeedIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text}  onClick={dashboard}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Album'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<AccountBalanceWalletIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text} onClick={accounting} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<StackedBarChartIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text}  onClick={analysis}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Details'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<MailIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text} onClick={messages} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Profile'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon'sx={{color:"black"}}>
                {<PersonIcon  fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text} onClick={profile}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Project'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon className='listIcon' sx={{color:"black"}}>
                {<AccountTreeIcon fontSize='medium'/>}
              </ListItemIcon>
              <ListItemText primary={text} onClick={project} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Signout'].map((text, index) => (
          <ListItem key={text} disablePadding>
          <ListItemButton>
          <ListItemIcon className='listIcon' sx={{color:"black"}}>
              {<ExitToAppIcon fontSize='medium'/>}
            </ListItemIcon>
            <ListItemText primary={text}  onClick={out} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Nested Routing
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <Typography variant="h2">Dashboard</Typography>
        <AccountCircleIcon fontSize='large' />    < Profile  /> */}

        {/* <div className='profile'>
       
       <div className='user'>
          <Typography variant='h2'>
          Dashboard
          <Typography>
          < Profile  />
          <AccountCircleIcon fontSize='large'/>         

          </Typography>
        </Typography>
        
        </div>
        </div>  */}


<All/>
     
      </Box>
      
    </Box>



  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;







