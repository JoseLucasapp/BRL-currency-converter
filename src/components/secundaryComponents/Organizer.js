import React from 'react';
import '../styles/Organizer.css';

export default ({title, items}) =>{
    return(
        <div className="main-organizer">
            <div className="currencymain">
                <h3>{title}</h3>
                <div className="currencyrowarea">
                    <div className="currencyrow">
                        {items.map((item,key)=>(
                            <div key={key} className="currency">
                                <p><b>Nome:</b> {item.name}</p>
                                <p><b>Compra:</b> R$ {((item.bid*1).toFixed(2)).replace(".", ",")}</p>
                                <div className="moretext">
                                    <p><b>Ver mais dados...</b></p>
                                </div>
                                <p><b>Venda:</b> R$ {(item.ask).replace(".", ",")}</p>
                                <p><b>Variação:</b> R$ {(item.varBid).replace(".", ",")}</p>
                                <p><b>% de Variação:</b> {(item.pctChange*100).toFixed(2)}%</p>
                                <p><b>Preço maxímo:</b> R$ {(item.high).replace(".", ",")}</p>
                                <p><b>Preço mínimo:</b> R$ {(item.low).replace(".", ",")}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}