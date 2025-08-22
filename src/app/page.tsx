import { spawn } from "child_process";

export default function home() {

  const element = <span>Olá mudo</span>

  const morador = {
    primeiroNome: 'Ednaldo',
    sobrenome: 'Pereira'
  }

  type Morador = {
    primeiroNome: String;
    sobrenome: String;
  }

  function obterSaudacao(morador:null | Morador) {
    if(morador) {
      return <span>Olá, {formatarNome(morador)}!</span>
    }
    return <span>Olá estranho.</span>;
  }

  function formatarNome(morador:Morador ) {
    return morador.primeiroNome+ ' ' +morador.sobrenome;
  }

  return(
    <div id="principal" className="flex flex-col items-center justify-center h-screen">
      <div id="componente" className="card-azul">
        <h1 id="name" className="text 4xl font-bold">{obterSaudacao(morador)}</h1>
      </div>
    </div>
  );
};

