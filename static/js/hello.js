/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'hello',
  created: function () {
    this.showNavId();
  },
  methods:{
    showNavId: function (){
      this.$emit('showNavId',1)
    }
  }
}
