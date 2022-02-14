import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {

    const logo = require('./../../public/logo.svg');

    return (
        <header className={styles.header}>
            <div className={styles.topbar}>
                <div className="grid">
                    <Image src="/logo.svg" alt="Cuponeria" width={220} height={90} />
                </div>
            </div>
            <div className={styles.navigation}>
                <nav className={styles.navigation__grid}>
                    <Link href="/">
                        <a>Início</a>
                    </Link>
                    <Link href="/roupas">
                        <a>Roupas</a>
                    </Link>
                    <Link href="/">
                        <a>Eletrônicos</a>
                    </Link>
                    <Link href="/">
                        <a>Acessórios</a>
                    </Link>
                    <Link href="/checkout">
                        <a>Meu carrinho</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}