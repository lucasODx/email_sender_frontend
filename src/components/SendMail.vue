<template>
  <div>
    <h1>Easy E-Mail Sender</h1>
  </div>
  <div>
    <form @submit="send">
      <input type="text" placeholder="Seu nome" v-model="mail.name" />
      <input
        type="email"
        placeholder="E-mail de destino"
        v-model="mail.email"
      />
      <input type="text" placeholder="Assunto" v-model="mail.title" />
      <textarea type="text" placeholder="Mensagem" v-model="mail.subject" />
      <button>Enviar</button>
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
        console.log(response)
      })
      e.preventDefault();
    },
  },
};
</script>
