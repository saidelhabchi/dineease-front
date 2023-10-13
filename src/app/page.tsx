import Image from 'next/image'
import SearchBar from './components/searchbar'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/home')
  return (
    <></>
  )
}
