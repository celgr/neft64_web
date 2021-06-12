<template>
    <div>
      <h1> {{ post.name }} </h1>
    </div>
</template>

<script>
import { gql } from 'graphql-request';
export default {
  async asyncData({ $graphcms, params }) {
    const { slug } = params;
    const { post } = await $graphcms.request(
      gql`
        query GetProduct($slug: String) {
          post(where: { slug: $slug }) {
            name
          }
        }
      `,
      {
        slug,
      }
    );

    return { post};
  }
};
</script>