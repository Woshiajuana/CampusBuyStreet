/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'app',
  data: function () {
      return {
        is_open_menu:false,
        nav_active_id:1
      }
  },
  methods: {
    openMenu: function () {
      this.is_open_menu = !this.is_open_menu;
      console.log(1)
    }
  }
}
