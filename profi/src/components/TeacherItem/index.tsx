import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className ="teacher-item ">
                    <header>
                        <img src="https://github.com/account " alt="Ricardo" />
                            <div>
                                <strong> Ricardo Silva</strong>
                                <span>Matemática</span>
                            </div>
                    </header>
                            <p>
                                Entusiasta de cú é rola! 
                            </p>

                    <footer>
                        <p>
                            Preço por Hora
                        <strong>R$ 50.00</strong>
                        </p>

                            <button type="button">
                                <img src={whatsappIcon} alt="whatsapp"/>
                                Entrar em contato
                            </button>
                    </footer>
                </article>
    );
    
}

export default TeacherItem;