import Image from 'next/image'
import Link from 'next/link'

export default function Post3(){
    return(
        <div>
            <h1>Postagens</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, itaque accusamus saepe, fugiat voluptatum perferendis deleniti cum debitis error possimus tempora, eligendi eaque quisquam ea quo provident. Deserunt, est voluptas.</p>
            <p><Link href="../">Voltar...</Link></p>
            <figure>
                <Image src="/img/winter-5911787_1280.jpg"
                alt="Winter" width={320} height={320}/>
            </figure>
        </div>
    )
}