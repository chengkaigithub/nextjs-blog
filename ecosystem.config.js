module.exports = {
  apps: [{
    name: 'nextjs.blog',
    script: 'next start -p 3001',
    instances: 4,
    max_memory_restart: '500M',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    autorestart: true,
    exec_mode: 'cluster',
    instance_var: 'INSTANCE_ID',
  }],
};
