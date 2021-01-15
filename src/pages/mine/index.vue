<script lang="jsx">
import { defineComponent,ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup(){
    const store = useStore()
    const visibily=ref(false)
    const highlight = {
      color:'yellow'
    }
    return{
      store,
      visibily,
      highlight
    }
  },
  render(){
    return(
      <>
      <div>mine</div>
      <el-button type="text" onClick={()=>{this.visibily = true}}>{ this.store.state.base.theme }</el-button>
      <Drwear v-model={this.visibily}></Drwear>
      <span v-highlight={this.highlight}>{Number(this.visibily)}</span>
    </>

    )
  },
});
</script>

<style>
</style>