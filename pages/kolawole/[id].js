export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    
    const paths = data.map(kolawole =>{
        return { 
            params: { id: kolawole.id.toString() }
         }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return {
        props: { kolawole: data}
    }
}



const Details = ({ kolawole }) => {
    return ( 
        <div>

            <h1>{ kolawole.name }</h1>
            <p>{ kolawole.email }</p>
            <p>{ kolawole.website }</p>
            <p>{ kolawole.address.city }</p>

        </div>
     );
}
 
export default Details;