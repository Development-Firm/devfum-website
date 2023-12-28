import { IoLogoNodejs } from 'react-icons/io5'
import { FaReact } from 'react-icons/fa'
import { TbBrandThreejs } from 'react-icons/tb'
import { DiPhp } from 'react-icons/di'
import { FaShopify } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaAws } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

const NodeJS = ({ style }) => <IoLogoNodejs style={{ ...style }} />
const ReactJS = ({ style }) => <FaReact style={{ ...style }} />
const Threejs = ({ style }) => <TbBrandThreejs style={{ ...style }} />
const Php = ({ style }) => <DiPhp style={{ ...style }} />
const Javascript = ({ style }) => <IoLogoJavascript style={{ ...style }} />
const Shopify = ({ style }) => <FaShopify style={{ ...style }} />
const Aws = ({ style }) => <FaAws style={{ ...style }} />
const Eye = ({ style }) => <MdOutlineRemoveRedEye style={{ ...style }} />

export { NodeJS, ReactJS, Threejs, Php, Javascript, Shopify, Aws, Eye }
