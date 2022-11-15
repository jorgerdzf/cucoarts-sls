import { Box, Button, Container, Grid, IconButton, TextField } from "@mui/material";
import React from "react";
import { options } from "../staticInfo/contact";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

export default function FullContactForm() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitFull = (data: any) => {
    console.log('errores', errors);
    if (errors.Name || errors.Email || errors.Phone || errors.Description) {
      setMessage(
        "Por favor revisa los campos en rojo para poder enviar tu mensaje"
      );
      setOpen(true);
    } else {
      var templateParams = {
        reply_to: data.Email,
        message: `${data.Name} con Correo: ${data.Email} y Tel: ${data.Phone} nos platica lo siguiente -> ${data.Description}`,
      };
      emailjs
        .send(
          "service_xh1xkor",
          "template_0jo28a7",
          templateParams,
          "0alP9U7OdL3OA9pe1"
        )
        .then(
          (result: any) => {
            if (result.status === 200) {
              setMessage("Gracias por contactarnos, enseguida revisaremos tu proyecto!");
              setOpen(true);
              setTimeout(() => {
                window.location.reload();
              }, 5500);
            }
            console.log(result);
          },
          (error: any) => {
            console.log(error);
            setMessage(
              "Ups! Ocurrio un error al enviar tus datos, por favor intentalo nuevamente"
            );
            setOpen(true);
          }
        );
    }
  };
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Container>
        <div>
          <form onSubmit={handleSubmit(onSubmitFull)}>
            <Box sx={{ textAlign: "left", pt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    error={errors.Name ? true : false}
                    id="Name"
                    label={options.fields.name.title}
                    variant="outlined"
                    fullWidth
                    {...register("Name", { required: true, maxLength: 80 })}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    error={errors.Email ? true : false}
                    id="Email"
                    label={options.fields.email.title}
                    variant="outlined"
                    fullWidth
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    error={errors.Phone ? true : false}
                    id="Phone"
                    label={options.fields.phoneNumber.title}
                    variant="outlined"
                    fullWidth
                    {...register("Phone", { required: true, maxLength: 10 })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.Description ? true : false}
                    id="Description"
                    label={options.fields.description.title}
                    variant="outlined"
                    multiline
                    rows={6}
                    fullWidth
                    {...register("Description", {
                      required: true,
                      maxLength: 500,
                    })}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Button size="large" variant="contained" type="submit">
                {options.buttons.subscribe.title}
              </Button>
            </Box>
          </form>
        </div>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </React.Fragment>
  );
}
