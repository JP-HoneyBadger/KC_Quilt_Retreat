import Link from "next/link"
import Image from "next/image"
import LogoSVG from '@/assets/Logos/Horizontal.svg'
import { LogoPNG } from "@/assets"

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={LogoPNG} width={254} height={54} priority alt=""/>
    </Link>
  )
}

export default Logo
