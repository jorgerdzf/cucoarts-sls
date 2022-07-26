import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { options, texts } from "../staticInfo/contact";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitNews = (data: any) => {
    if (errors.Email || errors.Phone) {
      setMessage('Por favor revisa los campos en rojo para poder subscribirte');
      setOpen(true);
    } else {
      var templateParams = {
        reply_to: data.Email,
        message: `${data.Email}, Tel. ${data.Phone}`
      };
      emailjs
        .send(
          "service_xh1xkor",
          "template_pfvgil7",
          templateParams,
          "0alP9U7OdL3OA9pe1"
        )
        .then(
          (result: any) => {
            if(result.status === 200) {
              setMessage('Gracias por tu subscripción!');
              setOpen(true);
              setTimeout(() => {window.location.reload()},5500);
            }
          },
          (error: any) => {
            console.log(error);
            setMessage('Ups! Ocurrio un error al enviar tus datos, por favor intentalo nuevamente');
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
      <div>
        <form onSubmit={handleSubmit(onSubmitNews)}>
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ textAlign: "center", pt: 2 }}>
              <Typography variant="h4">{texts.t1}</Typography>
              <Typography variant="body1">{texts.t2}</Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                    alignItems: "middle",
                  },
                  pt: 2,
                }}
                noValidate
                autoComplete="off"
              >
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
                <TextField
                  error={errors.Phone ? true : false}
                  id="Phone"
                  label={options.fields.phoneNumber.title}
                  variant="outlined"
                  maxLength={10}
                  fullWidth
                  {...register("Phone", { required: true, maxLength: 10 })}
                />
              </Box>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Button size="large" variant="contained" type="submit">
                {options.buttons.subscribe.title}
              </Button>
            </Box>
          </Box>
        </form>
      </div>
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
