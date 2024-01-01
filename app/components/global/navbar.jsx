import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { Grid, useTheme } from '@mui/material'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { CustomNavBar } from '@/app/themes/themes'
import { usePathname } from 'next/navigation'

const drawerWidth = 240

function Navbar (props) {
  const theme = useTheme()

  const navbarResponsiveness = {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
  const { scrolled, window, navItems } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const pathname = usePathname()

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color='black' variant='h6' sx={{ my: 2 }}>
        Devfum
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) =>
          item.type === 'navigatable' ? (
            <Link
              href={item.route.toLowerCase()}
              style={{ color: 'black', textDecoration: 'none' }}
              key={i}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText
                    primary={item.route === '/' ? 'Home' : item.route}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <ScrollLink
              key={i}
              activeClass='active'
              to={item.route}
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
              style={{
                cursor: 'pointer'
              }}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.route} />
                </ListItemButton>
              </ListItem>
            </ScrollLink>
          )
        )}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomNavBar scrolled={scrolled} component='nav'>
        <Toolbar>
          <IconButton
            color='black'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid container px={10} spacing={2} pt={1} pb={1} columns={16}>
            <Grid item xs={16} sm={8} sx={{ ...navbarResponsiveness }}>
              <Box>
                <Link href='/'>
                  <Image
                    src='/images/devfum_pngfile-01.png'
                    alt='Devfum Logo'
                    className='dark:invert'
                    width={160}
                    height={60}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={16} sm={8}>
              <Box
                sx={{
                  textAlign: 'right',
                  paddingTop: '10px',
                  fontSize: '30px',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {navItems.map((item, i) =>
                  item.type === 'navigatable' ? (
                    <Link
                      key={i}
                      href={`${item.route.toLowerCase()}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        sx={{
                          color: 'white',
                          display: 'inline',
                          paddingInline: '15px'
                        }}
                      >
                        {item.route === '/' ? 'Home' : item.route}
                      </Typography>
                    </Link>
                  ) : (
                    <ScrollLink
                      key={i}
                      activeClass='active'
                      to={item.route}
                      spy={true}
                      smooth={true}
                      // offset={-70}
                      duration={1000}
                      style={{ cursor: 'pointer' }}
                    >
                      <Typography
                        sx={{
                          display: 'inline',
                          paddingInline: '15px'
                        }}
                      >
                        {item.route}
                      </Typography>
                    </ScrollLink>
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </CustomNavBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default Navbar
