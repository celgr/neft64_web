import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
    'https://api-ap-northeast-1.graphcms.com/v2/ckottml5e9k5o01xlb7198uyy/master'
);

export default (_, inject) => {
    inject('graphcms', graphcmsClient);
};