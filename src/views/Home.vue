<template>
  <div class="home">
    <h4>Podanie podnetu:</h4>
    
    <form class="card inputForm" @submit.prevent="addDataToFirestore">
      <div class="name">
        <label for="inputName">Meno:</label>
        <input type="text" name="inputName" v-model="firstName" required>
      </div>
      <div class="surname">
        <label for="inputSurname">Priezvisko:</label>
        <input type="text" name="inputSurname" v-model="lastName" required>
      </div>
      <div class="address">
        <label for="inputAddress">Adresa:</label>
        <input type="text" name="inputAddress" v-model="address" required>
      </div>
      <div class="comment">
        <label for="inputMessage">Popis podnetu:</label>
        <textarea name="inputMessage" class="materialize-textarea" v-model="comment"></textarea>
      </div>
      <div class="picture">
        <label for="inputPicture">Obrázok:</label>
        <input type="file" name="inputPicture" @change="onFileSelected" accept="image/*">
      </div>

      <button class="waves-effect waves-light btn">Odoslať</button>
    </form>

  </div>
</template>

<script>
import {fb, db} from '@/firebase/init.js'

export default {
  name: 'Home',
  data() {
    return {
      firstName: '',
      lastName: '',
      address: '',
      comment: '',
      image: null,
      content: false,
      URLImage: ''
    }
  },
  methods: {
    onFileSelected(event) {
      this.image = event.target.files[0];

      let storageImage = fb.storage().ref('images/' + this.image.name);
      let uploadTask = storageImage.put(this.image);

      uploadTask.on('state_changed', (snapshot) => {
        console.log(snapshot)
      },(error) => {
        console.log(error)
      },() => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then((downloadURL) => {
            this.URLImage = downloadURL;
            console.log('PARADAAAAA: ', this.URLImage);
          })
      });
    },
    addDataToFirestore() {
      console.log(this.computedData)
      db.collection('message')
        .doc(Number(this.computedData.date).toString())
        .set(this.computedData)
        .then(() => {
          console.log('ok')
          console.log(Number(this.computedData.date).toString())
        })
        .catch((err) => console.log(err))
    },
  },
  computed: {
    computedData() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        comment: this.comment,
        date: new Date(),
        content: this.content,
        URLImage: this.URLImage
      }
    }
  }
}
</script>


<style scoped>

.inputForm {
  width: 50%;
  margin: 0 auto;
  padding: 1rem 5rem;
}

.inputForm button {
  margin-top: 4rem;
}

.comment {
  min-height: 100px;
}

.materialize-textarea {
  height: 150px;
}

.picture label{
  display: block;
}

</style>
