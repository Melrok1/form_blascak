<template>
  <div class="home">
    <p>Home</p>

    <form class="card inputForm">
      <div class="name">
        <label for="inputName">Meno:</label>
        <input type="text" name="inputName">
      </div>
      <div class="surname">
        <label for="inputSurname">Priezvisko:</label>
        <input type="text" name="inputSurname">
      </div>
      <div class="address">
        <label for="inputAddress">Adresa:</label>
        <input type="text" name="inputAddress">
      </div>
      <div class="comment">
        <label for="inputMessage">Popis podnetu:</label>
        <textarea name="inputMessage" class="materialize-textarea"></textarea>
      </div>
      <div class="picture">
        <label for="inputPicture">Obrázok:</label>
        <input type="file" name="inputPicture">
      </div>


      <button class="waves-effect waves-light btn">Odoslať</button>
    </form>

  </div>
</template>

<script>


export default {
  name: 'Home',
}
</script>







<script>
export default {
  data() {
    return {

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
