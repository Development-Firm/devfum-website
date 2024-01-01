import { Aws, NodeJS, ReactJS, Threejs } from '../components/icons/icons'
import Image from 'next/image'

const technologiesIconStyle = { fontSize: '3rem', color: '#324353' }
const categoriesIconStyle = { marginTop: '10px' }
const portfolios = [
  {
    model: 'strike-o(old).glb',
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
    model: 'woohoop(old).glb',
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
    title: 'AI',
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
    title: 'Block Chain',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/blockchain.png'
  },
  {
    title: 'Saas Solutions',
    description:
      'Experience the future of design with our innovative configurator. Simply upload your own designs or choose from a wide range',
    imageSlug: '/images/services/websaas.png'
  },
  {
    title: 'App Development',
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

const benifitOfConfigurators = [
  {
    title: { normalText: 'Enhanced', gradientText: 'Customer Engagement' },
    description: `Enhanced customer engagement through the use of 3D configurators
      is driven by the creation of an interactive experience. Unlike
      static images or traditional product descriptions, 3D
      configurators offer a dynamic platform that allows customers to
      actively participate in the design and customization of a product.
      This interactivity is a game-changer in the customer experience,
      as it goes beyond mere observation and transforms the purchasing
      journey into a hands-on, real-time exploration. The term
      "interactive experience" in the context of 3D configurators means
      that customers can actively make choices, experiment with various
      design options, and witness the immediate visual outcomes of their
      decisions. For example, when configuring a custom piece of
      furniture or a personalized product, users can change colors,
      materials, shapes, and other features in real-time. This instant
      feedback loop fosters a deeper connection between the customer and
      the product, as they see their unique vision taking shape right
      before their eyes.`,
    imageSlug: `/images/configurators/interactive.png`
  },
  {
    title: { normalText: 'Customisation', gradientText: 'Options' },
    description: `The concept of reduced returns and refunds in the context of 3D configurators is closely tied to the feature of accurate visualization. Accurate visualization refers to the capability of customers to see a highly realistic representation of the customized product in real-time before finalizing their purchase. This visual representation allows customers to assess the final look, features, and specifications of the product, reducing the likelihood of dissatisfaction upon its arrival. Traditional online shopping often involves a degree of uncertainty for customers, as they rely on product images and descriptions to make purchase decisions. However, these representations might not capture all the nuances of a customized item, leading to discrepancies between customer expectations and the actual product received. This disparity can result in higher return rates and an increased likelihood of customers seeking refunds.`,
    imageSlug: `/images/configurators/custom.png`
  },
  {
    title: { normalText: 'Reduced', gradientText: 'Returns and Refunds' },
    description: `Enhanced customer engagement through the use of 3D configurators
      is driven by the creation of an interactive experience. Unlike
      static images or traditional product descriptions, 3D
      configurators offer a dynamic platform that allows customers to
      actively participate in the design and customization of a product.
      This interactivity is a game-changer in the customer experience,
      as it goes beyond mere observation and transforms the purchasing
      journey into a hands-on, real-time exploration. The term
      "interactive experience" in the context of 3D configurators means
      that customers can actively make choices, experiment with various
      design options, and witness the immediate visual outcomes of their
      decisions. For example, when configuring a custom piece of
      furniture or a personalized product, users can change colors,
      materials, shapes, and other features in real-time. This instant
      feedback loop fosters a deeper connection between the customer and
      the product, as they see their unique vision taking shape right
      before their eyes.`,
    imageSlug: `/images/configurators/accurate_visualization.png`
  },
  {
    title: { normalText: 'Increase', gradientText: 'Sales' },
    description: `The implementation of 3D configurators has proven to be a game-changer in increasing sales for businesses across various industries. By offering an interactive experience, these configurators engage customers on a deeper level, allowing them to actively participate in the design and customization of products. This heightened engagement not only captures attention but also translates into quicker decision-making, as customers can visualize changes in real-time. The ability to personalize products according to individual preferences through 3D configurators enhances customer satisfaction and builds loyalty. Additionally, the reduction in purchase uncertainty, thanks to accurate visualization, leads to fewer returns and refunds, ultimately contributing to a more efficient and streamlined sales process. With cross-selling opportunities, competitive differentiation, and data-driven optimizations, 3D configurators emerge as a powerful tool in not only driving immediate sales but also in establishing a foundation for sustained business growth`,
    imageSlug: `/images/configurators/sales.png`
  }
]

const reviews = [
  {
    name: 'Steve',
    title: 'CEO, ABC Corp.',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem autem ullam veniam dolorem, itaque dicta reprehenderit pariatur nisi. Modi architecto alias minus sit suscipit tempore labore necessitatibus laudantium quia.',
    imageSlug: '/images/reviews/person1.jpg'
  },
  {
    name: 'Steve',
    title: 'CEO, ABC Corp.',
    comment:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tempora mollitia. Repellendus vitae ipsa tempore iure harum explicabo minus, quia tempora odit quidem. Velit sunt pariatur nostrum illo ad repellendus recusandae itaque, doloremque obcaecati, neque optio impedit! Perferendis hic nihil ut, illum veniam quam accusamus quisquam, aut ex, fuga aliquam!',
    imageSlug: '/images/reviews/person2.jpg'
  },
  {
    name: 'Steve',
    title: 'CEO, ABC Corp.',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem autem ullam veniam dolorem, itaque dicta reprehenderit pariatur nisi. Modi architecto alias minus sit suscipit tempore labore necessitatibus laudantium quia.',
    imageSlug: '/images/reviews/person1.jpg'
  },
  {
    name: 'Steve',
    title: 'CEO, ABC Corp.',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem autem ullam veniam dolorem, itaque dicta reprehenderit pariatur nisi. Modi architecto alias minus sit suscipit tempore labore necessitatibus laudantium quia.',
    imageSlug: '/images/reviews/person2.jpg'
  },
  {
    name: 'Steve',
    title: 'CEO, ABC Corp.',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem autem ullam veniam dolorem, itaque dicta reprehenderit pariatur nisi. Modi architecto alias minus sit suscipit tempore labore necessitatibus laudantium quia.',
    imageSlug: '/images/reviews/person1.jpg'
  }
]

const clients = [
  {
    name: 'Duncan',
    imageSlug: '/images/clients/duncan.png',
    styling: {
      mt: 1.4,
      textAlign: 'center',
      imageWidth: 200,
      imageHeight: 60
    }
  },
  {
    name: 'Woohoop',
    imageSlug: '/images/clients/woohoop.png',
    styling: {
      mt: 1.2,
      textAlign: 'center',
      imageWidth: 100,
      imageHeight: 60
    }
  },
  {
    name: 'Strike0',
    imageSlug: '/images/clients/strikeo.png',
    styling: {
      mt: 0,
      textAlign: 'center',
      imageWidth: 100,
      imageHeight: 80
    }
  },
  {
    name: 'C3X',
    imageSlug: '/images/clients/c3x.png',
    styling: {
      mt: 1.2,
      textAlign: 'center',
      imageWidth: 100,
      imageHeight: 60
    }
  },
  {
    name: 'Strike0',
    imageSlug: '/images/clients/strikeo.png',
    styling: {
      mt: 0,
      textAlign: 'center',
      imageWidth: 100,
      imageHeight: 80
    }
  },
  {
    name: 'C3X',
    imageSlug: '/images/clients/c3x.png',
    styling: {
      mt: 1.2,
      textAlign: 'center',
      imageWidth: 100,
      imageHeight: 60
    }
  },
  {
    name: 'Strike0',
    imageSlug: '/images/clients/strikeo.png',
    styling: {
      mt: 0,
      textAlign: 'center',
      imageWidth: 100,
      imageHeight: 80
    }
  },
  {
    name: 'C3X',
    imageSlug: '/images/clients/c3x.png',
    styling: {
      mt: 1.2,
      textAlign: 'center',
      imageWidth: 100,
      imageHeight: 60
    }
  }
]

export {
  portfolios,
  blogs,
  services,
  industries,
  benifitOfConfigurators,
  reviews,
  clients
}
