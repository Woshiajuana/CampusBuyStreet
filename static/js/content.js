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
      this.$emit('showTitle',this.$route.params.id)
    }
  }
}
