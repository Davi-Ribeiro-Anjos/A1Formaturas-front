import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, TextField, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

import ButtonBack from "../../../buttonBack";
import { StylesMaterial } from "../../../../styles/MaterialUI";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

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
      message: yup.string().required(),
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

  const onSubmit = async (data) => {
    await axios
      .post("https://a1formaturas-contato.herokuapp.com/contact/send", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
  };

  return (
    <div className={classes.titleDiv}>
      <ButtonBack models={{ main: true, contact: false }} />
      <h3 className={classes.h3}>Oi, manda uma mensagem pra gente:</h3>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ThemeProvider theme={theme}>
            <TextField
              autoFocus
              id="filled-basic"
              fullWidth
              style={{
                borderRadius: "5px",
                backgroundColor: "rgb(184, 184, 184)",
              }}
              margin="dense"
              variant="filled"
              label="Nome"
              error={!!errors.name}
              helperText={!!errors.name && "Campo Obrigatório"}
              {...register("name")}
            />
            <TextField
              id="filled-basic"
              fullWidth
              style={{
                borderRadius: "5px",
                backgroundColor: "rgb(184, 184, 184)",
              }}
              margin="dense"
              label="Cidade que estuda"
              variant="filled"
              error={!!errors.city}
              helperText={!!errors.city && "Campo Obrigatório"}
              {...register("city")}
            />
            <TextField
              id="filled-basic"
              fullWidth
              style={{
                borderRadius: "5px",
                backgroundColor: "rgb(184, 184, 184)",
              }}
              margin="dense"
              label="Instituição/Campus"
              variant="filled"
              error={!!errors.college}
              helperText={!!errors.college && "Campo Obrigatório"}
              {...register("college")}
            />
            <TextField
              id="filled-basic"
              fullWidth
              style={{
                borderRadius: "5px",
                backgroundColor: "rgb(184, 184, 184)",
              }}
              margin="dense"
              label="E-mail"
              variant="filled"
              error={!!errors.email}
              helperText={!!errors.email && " Email inválido ou Campo Vazio"}
              {...register("email")}
            />
            <TextField
              id="filled-basic"
              fullWidth
              style={{
                borderRadius: "5px",
                backgroundColor: "rgb(184, 184, 184)",
              }}
              margin="dense"
              label="Fone/Whatsapp"
              variant="filled"
              error={!!errors.phone}
              helperText={!!errors.phone && "Coloque o DDD e o número"}
              {...register("phone")}
            />
            <TextField
              id="filled-basic"
              fullWidth
              style={{
                borderRadius: "5px",
                backgroundColor: "rgb(184, 184, 184)",
              }}
              margin="dense"
              label="Mensagem"
              variant="filled"
              error={!!errors.message}
              helperText={!!errors.message && "Campo Obrigatório"}
              {...register("message")}
            />
            <Button
              style={{
                marginTop: "7.5px",
                width: "100%",
                borderRadius: "5px",
                backgroundColor: "rgba(184, 184, 184)",
              }}
              type={"submit"}
            >
              Enviar
            </Button>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
};

export default SubContact;
