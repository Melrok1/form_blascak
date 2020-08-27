<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <p>Meno</p>
    <p>{{ listOfComments }}</p> -->
    <div class="messageContainer">
      <div class="card" 
        v-for="comment in listOfComments.slice().reverse()" 
        :key="comment.id"
        @click="commentToggle"
        >
        <p class="date">{{ comment.formatedDate }}</p>
        <h5>{{ comment.firstName }} {{ comment.lastName }} </h5>
        <p>{{ comment.address }}</p>
        <p v-if="showFullComment">{{ comment.comment }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import firestore from '@/firebase/init.js'

export default {
  data() {
    return {
      name: 'Martin',
      showFullComment: false,
      listOfComments: []
    }
  },
  methods: {
    commentToggle() {
      this.showFullComment = !this.showFullComment
    }
  },
  created() {
    firestore.collection('message').get()
    .then(snapshot => {snapshot.forEach(doc => {
      let singleList = doc.data();
      let timeStamp = doc.data().date.seconds * 1000;
      let date = new Date(timeStamp);
      let formatDate = `${date.getDate()} / 
        ${(date.getMonth()+1)} / 
        ${date.getFullYear()} - 
        ${date.getHours()}:${date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes()}`;
      singleList.id = doc.id;
      singleList.formatedDate = formatDate;
      return this.listOfComments.push(singleList);
    })})
  }
}
</script>


<style scoped>

.card {
  position: relative;
  width: 60%;
  padding: 1rem 2rem;
  overflow: hidden;
  margin: 1rem auto;
  cursor: pointer;
}

.card:last-child {
  margin-bottom: 6rem;
}

.card .date {
  position: absolute;
  top:0px;
  left:3px;
  font-size: 0.9rem;
  font-weight: bold;
  color: rgb(63, 63, 63);
}

.card h5{
  font-weight: 800;
}

</style>
