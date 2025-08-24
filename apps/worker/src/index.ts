import { Worker } from 'bullmq';

export function createWorker() {
  const worker = new Worker(
    'scrape',
    async job => {
      console.log('processing job', job.id);
    },
    { connection: { url: process.env.REDIS_URL || 'redis://localhost:6379' } }
  );
  return worker;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  createWorker();
}
