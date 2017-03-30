/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'news',
  data () {
    return {
      content_title: '消息'
    }
  },
  created: function () {
    this.showNavId();
  },
  methods:{
    showNavId: function (){
      this.$emit('showNavId',3)
    }
  }
}
