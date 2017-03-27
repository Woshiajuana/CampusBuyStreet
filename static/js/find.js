/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'find',
  data () {
    return {
      msg: '发现'
    }
  },
  created: function () {
    this.showNavId();
  },
  methods:{
    showNavId: function (){
      this.$emit('showNavId',2)
    }
  }
}
