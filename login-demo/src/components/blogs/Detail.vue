<template>
  <div>
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
          @click="$router.go(-1)"
        >
          back
        </button>
      </template>
    </Blog>
  </div>
</template>
<script>
import Blog from "./Blog.vue";
import blogs from "../../data/blogs.json";
export default {
  name: "Detail",
  components: {
    Blog,
  },
  data() {
    return {
      myBlogs: blogs,
    };
  },
  computed: {
    blogs() {
      return this.myBlogs.filter((blog) => {
        if (blog.id === Number(this.$route.params.blogId)) {
          return blog;
        }
      });
    },
  },
};
</script>