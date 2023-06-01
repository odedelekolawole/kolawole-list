import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

        
          <Head>
            <title>Kolawole List | Home</title>
            <meta name="keywords" content="kolawole" />
          </Head>
        

        <div>

          <h1 className={styles.title}>Homepage</h1>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel enim voluptatum fugiat deleniti totam ad saepe, aperiam aliquid nobis non nisi. Nesciunt dignissimos nam ad nulla cupiditate possimus ab, sit adipisci dolor saepe quam laboriosam? Deserunt a unde consequatur, ea quis autem reprehenderit voluptatum dolore culpa temporibus. Inventore, omnis.
          </p>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel enim voluptatum fugiat deleniti totam ad saepe, aperiam aliquid nobis non nisi. Nesciunt dignissimos nam ad nulla cupiditate possimus ab, sit adipisci dolor saepe quam laboriosam? Deserunt a unde consequatur, ea quis autem reprehenderit voluptatum dolore culpa temporibus. Inventore, omnis.
          </p>

          <Link href="/kolawole" className={styles.btn}>
            See Kolawole Listing
          </Link>
        
        </div>

    </> 
  )
}
