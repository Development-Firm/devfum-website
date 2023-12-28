import { Aws, NodeJS, ReactJS, Threejs } from '../components/icons/icons'
import Image from 'next/image'

const technologiesIconStyle = { fontSize: '3rem', color: '#324353' }
const categoriesIconStyle = { marginTop: '10px' }
const portfolios = [
  {
    model: 'strike-o.glb',
    name: 'Strike O',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique. Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.',
    categories: [
      {
        name: 'Web Developement',
        icon: (
          <Image
            src={'/images/portfolio/web.png'}
            alt='Web Developement'
            width={80}
            height={80}
            style={categoriesIconStyle}
          />
        )
      },
      {
        name: 'Metaverse',
        icon: (
          <Image
            src={'/images/portfolio/meta.png'}
            alt='Metaverse'
            width={80}
            height={80}
            style={categoriesIconStyle}
          />
        )
      }
    ],
    technologies: [
      {
        name: 'NodeJS',
        icon: <NodeJS style={technologiesIconStyle} />
      },
      {
        name: 'Threejs',
        icon: <Threejs style={technologiesIconStyle} />
      },
      {
        name: 'React',
        icon: <ReactJS style={technologiesIconStyle} />
      },
      {
        name: 'AWS',
        icon: <Aws style={technologiesIconStyle} />
      }
    ]
  },
  {
    model: 'woohoop.glb',
    name: 'Woohoop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique. Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.',
    categories: [
      {
        name: 'Web Developement',
        icon: (
          <Image
            src={'/images/portfolio/web.png'}
            alt='Web Developement'
            width={80}
            height={80}
            style={categoriesIconStyle}
          />
        )
      },
      {
        name: '3d Product Configurator',
        icon: (
          <Image
            src={'/images/portfolio/configurator.png'}
            alt='Configurator'
            width={80}
            height={80}
            style={categoriesIconStyle}
          />
        )
      }
    ],
    technologies: [
      {
        name: 'NodeJS',
        icon: <NodeJS style={technologiesIconStyle} />
      },
      {
        name: 'Threejs',
        icon: <Threejs style={technologiesIconStyle} />
      },
      {
        name: 'React',
        icon: <ReactJS style={technologiesIconStyle} />
      },
      {
        name: 'AWS',
        icon: <Aws style={technologiesIconStyle} />
      }
    ]
  }
]

const blogs = [
  {
    title: '3d Configurators',
    category: 'Web 3d',
    imageSlug: '/images/blogs/web3d.jpg',
    author: 'Talha Hashmi',
    date: '20th Feb, 2021',
    views: 200
  },
  {
    title: 'Introduction to PWA',
    category: 'PWA',
    imageSlug: '/images/blogs/pwa.png',
    author: 'Muhib Arshad',
    date: '13th Jan, 2021',
    views: 600
  },
  {
    title: '3d Configurators',
    category: 'Web 3d',
    imageSlug: '/images/blogs/web3d.jpg',
    author: 'Talha Hashmi',
    date: '20th Feb, 2021',
    views: 200
  },
  {
    title: 'Introduction to PWA',
    category: 'PWA',
    imageSlug: '/images/blogs/pwa.png',
    author: 'Muhib Arshad',
    date: '13th Jan, 2021',
    views: 600
  },
  {
    title: '3d Configurators',
    category: 'Web 3d',
    imageSlug: '/images/blogs/web3d.jpg',
    author: 'Talha Hashmi',
    date: '20th Feb, 2021',
    views: 200
  },
  {
    title: 'Introduction to PWA',
    category: 'PWA',
    imageSlug: '/images/blogs/pwa.png',
    author: 'Muhib Arshad',
    date: '13th Jan, 2021',
    views: 600
  },
  {
    title: '3d Configurators',
    category: 'Web 3d',
    imageSlug: '/images/blogs/web3d.jpg',
    author: 'Talha Hashmi',
    date: '20th Feb, 2021',
    views: 200
  },
  {
    title: 'Introduction to PWA',
    category: 'PWA',
    imageSlug: '/images/blogs/pwa.png',
    author: 'Muhib Arshad',
    date: '13th Jan, 2021',
    views: 600
  }
]

const services = [
  {
    title: '3d Configurators',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/web3d.png'
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/ai.png'
  },
  {
    title: 'Metaverse',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/metaverse.png'
  },
  {
    title: 'AR/VR',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/arvr.png'
  },
  {
    title: 'Block Chain Solutions',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/blockchain.png'
  },
  {
    title: 'Web Saas Solutions',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/websaas.png'
  },
  {
    title: 'Application Development',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/appdev.png'
  }
]

const industries = [
  {
    name: 'Health care',
    imageSlug: '/images/industries/health-care.png'
  },
  {
    name: 'Ecommerce',
    imageSlug: '/images/industries/ecommerce.png'
  },
  {
    name: 'Education',
    imageSlug: '/images/industries/education.png'
  },
  {
    name: 'Real Estate',
    imageSlug: '/images/industries/real-estate.png'
  },
  {
    name: 'Interior design',
    imageSlug: '/images/industries/interior-design.png'
  },
  {
    name: 'Retail',
    imageSlug: '/images/industries/retail.png'
  },
  {
    name: 'Automotive',
    imageSlug: '/images/industries/automotive.png'
  },
  {
    name: 'Supply chain management',
    imageSlug: '/images/industries/supply-chain-management.png'
  }
]

export { portfolios, blogs, services, industries }
