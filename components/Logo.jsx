import Link from "next/link"
import Image from "next/image"
import { LogoPNG } from "@/assets"

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={LogoPNG} width={254} height={54} priority alt=""/>
    </Link>
  )
}

export default Logo
