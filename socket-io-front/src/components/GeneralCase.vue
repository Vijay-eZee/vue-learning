<template>
  <div class=" outer rounded-md ">
    <div class="flex mt-2">
  <input v-model="namespace"  v-placeholder="{placeholder:'enter namespace ',color:'red',fontStyle: 'oblique'}" class="outline-none focus:border-blue-300 border-2 focus:ring-blue-300 focus:ring-1"/>
   <button-component class="p-2" @click="createNewConne">
     <template v-slot:btnName>connect</template>
   </button-component>
   <button-component class="p-2 bg-blue-300" @click="closeConne">
     <template v-slot:btnName>disconnect</template>
   </button-component>
   </div>
   <div class="flex mt-2">
       <input v-model="message"  v-placeholder="{placeholder:'type message ',color:'gray',fontStyle: 'oblique'}" class="outline-none focus:border-blue-300 border-2 focus:ring-blue-300 focus:ring-1"/>
       <button-component class="p-2" @click="sendMessage(1)">
     <template v-slot:btnName>send & received</template>
   </button-component>
   <button-component class="p-2 bg-blue-300" @click="sendMessage(2)">
     <template v-slot:btnName>broadcast</template>
   </button-component>
   <button-component class="p-2 bg-green-300" @click="sendMessage(3)">
     <template v-slot:btnName>global broadcast</template>
   </button-component>
   </div>
   <div class="flex">
   <div class="w-80 border border-gray-200 mt-2 mr-2">
     <h1>send</h1>
     <br/><pre v-for="(sendMsg,indx) in sentMessages" :key="indx">{{sendMsg}}</pre>
   </div>
   <div class="w-80 border border-gray-200 mt-2">
     <h1 >received</h1>
     <br><p v-for="(receiveMsg,indx) in ReceivedMessages" :key="indx">{{receiveMsg}}</p>
   </div>
   </div>
</div>
</template>
<script>

export default {  
    name:'GeneralCase',
    inject: ['eventListener','sendEvent','connecToServer','disconnectToServer'],
    data(){
      return{
        socket:null,
        namespace:'',
        message:'',
        sentMessages:[],
        ReceivedMessages:[]
      }  
    },
    mounted(){
    
    },
methods:{
  async createNewConne(){
    this.connecToServer(this.namespace)
  },
  closeConne(){
    this.disconnectToServer({
        type: 'connect:close',
      },this.handleDisconnectResponse)
  },
  handleDisconnectResponse(){
 console.log('disconnection response')
 this.eventListener({
        type: 'disconn:ack',
        callback:(message)=>{
          alert(message)
        }
      })
  },
  handleConnectionResponse(){
     console.log('connection response')
     this.eventListener({
        type: 'conn-ack',
        callback:(message)=>{
          alert(message)
        }
      })
      this.receivedMessage()
  },
 
  
//   handleDisconnect(){
// this.sendEvent({
//         type: 'connect-close',
//       })
//   },
  sendMessage(msgType){
    if(this.message){
      let messaageEvent=''
      switch(msgType){
       case 1: messaageEvent='message:loop-back'
       break;
       case 2: messaageEvent='message:broad-cast'
       break;
       case 3: messaageEvent='message:global-broad-cast'
       break;
      }
     this.sendEvent({
       type: messaageEvent,
       data:this.message,
    },()=>{
        alert('Connection yet not created')
        return
      })
    this.sentMessages.push(this.message)
    this.message=''
    }
  },
    
  receivedMessage(){
    this.eventListener({
       type: 'message:loop-back',
       callback:(message)=>{
          console.log(message)
           this.ReceivedMessages.push(message)
        }
    }),
    this.eventListener({
       type: 'message:broad-cast',
       callback:(message)=>{
          console.log(message)
           this.ReceivedMessages.push(message)
        }
    }),
    this.eventListener({
       type: 'message:global-broad-cast',
       callback:(message)=>{
          console.log(message)
           this.ReceivedMessages.push(message)
        }
    })
   
  }

}
}
</script>
