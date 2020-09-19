/**
 *  *import React, { Component } from "react";

import api from '../../services/api';

export default class Main extends Component {
    componentDidMount() { //metodo executado assim quando o componente for mostrado em tela
        this.loadProducts();
    }

    loadProducts = async () => { //arrow function 
        const response = await api.get("/products"); // chamei a api.. 

        console.log(response.data.docs); // pra saber oq ele esta retornando.. ele esta retornando a pasta docs da URL
    };
    
    render() {
        return <h1>hello Rocketseat</h1>
    }
} 
 */


// modo de listagem de produto
import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {}, //armazena todas as info (q estão na URL) que vão retornar mais tarde
        page: 1
    };

    componentDidMount() { //metodo executado assim quando o componente for mostrado em tela
        this.loadProducts();
    }

    loadProducts = async (page = 1) => { //arrow function 
        const response = await api.get(`/products?page=${page}`); // chamei a api.. 

        const { docs, ...productInfo } = response.data; // chamei a docs e o productInfo

        this.setState({ products: docs, productInfo, page }); //gravando os dois valores a cima
    };
    
    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page == 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo} = this.state; //vou procurar a pagina atual e a productInfo porq vou verificar se a atual eu estou nela

        if (page == productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };
    

    render() { //renderizou

        const { products, page, productInfo } = this.state;//processo de desustruração.. vai buscar o produst no this.state

        return ( //retotnou o state.. disable page == 1: n tenho como voltar... disable == productinfo: quando
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page == 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button disabled={page == productInfo.pages}  onClick={this.nextPage}>
                        Proximo
                    </button>
                </div>
            </div>
        );
    }
}