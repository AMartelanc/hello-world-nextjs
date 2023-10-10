import Link from 'next/link'

export default function Post(){
    return(
        <div>
            <h1>Postagens</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, itaque accusamus saepe, fugiat voluptatum perferendis deleniti cum debitis error possimus tempora, eligendi eaque quisquam ea quo provident. Deserunt, est voluptas.</p>
            <p><Link href="../">Voltar...</Link></p>
        </div>
    )
}