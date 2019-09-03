<template>
  <div id="clock">
    <div id="clockbtn">
      <div id="clocktext">
        <div v-show="!isShow">{{ $store.state.name }}您好</div>
        <div v-show="isShow">{{ time }}</div>
      </div>
      <button @click="clockbtn" :disabled="isBegin">10 min</button>
    </div>
    <audio id="music">
      <source src="../assets/audio/clock.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      time: 600,
      isShow: false,
      isBegin: false
    };
  },
  methods: {
    clockbtn() {
      if (this.time == 600) {
        this.isShow = true;
        this.isBegin = true;
        const clock = setInterval(() => {
          if (this.time > 0) {
            this.time -= 1;
          } else {
            this.time = 600;
            this.isShow = false;
            this.isBegin = false;
            document.getElementById("music").play();
            const music = setInterval(() => {
              document.getElementById("music").pause();
              clearInterval(music);
            }, 10000);
            clearInterval(clock);
          }
        }, 1000);
      }
    }
  },
  created() {
    if(localStorage.getItem('name') != null){
      this.$store.commit('setname', localStorage.getItem('name'))
      this.isShowSub = false
    }
  }
};
</script>

<style>
#clock {
  position: relative;
  top: 50%;
  left: 50%;
  height: 200px;
  width: 200px;
  margin-top: -149px;
  margin-left: -100px;
}
#clockbtn button {
  margin: 0 0 0 25px;
  padding: 0;
  height: 150px;
  width: 150px;
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: #ee8033;
  font-size: 20px;
  color: white;
}
#clockbtn button:disabled{
  background-color: #87CEFA;
}
#clocktext {
  margin: 0;
  padding: 0;
  height: 50px;
  width: 200px;
  text-align: center;
  font-size: 40px;
}
</style>