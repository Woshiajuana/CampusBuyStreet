/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'find',
  created: function () {
    this.showTitle();
  },
  methods:{
    showTitle: function (){
      this.$emit('showTitle','发现');
    },
    rememberScroll: function () {
      var scrollTop = document.querySelector('.container').scrollTop;
      this.$emit('returnScroll',scrollTop)
    }
  }
}
