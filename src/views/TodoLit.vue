<template>
    <div class="pt-8 px-12">
        <div class="p-6">
            <p>Click to mark the task as completed</p>
            <div class="flex mt-8">
                <div class="w-3-4">
         <b-form-input v-model="work" placeholder="Add your work" class="w-3/4"></b-form-input>
                </div>
                <div class="w-1-4">
         <b-button variant="success" class="w-full" >Add</b-button>
                </div>
            </div>
        </div>
        <div class="p-2 mt-4 card bg-ededed" v-for="(item,index) in todolist"
       :key="'item-' + index">
       <div class="flex items-center justify-between">
            <h6 class="text-xl">{{item.work}}</h6>
              <b-icon-dash-circle class="cursor-pointer"></b-icon-dash-circle>
       </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            work:"",
            todolist: [
                {
                    work: "Go to gym",  
                },
                {
                    work: "Go to gym",  
                },
                {
                    work: "Go to gym",  
                },
            ]
        }
    },
}
</script>