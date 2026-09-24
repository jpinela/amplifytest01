import { defineBackend } from '@aws-amplify/backend';


import { firstBucket, secondBucket } from './storage/resource';

defineBackend({
  firstBucket,
  secondBucket
});