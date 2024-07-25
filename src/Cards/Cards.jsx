import repositories from "./reposiotirs.json";
import "./Cards.css";


const Cards = () => {
    return (
        <main id="scheme-cards">
            {
                repositories.map(
                    (repository, index) => (
                        <section key={ index } style={{ animationDelay:`${(index / 2) + 1}s`}}>
                            <i className={ repository.icon.class }>{ repository.icon.name }</i>
                            <h2>{ repository.title }</h2>
                            <p>{ repository.description }</p>
                            <ul>
                                <li>
                                    <i className={`${ repository.icons[0].class } ${ repository.icons[0].name }`}></i>
                                </li>
                                <li>
                                    <a className={`${ repository.icons[1].class } ${ repository.icons[1].name }`} href={ repository.link } target="_blank"></a>
                                </li>
                            </ul>
                        </section>
                    )
                )
            }
        </main>
    )
}

export default Cards;