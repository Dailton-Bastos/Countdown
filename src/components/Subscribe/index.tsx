import './global.css';

export const Subscribe = () => {
  return (
    <div className="blackFriday__subscribe">
      <div className="subscribe__content">
        <div className="subscribe__content--title">
          <p>PARA APROVEITAR, VOCÊ NÃO PRECISA ESPERAR, CADASTRE-SE E RECEBA AS NOVIDADES :)</p>
        </div>

        <div className="subscribe__content--form">
          <form className="subscribe__form">
            <div className="form__input">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
            </div>

            <div className="form__input">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" />
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
