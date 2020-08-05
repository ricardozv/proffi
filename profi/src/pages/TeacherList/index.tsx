import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (

        <div id ="page-teacher-list" className="container">

            <PageHeader title="Estes são os proffys disponíveis." />   
                <form id="search-teachers">
                        <div className="input-block">
                            <label htmlFor="subject">Matéria</label>
                            <input type="text" id="subject" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="week_day">Dia da semana</label>
                            <input type="text" id="week_day" />
                        </div>

                        <div className ="input-block">
                            <label htmlFor ="time">Hora</label>
                            <input type ="text" id="time" />
                        </div>
                </form>
            </PageHeader>
        

            <main>
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
            </main>
        
        </div>
    )
} 

export default TeacherList;