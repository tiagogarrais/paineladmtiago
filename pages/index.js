import { useSession } from 'next-auth/client'
import OutrosSistemas from '../components/OutrosSistemas'
import Link from 'next/link'


export default function Home() {
    const [session, loading] = useSession()
    if (session) {
        return (
            <div className='conteudo'>
                <div className='sistemas'>
                    <h2>Sistemas administrativos hospedados neste site</h2>

                    <button>
                        <Link href="/ambientes">
                            <a>Administração de salas e ambientes</a>
                        </Link>
                    </button>
                </div>
                <OutrosSistemas />
            </div>
        )

    }
    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}