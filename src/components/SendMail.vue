<template>
  <div>
    <h1
      style="
        text-align: center;
        margin: 50px;
        color: white;
        font-size: 50px;
        font-family: 'Pacifico', sans-serif;
      "
    >
      Easy E-Mail Sender
    </h1>
  </div>
  <div class="container">
    <form @submit="send">
      <div>
        <input
          class="form-control"
          type="text"
          placeholder="Seu nome"
          v-model="mail.name"
        />
      </div>
      <div>
        <input
          class="form-control"
          type="email"
          placeholder="E-mail de destino"
          v-model="mail.email"
        />
      </div>
      <div>
        <input
          class="form-control"
          type="text"
          placeholder="Assunto"
          v-model="mail.title"
        />
      </div>
      <div>
        <textarea
          class="form-control"
          type="text"
          placeholder="Mensagem"
          v-model="mail.subject"
        />
      </div>
      <div style="text-align:center; margin-top:20px">
        <button class="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import Mail from "../services/mail";

export default {
  data() {
    return {
      mail: {
        name: "",
        email: "",
        title: "",
        subject: "",
      },
    };
  },

  methods: {
    send(e) {
      Mail.sendMail(this.mail).then((response) => {
        console.log(response);
      });
      this.mail = {
        name: this.mail.name,
        email: "",
        title: "",
        subject: "",
      };
      e.preventDefault();
    },
  },
};
</script>
