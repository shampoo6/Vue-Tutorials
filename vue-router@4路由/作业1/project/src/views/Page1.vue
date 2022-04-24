<script setup>
import {reactive} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const arts = reactive([
  {text: '文章一', active: true, url: '/page1/art1'},
  {text: '文章二', active: false, url: '/page1/art2'},
  {text: '文章三', active: false, url: '/page1/art3'},
]);

function switchArt(i) {
  let url;
  arts.forEach((art, index) => {
    art.active = index === i;
    if (index === i) url = art.url;
  });
  router.push(url);
}
</script>

<template>
  <div class="h-100 d-flex flex-column">
    <h1>页面1</h1>
    <div class="d-flex flex-row border flex-grow-1">
      <div class="flex-shrink-0 border-end" style="width: 250px">
        <ul class="list-group">
          <li v-for="(art, i) in arts" :key="art.url" :class="'list-group-item ' + (art.active? 'active': '')"
              @click="switchArt(i)"
          >
            {{ art.text }}
          </li>
        </ul>
      </div>
      <div class="flex-grow-1 p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>