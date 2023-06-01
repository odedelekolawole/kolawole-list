import styles from '../../styles/kolawole.module.css'
import Link from 'next/link';


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    
    return {
        props: { kolawoles: data }
    }
}

const Kolawole = ({kolawoles}) => {
    return ( 
        <div>
            <h1>All Kolawole</h1>
            {kolawoles.map(kolawole => (
                <Link className={styles.single} href={'/kolawole/' + kolawole.id} key={kolawole.id}>

                    <h3>{ kolawole.name }</h3>
                    
                </Link>
            ))}
        </div>
     );
}
 
export default Kolawole;