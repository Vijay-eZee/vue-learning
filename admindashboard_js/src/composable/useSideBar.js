import { computed, reactive} from 'vue'

const state= reactive({
    sideMenu:false
})
const history =[]
history.push(state)
function toggleSideMenu(val){
   state.sideMenu = val
}
const isSideMenuOpen = computed(()=>state.sideMenu)
export{
    history,
    isSideMenuOpen,
    toggleSideMenu
}
