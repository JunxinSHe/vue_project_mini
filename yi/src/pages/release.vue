<template lang="html">
  <div class="ydc-release-content">
    <TabPanelRelease :tabs="tabs">
      <template slot="amount">
        <div class="ydc-release-amount">
          <span>
            Today Release：<em>0</em>
            /6 <a href="standard.html" target="_blank">Format</a>
          </span>
        </div>
      </template>


      <template slot="tab1">
        <form :action="SERVER+'api/publish'" method="post" ref="form1">
          <input type="hidden" name="token" :value="token">
          <div class="ydc-release-form-group ">
              <div class="ydc-warning-default">
                  <p>Title must be less than 30 words</p>
              </div>
              <div class="ydc-release-form-group-input">
                  <input type="text" name="title" class="ydc-form-control" placeholder="Please enter your title!" onkeyUp="textLimitCheck(this, 30);">
                  <div class="ydc-form-group-jl">
                      <span id="messageCount">0</span>/30
                  </div>
              </div>
          </div>
          <div class="ydc-release-form-text">
              <textarea name="content" style="width: 100%;">Please Enter Your Text</textarea>
          </div>
          <div class="ydc-form-city">

            <div class="aui-card-form-item">
                <label class="aui-card-form-label">Topic:</label>
                <div class="aui-card-form-input">
                  <select name="catalogs">
                    <option>Internet</option>
                  </select>
                </div>
            </div>
            <div class="aui-card-form-item preview  aui-news">
              <label class="aui-card-form-label">Cover:</label>
              <div class="aui-file-up-img" id="preview_0">
                <img class="" id="imghead_0" border="0" src="../assets/images/icon/noimg.gif">
              </div>
              <div class="aui-file-up-btn clearfix ">
                <div class="idPicFile aui-btn aui-file-new">
                  <input type="file" name="cover" class="file_photo aui-file-new-up" style="margin:0;">
                  <a>Upload Images</a>
                </div>
                <div class="aui-remarks">
                  <p>Image size：800*400 </p>
                </div>
              </div>
            </div>
            <div class="ydc-btn">
              <button type="button" class="btn" @click="publish()">Publish</button>
              <button type="button" class="btn btn-default">Save Draft</button>
            </div>
          </div>
        </form>

      </template>


      <template slot="tab2">
        <div class="ydc-release-form-group ">
            <div class="ydc-warning-default">
                <p>Title must be less than 30 words</p>
            </div>
            <div class="ydc-release-form-group-input clearfix">
                <label class="ydc-form-group-label">Title</label>
                <input style="width:89.999%" type="text" class="ydc-form-control" title="" placeholder="Please enter your text" onkeyUp="textLimitCheck(this, 30);">
                <div class="ydc-form-group-jl">
                    <span id="messageCount1">0</span>/30
                </div>
            </div>
            <div class="ydc-release-form-group-input ydc-release-form-group-ms clearfix">
                <label class="ydc-form-group-label">Description</label>
                <input style="width:89.999%" type="text" class="ydc-form-control" title="" placeholder="Enter your description" onkeyUp="">
                <div class="ydc-form-group-jl">
                    <span id="">0</span>/30
                </div>
            </div>
            <div class="aui-card-form-item preview  aui-news" style="margin-top:20px;">
                <label class="aui-card-form-label">Cover:</label>
                <div class="aui-file-up-img" id="preview_0">
                    <img class="" id="imghead_0" border="0" src="../assets/images/icon/noimg.gif">
                </div>
                <div class="aui-file-up-btn clearfix ">
                    <div class="idPicFile aui-btn aui-file-new">
                        <input type="file" name="file" id="1" class="file_photo aui-file-new-up" style="margin:0;">
                        <a>Upload</a>
                    </div>
                    <div class="aui-remarks">
                        <p>Image Size：800*400 </p>
                    </div>
                </div>
            </div>
            <div class="ydc-btn" style="margin-top:20px;">
                <button class="btn">Publish</button>
                <button class="btn btn-default">Save Draft</button>
            </div>
        </div>
      </template>


      <template slot="tab5655">
        asdfasdfsd
      </template>
    </TabPanelRelease>
  </div>
</template>

<script>
import TabPanelRelease from '@/components/TabPanelRelease';
import {fetch_form} from '@/lib/fetch';
import {SERVER} from '@/config';


export default {
  data(){
    return {
      SERVER,
      token: localStorage.token,
      tabs: [
        {title: 'Publish', slotname: 'tab1'},
        {title: 'Image', slotname: 'tab2'},
        {title: 'Test', slotname: 'tab5655'},
      ],

    }
  },
  components: {TabPanelRelease},
  created(){

  },
  methods:{
    async publish(){
      let json = await fetch_form(this.$refs['form1']);
      console.log(json);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
