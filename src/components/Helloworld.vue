<template>
  <div class="hello" style="margin-top:-60px; width:5; height:5;">
     
<div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
        
        
        <button @click.prevent="doAjax">fetch Data</button>
    </div>
	</div>
</template>