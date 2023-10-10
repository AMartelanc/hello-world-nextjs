import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Página inicial</h1>
      
      <div>
        <ul>
          <li><Link href="/post">Post</Link></li>
          <li><Link href="/post/post1">Post1</Link></li>
          <li><Link href="/post/post2">Post2</Link></li>
          <li><Link href="/post/post3">Post3</Link></li>
        </ul>
      </div>
    </>
  )
}
