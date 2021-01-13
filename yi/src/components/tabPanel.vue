<template lang="html">
  <div class="ydc-tabPanel">
    <div>
      <ul>
        <li v-for="data,index in datas" :class="index==cur?'hit':''" @click="cur=index">{{data.title}}</li>
      </ul>
    </div>
    <div class="ydc-panes">
      <div class="ydc-pane" v-for="data,index in datas" :style="{display: index==cur?'block':'none'}">
        <ol class="ydc-pane-list">
          <li v-for="news in data.data">
            <a :href="news.href" target="_blank">{{news.title}} <i v-if="news.isNew">new</i></a>
            <span>{{news.time}}</span>
          </li>
        </ol>
        <Pagination/>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/pagination';

export default {
  name: 'tabPanel',
  data(){
    return {
      cur: 0,
      datas: [
        {title: 'News', data: [
          {id: 2, title: 'This is a test block', isNew: true, href: 'http://www.bing.com', time: 1544537222},
          {id: 4, title: 'This is a test block', isNew: false, href: 'http://www.bing.com', time: 1544537002},
          {id: 8, title: 'This is a test block', isNew: false, href: 'http://www.bing.com', time: 1543537222},
          {id: 15, title: 'This is a test block', isNew: false, href: 'http://www.bing.com', time: 1544536222},
        ]},
        {title: 'Other News', data: [
          {id: 2, title: 'This is a test block', isNew: true, href: 'http://www.bing.com', time: 1544537222},
          {id: 4, title: 'This is a test block', isNew: true, href: 'http://www.bing.com', time: 1544537222},
          {id: 8, title: 'This is a test block', isNew: false, href: 'http://www.bing.com', time: 1544537222},
          {id: 15, title: 'This is a test block', isNew: false, href: 'http://www.bing.com', time: 1544537222},
        ]}
      ]
    }
  },
  components: {Pagination}
}
</script>

<style lang="css" scoped>
</style>
