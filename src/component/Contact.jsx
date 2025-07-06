import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Grid, Dialog } from "@mui/material";
import Success from "./Success";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
    });
  };

  const isFormValid = formData.name && formData.email && formData.message && formData.phone;
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xovdroqj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setOpen(true);
      setFormData({ name: "", email: "", message: "", phone: "" });
    } else {
      console.error("Email sending failed.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "", email: "", message: "", phone: "" });
  };

  return (
    <>
      <Card id="contact" sx={{ maxWidth: 650, mx: "auto", mt: 5, p: 3, boxShadow: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" textAlign="center" color="#00172D" py={2}>
            Contact
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" name="name" variant="outlined" required 
                    value={formData.name} onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone" name="phone" variant="outlined" 
                    value={formData.phone}  onChange={handleChange} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" name="email" type="email" 
                    variant="outlined" required value={formData.email} onChange={handleChange} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Comments" name="message" variant="outlined" 
                    required multiline rows={4} value={formData.message} onChange={handleChange} 
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: isFormValid ? "#00172D" : "#A9A9A9",
                    color: "white",
                    padding: "12px",
                    fontSize: "16px",
                    "&:hover": { backgroundColor: isFormValid ? "#003366" : "#A9A9A9" },
                  }}
                  disabled={!isFormValid}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
    </Card>

    <Dialog open={open}  disableEscapeKeyDown 
      PaperProps={{ onMouseDown: (event) => event.stopPropagation() }}>
        <Success onClose={handleClose} />
    </Dialog>

    </>
  );
};

export default Contact;
