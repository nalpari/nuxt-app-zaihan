export default (url: string) => {
  return useFetch(url, {
    baseURL: 'http://3.35.18.10:4000',
    onRequest: (context) => {
      const isDev = process.env.NODE_ENV === 'development'
      if (isDev) {
        // 이 부분은 왜 이렇게밖에 못하는지 모르겠는데, 차후 개선이 되면 좋겠네요.
        // 참고: https://github.com/nuxt/framework/issues/2557#issuecomment-1003865620
        // context.options.headers = new Headers(context.options.headers)
        // context.options.headers.append('Authrization', 'Bearer TOKEN_FOR_DEV')
      }
    },
  })
}
