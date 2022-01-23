import { StylesMaterial } from "../../../../styles/MaterialUI";
import ButtonBack from "../../../buttonBack";
import ButtonMap from "../../../buttonMap";

const SubAboutUs = () => {
  const classes = StylesMaterial();

  return (
    <div className={classes.aboutUs}>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-evenly",
          margin: "15px 0",
        }}
      >
        <ButtonBack models={{ aboutUs: false, main: true }} />
        <ButtonMap />
      </div>
      <h2 className={classes.h2}>
        35 anos dedicados ao maior sonho da sua vida.
      </h2>
      <div>
        <h3 className={classes.h3}>Quem somos?</h3>
        <p className={classes.p}>
          Há mais de 35 anos a A1 Formaturas é sinônimo de dedicação,
          credibilidade, pontualidade e realização no segmento de eventos de
          formaturas.
        </p>
        <p className={classes.p}>
          Para você ter uma ideia, em todos esses anos, já atendemos mais de
          60.000 formandos e realizamos mais de 2.000 formaturas.
        </p>
        <p className={classes.p}>
          Mas tudo isso, é só para te dizer que esses números apenas mostram
          nossa trajetória, e que nossa obstinação de atender bem, com seriedade
          e respeito ao nosso formando nos direciona para cada vez mais nos
          dedicarmos aos seus eventos.
        </p>
        <p className={classes.p}>
          Para garantir essa credibilidade e termos essa dedicação nossos
          colaboradores somam-se mais de 400 pessoas direta e indiretamente em
          mais de 100 polos educacionais no Brasil.
        </p>
        <p className={classes.p}>
          Não deixe de contatar a A1 Formaturas para seu evento, descubra o
          porque somos considerados uma empresa referência para nossos formandos
          e tenha a experiência de um evento único, planejado, projetado e
          desenhado como a sua turma deseja. Somos especialistas em tornar único
          um momento tão único, que é a sua formatura.
        </p>
        <p className={classes.p}>Vem com a gente ;)</p>
      </div>
    </div>
  );
};

export default SubAboutUs;
