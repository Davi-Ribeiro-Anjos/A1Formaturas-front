import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, TextField } from "@material-ui/core";

import ButtonBack from "../../../buttonBack";
import { StylesMaterial } from "../../../../styles/MaterialUI";

// const theme =

const SubContact = () => {
  const classes = StylesMaterial();

  const schema = yup
    .object({
      name: yup.string().required(),
      city: yup.string().required(),
      college: yup.string().required(),
      email: yup.string().required().email(),
      phone: yup
        .number()
        .required()
        .positive()
        .integer()
        .min(11111111111)
        .max(99999999999),
      mensage: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.titleDiv}>
      <ButtonBack models={{ main: true, contact: false }} />
      <h3 className={classes.h3}>Oi, manda uma mensagem pra gente:</h3>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            id="standard-error-helper-text"
            className={classes.inputForm}
            label="Nome"
            variant="standard"
            error={!!errors.name}
            helperText={!!errors.name && "Campo Obrigatório"}
            {...register("name")}
          />
          <TextField
            id="standard-error-helper-text"
            className={classes.inputForm}
            label="Cidade que estuda"
            variant="standard"
            error={!!errors.city}
            helperText={!!errors.city && "Campo Obrigatório"}
            {...register("city")}
          />
          <TextField
            id="standard-error-helper-text"
            className={classes.inputForm}
            label="Instituição/Campus"
            variant="standard"
            error={!!errors.college}
            helperText={!!errors.college && "Campo Obrigatório"}
            {...register("college")}
          />
          <TextField
            id="standard-error-helper-text"
            className={classes.inputForm}
            label="E-mail"
            variant="standard"
            error={!!errors.email}
            helperText={!!errors.email && " Email inválido ou Campo Vazio"}
            {...register("email")}
          />
          <TextField
            id="standard-error-helper-text"
            className={classes.inputForm}
            label="Fone/Whatsapp"
            variant="standard"
            error={!!errors.phone}
            helperText={!!errors.phone && "Coloque o DDD e o número"}
            {...register("phone")}
          />
          <TextField
            // id="standard-error-helper-text"
            id="standard-basic"
            className={classes.inputForm}
            label="Mensagem"
            variant="standard"
            error={!!errors.mensage}
            helperText={!!errors.mensage && "Campo Obrigatório"}
            {...register("mensage")}
          />
          <Button type={"submit"}>Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default SubContact;
