
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7ZZWOP5Z.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7WNS3MN.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TUZKPJBL.js"
    ],
    "route": "/services"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FZV6UMP2.js"
    ],
    "route": "/our-work"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I6M4ORD7.js"
    ],
    "route": "/reviews"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TMNOZ6R5.js",
      "chunk-CJPLD6EO.js"
    ],
    "route": "/service-areas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O2GTRAYW.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7517, hash: 'b7194dcbb4eb28c59166f4bb1676c22722b5afa66ae3a498767d8888ed7f9b37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3543, hash: '97477ec985a1bab653f6d7a79dfefb0a7b890a9518f7ad2aaf1706ca6f10550c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82512, hash: '4632e2a81d4c99e7e2316d4eabc872a6abfb3e9eda54d30a12c5fddf94f887db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 84939, hash: '426a3bc0210f74a38fa2f191823208535d275ce68e48bb3bb67d8b86994858e9', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 83855, hash: '36cc2931906f141349f40d037f8eb6df406473975e9696dcd204be6f86f3db06', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 77989, hash: 'd337ce1acba977b8c8ae973eb02af48f141cdbc257192c5057891211c92dfe79', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'reviews/index.html': {size: 96178, hash: '56aa6588547ad0fdc1bd5e57c93aa0e10260b87b36a4a7d43349328fac8a45a4', text: () => import('./assets-chunks/reviews_index_html.mjs').then(m => m.default)},
    'our-work/index.html': {size: 94595, hash: '3edf81d35526e23926e9627b67d60ef3fd8bf0a9c5f72264c8b526de6f085c75', text: () => import('./assets-chunks/our-work_index_html.mjs').then(m => m.default)},
    'service-areas/index.html': {size: 101873, hash: '581a921911e0d4c9ab3238ba2fb97c7942337fed5a7f6d3ec9fe09ce3e89af94', text: () => import('./assets-chunks/service-areas_index_html.mjs').then(m => m.default)},
    'styles-TUL6JSMD.css': {size: 11660, hash: 'YbWRMBDBbzw', text: () => import('./assets-chunks/styles-TUL6JSMD_css.mjs').then(m => m.default)}
  },
};
