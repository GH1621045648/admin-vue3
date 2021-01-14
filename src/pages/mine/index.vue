<script lang="jsx">
import { defineComponent,ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup(){
    const store = useStore()
    const visibily=ref(false)
    const input = ref('')
    return{
      store,
      visibily,
      input
    }
  },
  render(){
    return(
      <>
      <div>mine</div>
      <el-button type="text" onClick={()=>{
        this.visibily = true
        // this.$test()
      }}>{ this.store.state.base.theme }</el-button>
      <Drwear v-model={this.visibily}></Drwear>
      <input v-model = {this.input}/>
      {this.input}
    </>

    )
  },
});
</script>

<style>
</style>