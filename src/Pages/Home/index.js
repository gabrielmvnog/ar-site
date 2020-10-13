import React from "react";

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <section className="inner-container flex-col jc-between">
        <h2 className="txt-ls-m txt-align-c pd-t-x">
          Quem somos
          <br /> <i className="fa fa-angle-down txt-s"></i>
        </h2>
        <p className="pd-t-l pd-b-l txt-dark-gray txt-xs">
          &emsp;O escritório Alves Rocha Advogados tem sede própria em
          Brasília/DF e é especializado em consultoria empresarial e tributária.
          Desde 2015 atua em todos os órgãos judiciais e extrajudiciais da
          administração pública distrital e nacional. Estabelecido
          estrategicamente no centro da Capital Federal, para atuação próxima
          aos órgãos dos Poderes Judiciário, Legislativo e Executivo e abertura
          a parcerias interestaduais.
          <br /> &emsp;O foco de atuação de nosso escritório é voltado para
          processos estratégicos, e não à advocacia de massa, principalmente em
          demandas relacionadas à consultoria empresarial em geral, tratando de
          assuntos de direito empresarial, civil, trabalhista, regulatório bem
          como questões que tramitam em órgãos administrativos e reguladores
          federais sediados em Brasília. <br />
          &emsp;Entendemos que há no mercado brasiliense escritórios que
          poderiam prestar consultoria similar à oferecida nesta proposta.
          Todavia, o escritório Alves Rocha Advogados se diferencia pela rapidez
          na resposta e apoio nas demandas trazidas pelo contratante posto que é
          especializada em consultoria empresarial e todos os pleitos são
          encaminhados diretamente aos gestores do escritório, que prezam pela
          pessoalidade e agilidade na resolução dos casos.
          <br /> &emsp;Com o apoio de alianças regionais, o escritório também
          atende clientes, por intermédio de correspondentes, em todos os
          Estados da Federação.
        </p>

        <div className="flex-row pd-t-x pd-b-x SS_flex-col">
          <div className="mg-auto">
            <img
              width="350px"
              src="https://e-dou.com.br/wp-content/uploads/2017/04/advogado-de-sucesso-3-1280x720.jpg"
              alt="joao"
            ></img>
          </div>
          <div className="ai-start">
            <h3 className="txt-ls-m pd-t-m txt-dark-gray">
              João Fernando Pereira Alves
            </h3>
            <p className="pd-t-l txt-light-gray max-wd-l">
              &emsp;Inscrito na Ordem dos Advogados do Brasil subseção do
              Distrito Federal sob nº 46.802, bacharel em direito e especialista
              em Direito Empresarial e Contratos pelo Centro Universitário de
              Brasília – UniCEUB, especialista em Direito Civil e Direito
              Processual Civil pela Escola da Magistratura do Distrito Federal –
              ESMA/DF e membro da Comissão de Direito Empresarial da OAB/DF;
            </p>
          </div>
        </div>

        <div className="flex-row  pd-b-xx SS_flex-col SS_wrap-rev">
          <div className="ai-start txt-align-end">
            <h3 className="txt-ls-m pd-t-m txt-dark-gray">
              Renato de Amorim Rocha
            </h3>
            <p className="pd-t-l txt-light-gray max-wd-l">
              &emsp;Inscrito na Ordem dos Advogados do Brasil subseção do
              Distrito Federal sob nº 46.660, bacharel em direito pelo Centro
              Universitário de Brasília - UniCEUB, especialista em Direito
              Tributário e Finanças Públicas pelo Instituto Brasiliense de
              Direito Público – IDP, especialista em Direito Civil e Direito
              Processual Civil pela Escola da Magistratura do Distrito Federal –
              ESMA/DF e membro da Comissão de Assuntos e Reforma Tributária da
              OAB/DF.
            </p>
          </div>
          <div className="mg-auto">
            <img
              width="350px"
              src="https://www.ebradi.com.br/wp-content/uploads/2019/04/original-28d7126b3960ff17dcaec0ce479fbf45-1080x675.jpg"
              alt="renato"
            ></img>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
