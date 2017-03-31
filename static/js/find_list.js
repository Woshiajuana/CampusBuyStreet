/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'find',
  created: function () {
    this.showTitle();
    this.$nextTick(function () {
      var ele = window.document.querySelector('.container-list');
      if(ele)
        ele.scrollTop = this.$store.state.findStore.position;
    });
  },
  methods:{
    showTitle: function (){
      this.$emit('showTitle','发现');
    },
    rememberScroll: function () {
      var scrollTop = document.querySelector('.container').scrollTop;
      this.$store.commit('remberPositionY',scrollTop);
    }
  }
}
