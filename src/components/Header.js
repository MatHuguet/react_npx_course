import ReactLogo from '../logo.svg'
//Importation du fichier CSS propre au composant Header 
import '../styles/header.css'

/* 
On défini la fonction Header propre à notre composant qui se chargera
de l'affichage HTML. 'export default' permet d'exporter le composant 
*/
export default function Header() {
/* 
Si nous avons plusieurs élément JSX à écrire, nous plaçons les lignes entre
parenthèses après 'return'
*/
    return(

        <header className='headerContainer'>
            <h1>Les composants React</h1>
            {/*On utilise le nom 'ReactLogo' défini en import */}
            <img src={ReactLogo} alt='logo React'/>
        </header>
    )
/*
En JSX, on ne définit pas d'attributs avec le mot clé 'class=""' dans une balise
car ce mot est réservé à JavaScript. On utilise alors className=''. Ici, 
className a pour valeur headerContainer défini dans le fichier header.css.
*/
}