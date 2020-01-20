export default function ({ $axios, redirect }) {
    $axios.onError(error => {
        console.log("##error: ");
        console.log(error);
        /*if(error.response.status === 500) {
            redirect('/sorry')
        }*/
    });

    $axios.onRequest(config => {
        // eslint-disable-next-line no-console
        console.log('SPY: ')
        console.log(config);
        //console.log(process.env.APP_URL);
        //$axios.defaults.baseURL = process.env.APP_URL;
        //$axios.defaults.baseURL = process.env.WEB_API_URL;
        //console.log($axios.defaults.baseURL);
        $axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
        //$axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
    });

    $axios.onResponse(response => {
        console.log('[ RESPONSE ]' + response.request.responseURL, response);
        console.log(response);
        // TODO: If token expires, perform a silent refresh

        return response
    });
}


/*export default function ({ $axios, app, store }) {
    $axios.onRequest(config => {
        if (store.state.authToken) {
            config.headers.common['Authorization'] = store.state.authToken
        }

        if (store.state.token) {
             config.headers.common['Authorization'] = `Bearer ${store.state.token}`
        }
    })
}

export default function ({ $axios, store }) {
 $axios.onRequest((config) => {
      config.headers.common['access-token'] = store.state.user.headers.access_token
      config.headers.common['token-type'] = store.state.user.headers.token_type
      config.headers.common['client'] = store.state.user.headers.client
      config.headers.common['expiry'] = store.state.user.headers.expiry
      config.headers.common['uid'] = store.state.user.headers.uid
 })
}


export default function({ $axios, store, redirect }) {
  console.log('AXIOS PLUGIN LOADED');

  $axios.onRequest(request => {
    console.log('[ REQUEST ]' + request.url)
    if (store.state.sessionStorage.authUser) {
      request.headers.common['Authorization'] = store.state.sessionStorage.authUser.token_type + ' ' + store.state.sessionStorage.authUser.access_token;
    }

    return request
  })

  $axios.onResponse(response => {
    console.log('[ RESPONSE ]' + response.request.responseURL, response)
    // TODO: If token expires, perform a silent refresh

    return response
  })

  $axios.onError(error => {
    console.error('[ ERROR ]', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.state.sessionStorage.authUser = null
      return redirect('/')
    }

    return error
  })
}

*/