const devProxy = {
  '/api': {
    target: '',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
  },
};

export default devProxy;
