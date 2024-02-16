import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <h2>Aplicação de doação de sangue</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/estados">Estados</Link></li>
                <li><Link to="/cidades">Cidades</Link></li>
                <li><Link to="/tipos">Tipos Sanguíneos</Link></li>
                <li><Link to="/pessoas">Pessoas</Link></li>
                <li><Link to="/doacoes">Doações</Link></li>
                <li><Link to="/locais">Locais de coleta</Link></li>
            </ul>
        </div>
    );
}

export default Menu;