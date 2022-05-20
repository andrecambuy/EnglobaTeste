import React, { useState } from "react";
import "./Main.css";
import delivery from "../images/delivery.svg";
import gerenciamento from "../images/gerenciamento.svg";
import financiamento from "../images/financas.svg";
import ferramentas from "../images/ferramentas.svg";
import integracoes from "../images/bd.svg";
import config from "../images/config.svg";
import { data, options } from "./Chart";
import Chart from "react-google-charts";

const Main = () => {
  return (
    <div className="Main">
      <div className="buttons">
        <div className="button-single">
          <img src={delivery} alt="delivery" className="image" />
          <p>Operações</p>
        </div>
        <div className="button-single">
          <img src={gerenciamento} alt="delivery" className="image" />
          <p>Gestão</p>
        </div>
        <div className="button-single">
          <img src={financiamento} alt="delivery" className="image" />
          <p>Financeiro</p>
        </div>
        <div className="button-single">
          <img src={ferramentas} alt="delivery" className="image" />
          <p>Ferramentas</p>
        </div>
        <div className="button-single">
          <img src={integracoes} alt="delivery" className="image" />
          <p>Integrações</p>
        </div>
        <div className="button-single">
          <img src={config} alt="delivery" className="image" />
          <p>Configurações</p>
        </div>
      </div>
      <div className="grafico">
        <div className="titulo">
          <h3>Emissões</h3>
          <p>Quantidade de pedidos: 250 | Quantidade de volumes: 250</p>
        </div>
        <div className="conteudo">
          <div className="grafico-conteudo">
            <Chart
              chartType="Bar"
              width="100%"
              height="100%"
              data={data}
              options={options}
            />
          </div>
        </div>
        <div className="descicao-graf">
          <div>
            <div className="blue"></div>
            <p>Quantidade</p>
          </div>
          <div>
            <div className="red"></div>
            <p>Quantidade de volumes</p>
          </div>
          <div>
            <div className="yellow"></div>
            <p>Quantidade de pedidos recebidos</p>
          </div>
          <div>
            <div className="green"></div>{" "}
            <p>Quantidades de volumes recebidos</p>
          </div>
        </div>
        <div className="filtro">
          <p className="title">Gráfico:</p>
          <select name="grafico" id="grafico">
            <option value="Emitidos">Emitidos</option>
          </select>
          <p className="title">Intervalo:</p>
          <select name="Intervalo" id="Intervalo">
            <option value="10 segundos">10 segundos</option>
          </select>
          <p>Periodo:</p>
          <button>1 dia</button>
          <button>7 dias</button>
          <button>15 dias</button>
          <button> 31 dias</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
