/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'hello',
  data () {
    return {
      msg: '首页'
    }
  },
  created: function () {
    this.showNavId();
  },
  methods:{
    showNavId: function (){
      this.$emit('showNavId',1)
    }
  }
}