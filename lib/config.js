let DEV
try {
  DEV = JSON.parse(__DEV__)
} catch (e) {}

global.__config__ = {
  __ENV__: !DEV ? 'production' : 'development',
  __DEV__: DEV
}
