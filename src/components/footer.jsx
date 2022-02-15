/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a href="https://www.facebook.com/Cuponeria/" target="_blank" rel="noreferrer">
                        <Image src="/facebook.png" alt="Facebook" width={39} height={39} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cuponeria" target="_blank" rel="noreferrer">
                        <Image src="/instagram.png" alt="Instagram" width={39} height={39} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Cuponeria" target="_blank" rel="noreferrer">
                        <Image src="/twitter.png" alt="Twitter" width={39} height={39} />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCvdHfsvEleYAGYOhIzPwNGg" target="_blank" rel="noreferrer">
                        <Image src="/youtube.png" alt="Youtube" width={39} height={39} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}