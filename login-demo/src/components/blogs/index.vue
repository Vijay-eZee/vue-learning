<template>
  <div class="flex justify-center">
    <div class="flex flex-wrap bg-blue-100 w-1/2 p-4">
      <Blog v-for="(blog, indx) in blogs" :key="indx">
        <template v-slot:id>
          <p class="text-white p-2">{{ blog.id }}</p>
        </template>
        <template v-slot:title>
          <p class="text-white p-2">Title: {{ blog.title }}</p>
        </template>
        <template v-slot:btn>
          <button
            class="bg-green-200 border-2 rounded-full py-1 px-2"
            @click="redirectToDetail(blog.id)"
          >
            view
          </button>
        </template>
      </Blog>

      {{ myJson }}
    </div>
  </div>
</template>
<script>
import Blog from "./Blog.vue";
import blogsData from "../../data/blogs.json";
export default {
  name: "index",
  components: {
    Blog,
  },
  data() {
    return {
      blogs: blogsData,
    };
  },
  methods: {
    redirectToDetail(blogId) {
      this.$router.push({ name: "detail", params: { blogId: blogId } });
    },
  },
};
</script>