'use client'
import React, { useMemo, useState } from 'react'
import Navbar from '../components/global/navbar'
import Wrapper from '../components/global/wrapper'
import Footer from '../components/global/footer'
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material'
import { GradientText } from '../themes/themes'
import ReactPlayer from 'react-player'
import ExplainationCard from './components/cards/explainationCard'
import { benifitOfConfigurators } from '../constants'
import PlaystationConfigurator from './components/ps5Configurator/configurator'
import Image from 'next/image'
import TableConfigurator from './components/tableConfigurator/configurator'
import JewellryConfigurator from './components/jewellryConfigurator/configurator'
import { Select } from '@react-three/drei'
import SofaConfigurator from './components/sofaConfigurator/configurator'

const Configurators = () => {
  const navItems = [
    { route: '/', type: 'navigatable' },
    { route: 'Portfolio', type: 'navigatable' },
    { route: 'Blogs', type: 'navigatable' },
    { route: 'Configurators', type: 'navigatable' }
  ]

  const theme = useTheme()

  const videoResponsiveness = {
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    }
  }

  const [ps5Texture, setPs5Texture] = useState('base')
  const [tableTexture, setTableTexture] = useState('weatherHead')
  const [sofaTexture, setSofaTexture] = useState('brown')
  const [diamondTexture, setDiamondTexture] = useState('')
  const [baseTexture, setBaseTexture] = useState('')
  const [furnitureCategory, setFurnitureCategory] = useState('table')

  const ps5_configurator = [
    {
      name: 'Last of us',
      imageSlug: '/images/configurators/lastofus.jpg',
      texture: 'lastofus'
    },
    {
      name: 'RDR 2',
      imageSlug: '/images/configurators/rdr2.jpg',
      texture: 'rdr2'
    },
    {
      name: 'GTA VI',
      imageSlug: '/images/configurators/gta.jpg',
      texture: 'gta'
    },
    {
      name: 'Spider man',
      imageSlug: '/images/configurators/spiderman.jpg',
      texture: 'spiderman'
    }
  ]

  const furniture_configurator = {
    table: [
      {
        name: 'Gray',
        imageSlug: '/images/configurators/gray.jpg',
        texture: 'gray'
      },
      {
        name: 'Weather Head',
        imageSlug: '/images/configurators/weather-head.jpg',
        texture: 'weatherHead'
      },
      {
        name: 'White wash',
        imageSlug: '/images/configurators/white-wash.jpg',
        texture: 'whiteWash'
      },
      {
        name: 'Natural Oil',
        imageSlug: '/images/configurators/natural-oil.jpg',
        texture: 'naturalOil'
      }
    ],
    sofa: [
      {
        name: 'Gray',
        imageSlug: '/images/configurators/gray.png',
        texture: 'gray'
      },
      {
        name: 'Blue',
        imageSlug: '/images/configurators/blue.png',
        texture: 'blue'
      },
      {
        name: 'Brown',
        imageSlug: '/images/configurators/brown.jpeg',
        texture: 'brown'
      },
      {
        name: 'Orange',
        imageSlug: '/images/configurators/orange.png',
        texture: 'orange'
      }
    ]
  }

  const jewellry_configurator = {
    diamond: [
      {
        name: 'Transparent White',
        imageSlug: '/images/configurators/white.jpg',
        texture: 'whiteDiamond'
      },
      {
        name: 'Red',
        imageSlug: '/images/configurators/red.jpg',
        texture: 'redDiamond'
      }
    ],
    base: [
      {
        name: 'Golden',
        imageSlug: '/images/configurators/gold.png',
        texture: 'goldenBase'
      },
      {
        name: 'Silver',
        imageSlug: '/images/configurators/silver.jpg',
        texture: 'silverBase'
      }
    ]
  }

  const ps5TextureHandler = texture => setPs5Texture(texture)

  const tableTextureHandler = texture => setTableTexture(texture)

  const sofaTextureHandler = texture => setSofaTexture(texture)

  const diamondTextureHandler = texture => setDiamondTexture(texture)

  const baseTextureHandler = texture => setBaseTexture(texture)

  const handleFurnitureCategory = cat => setFurnitureCategory(cat)

  return (
    <>
      <Navbar navItems={navItems} />
      <Wrapper sx={{ paddingTop: '150px' }}>
        <Grid container columns={16}>
          <Grid item xs={16} sm={7}>
            <Typography
              variant='h4'
              sx={{ display: 'inline', marginRight: '10px' }}
            >
              We specialize in creating dynamic
            </Typography>
            <GradientText
              variant='h4'
              sx={{ display: 'inline', marginRight: '10px' }}
            >
              3D product configurators
            </GradientText>
            <Typography variant='h5' sx={{ display: 'inline' }}>
              tailored to your needs and preferences!
            </Typography>

            <Box mt={2}>
              <Typography
                sx={{ fontSize: '13px', color: 'rgba(50, 67, 83, 0.6)' }}
              >
                3D configurators revolutionize the customer experience by
                providing an interactive platform that enables personalized
                product customization. Offering a dynamic and engaging
                interface, these configurators empower customers to visualize
                and tailor products to their specific preferences in real time.
                From reducing uncertainty in online purchases to streamlining
                decision-making processes, the technology enhances customer
                engagement and satisfaction. Businesses benefit from reduced
                returns and refunds, as customers can accurately preview their
                customized items. The configurators also open avenues for
                cross-selling opportunities, suggesting complementary
                accessories or upgrades. Beyond immediate sales impact, the
                data-driven insights generated by 3D configurators enable
                businesses to optimize their product offerings and marketing
                strategies, contributing to long-term growth. Overall, 3D
                configurators provide a competitive advantage, positioning
                brands as innovative, customer-centric, and uniquely positioned
                in their respective markets.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={16} sm={9} px={4} sx={{ ...videoResponsiveness }}>
            <ReactPlayer
              url='/videos/configurator.mp4'
              playing
              loop
              muted
              width='100%'
              height='auto'
              controls={false}
            />
          </Grid>
        </Grid>

        <Box mb={3} sx={{ marginTop: '8rem' }}>
          <Typography
            variant='h4'
            sx={{ display: 'inline', marginRight: '10px' }}
          >
            Benfits of
          </Typography>
          <GradientText
            variant='h4'
            sx={{ display: 'inline', marginRight: '10px' }}
          >
            3D product configurators
          </GradientText>
        </Box>
        <Typography sx={{ fontSize: '13px', color: 'rgba(50, 67, 83, 0.6)' }}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's find out how configurator plays important role in our daily
          sales.
        </Typography>
        {benifitOfConfigurators.map((benifit, i) => (
          <ExplainationCard benifit={benifit} key={i} index={i} />
        ))}

        <Box sx={{ marginTop: '8rem' }}>
          <Typography
            variant='h4'
            sx={{ display: 'inline', marginRight: '10px' }}
          >
            Demo of some of our
          </Typography>
          <GradientText
            variant='h4'
            sx={{ display: 'inline', marginRight: '10px' }}
          >
            3D product configurators
          </GradientText>
        </Box>

        <Box mt={2}>
          <Typography sx={{ fontSize: '13px', color: 'rgba(50, 67, 83, 0.6)' }}>
            Explore the configurator and envision your product experience
            through interactive play.
          </Typography>
        </Box>

        {/******************************* PLAYSTATION COnfigurator  ******************************/}
        <Box mt={2} mb={5}>
          <Grid container columns={16}>
            <Grid item xs={16} sm={10}>
              <Box sx={{ maxHeight: '650px', height: '650px' }}>
                <PlaystationConfigurator texture={ps5Texture} />
              </Box>
            </Grid>
            <Grid item xs={false} sm={6}>
              <Typography variant='h3' mb={2} sx={{ fontWeight: 'bold' }}>
                Playstation 5
              </Typography>
              <Typography
                mb={3}
                sx={{ fontSize: '13px', color: 'rgba(50, 67, 83, 0.6)' }}
              >
                Experience an exciting demonstration of our prototype for a 3D
                configurator designed specifically for the PlayStation 5. This
                innovative tool allows users to customize their gaming console
                by incorporating skins inspired by popular games such as Last of
                Us, Red Dead Redemption, GTA, and Spiderman. With the simple
                selection of different skins, witness dynamic changes unfold on
                the PlayStation 5 console in real-time. Immerse yourself in the
                versatility of design options, providing a unique and
                personalized touch to your gaming experience. Explore the
                interactive world of possibilities and tailor your PlayStation 5
                to reflect your gaming preferences with our cutting-edge 3D
                configurator prototype.
              </Typography>
              <Paper>
                <Box p={2}>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                    Choose skins
                  </Typography>
                  <Box>
                    <Grid container columns={16}>
                      {ps5_configurator.map((cat, i) => (
                        <Grid item xs={8} key={i} px={2} mb={2}>
                          <Box
                            sx={{
                              '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.05)',
                                transition: 'all 0.3s ease-in-out'
                              }
                            }}
                          >
                            <Image
                              src={cat.imageSlug}
                              alt={cat.name}
                              width={0}
                              height={0}
                              sizes='100vw'
                              style={{
                                width: '100%',
                                height: 'auto',
                                cursor: 'pointer'
                              }}
                              onClick={() => ps5TextureHandler(cat.texture)}
                            />
                          </Box>
                          <Typography
                            sx={{ textAlign: 'center', fontWeight: 'bold' }}
                          >
                            {cat.name}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/******************************* Furniture COnfigurator  ******************************/}
        <Box mt={2} mb={5}>
          <Grid container columns={16}>
            <Grid item xs={false} sm={6}>
              <Typography variant='h3' mb={2} sx={{ fontWeight: 'bold' }}>
                Furniture
              </Typography>
              <Typography
                mb={3}
                sx={{ fontSize: '13px', color: 'rgba(50, 67, 83, 0.6)' }}
              >
                An innovative prototype that revolutionizes the furniture
                customization experience—a cutting-edge 3D configurator designed
                specifically for sofas and round tables. This powerful tool
                empowers users to personalize their furniture by customizing
                materials with ease. Whether envisioning a cozy sofa draped in
                luxurious fabrics or a sleek round table adorned with
                distinctive textures, our 3D configurator opens a realm of
                possibilities. Explore the intersection of design and
                functionality as you tailor your furniture to match your unique
                style and preferences. Elevate your living space with this
                intuitive and immersive configurator, offering a seamless
                journey into the world of customized furniture design.
              </Typography>
              <Paper>
                <Box p={2}>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                    Select Type
                  </Typography>
                  <Box mb={3}>
                    <Grid container columns={16}>
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            textAlign: 'center',
                            '&:hover': {
                              cursor: 'pointer',
                              transform: 'scale(1.05)',
                              transition: 'all 0.3s ease-in-out'
                            }
                          }}
                        >
                          <Image
                            src={'/images/configurators/sofa.png'}
                            alt={'sofa'}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                              width:
                                furnitureCategory === 'sofa' ? '30%' : '20%',
                              height: 'auto',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleFurnitureCategory('sofa')}
                          />
                        </Box>
                        <Typography
                          sx={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                          {'Sofa'}
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            textAlign: 'center',

                            '&:hover': {
                              cursor: 'pointer',
                              transform: 'scale(1.05)',
                              transition: 'all 0.3s ease-in-out'
                            }
                          }}
                        >
                          <Image
                            src={'/images/configurators/table.png'}
                            alt={'table'}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                              width:
                                furnitureCategory === 'table' ? '30%' : '20%',
                              height: 'auto',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleFurnitureCategory('table')}
                          />
                        </Box>
                        <Typography
                          sx={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                          {'Table'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                    Choose material
                  </Typography>
                  <Box>
                    <Grid container columns={16}>
                      {furniture_configurator[furnitureCategory].map(
                        (cat, i) => (
                          <Grid item xs={8} key={i} px={2} mb={2}>
                            <Box
                              sx={{
                                '&:hover': {
                                  cursor: 'pointer',
                                  transform: 'scale(1.05)',
                                  transition: 'all 0.3s ease-in-out'
                                }
                              }}
                            >
                              <Image
                                src={cat.imageSlug}
                                alt={cat.name}
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  cursor: 'pointer'
                                }}
                                onClick={() => {
                                  if (furnitureCategory === 'table')
                                    tableTextureHandler(cat.texture)
                                  else sofaTextureHandler(cat.texture)
                                }}
                              />
                            </Box>
                            <Typography
                              sx={{ textAlign: 'center', fontWeight: 'bold' }}
                            >
                              {cat.name}
                            </Typography>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={16} sm={10}>
              <Box sx={{ maxHeight: '650px', height: '650px' }}>
                {furnitureCategory === 'table' ? (
                  <TableConfigurator texture={tableTexture} />
                ) : (
                  <SofaConfigurator texture={sofaTexture} />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/******************************* Jewellry Configurator  ******************************/}
        <Box mt={2} mb={5}>
          <Grid container columns={16}>
            <Grid item xs={16} sm={10}>
              <Box sx={{ maxHeight: '650px', height: '650px' }}>
                <JewellryConfigurator
                  baseTexture={baseTexture}
                  diamondTexture={diamondTexture}
                />
              </Box>
            </Grid>

            <Grid item xs={false} sm={6}>
              <Typography variant='h3' mb={2} sx={{ fontWeight: 'bold' }}>
                Jewellry
              </Typography>
              <Typography
                mb={3}
                sx={{ fontSize: '13px', color: 'rgba(50, 67, 83, 0.6)' }}
              >
                An immersive journey with our prototype showcasing a 3D
                configurator for jewelry, featuring an exquisite diamond ring.
                This innovative tool allows users to customize their jewelry
                experience by dynamically altering both the base color of the
                ring and the radiant hues of the diamond. Witness the
                transformation unfold in real-time as you explore a spectrum of
                captivating options. From bold and vibrant choices to timeless
                classics, our 3D configurator provides a captivating
                demonstration of the endless possibilities for personalizing
                your diamond ring. Experience the beauty of customization as you
                envision and create a piece that perfectly reflects your unique
                style and preferences. This prototype is a glimpse into the
                future of personalized jewelry design, where every detail is
                curated to enhance your individuality.
              </Typography>
              <Paper>
                <Box p={2}>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                    Choose Diamond color
                  </Typography>
                  <Box>
                    <Grid container columns={16}>
                      {jewellry_configurator.diamond.map((cat, i) => (
                        <Grid item xs={8} key={i} px={2} mb={2}>
                          <Box
                            sx={{
                              '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.05)',
                                transition: 'all 0.3s ease-in-out'
                              }
                            }}
                          >
                            <Image
                              src={cat.imageSlug}
                              alt={cat.name}
                              width={0}
                              height={0}
                              sizes='100vw'
                              style={{
                                width: '100%',
                                height: 'auto',
                                cursor: 'pointer'
                              }}
                              onClick={() => diamondTextureHandler(cat.texture)}
                            />
                          </Box>
                          <Typography
                            sx={{ textAlign: 'center', fontWeight: 'bold' }}
                          >
                            {cat.name}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>

                <Box p={2} mt={2}>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                    Choose Ring Base Color
                  </Typography>
                  <Box>
                    <Grid container columns={16}>
                      {jewellry_configurator.base.map((cat, i) => (
                        <Grid item xs={8} key={i} px={2} mb={2}>
                          <Box
                            sx={{
                              '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.05)',
                                transition: 'all 0.3s ease-in-out'
                              }
                            }}
                          >
                            <Image
                              src={cat.imageSlug}
                              alt={cat.name}
                              width={0}
                              height={0}
                              sizes='100vw'
                              style={{
                                width: '100%',
                                height: 'auto',
                                cursor: 'pointer'
                              }}
                              onClick={() => baseTextureHandler(cat.texture)}
                            />
                          </Box>
                          <Typography
                            sx={{ textAlign: 'center', fontWeight: 'bold' }}
                          >
                            {cat.name}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Configurators
