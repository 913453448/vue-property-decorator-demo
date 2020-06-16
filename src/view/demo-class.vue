<template>
    <div @click="say()">{{msg}}</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "./component";
import {Prop} from "./view-property-decorator";

@Component
class DemoComponent extends Vue{
    @Prop({type: String,default: 'hello world'})msg!: string;
    say(){
       alert(this.msg);
    }
}
export default DemoComponent;
</script>
