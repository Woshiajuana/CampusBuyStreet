/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'find',
  data () {
    return {
      content_title: this.$route.params.id
    }
  },
  created: function () {
    this.showNavId();
  },
  methods:{
    showNavId: function (){
      this.$emit('showNavId',2)
    },
    returnPage: function () {
      history.go(-1);
    }
  }
}
