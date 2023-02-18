export const API_NOTIFICATION_MESSAGES = {
    loading : {
        title : 'Loading...',
        message : 'Data is being loaded, Please wait'
    },
    success : {
        title : 'Success',
        message : 'Data successfully loaded.'
    },
    responseFailure : {
        title : 'Error',
        message : 'An error occured while fetching response from  the server, please try again'
    },
    requestFailure : {
        title  : 'Error',
        message : 'An error occured while parsing request data'
    } ,
    networkError : {
        title : 'Error',
        message : 'Unable to connect with the server. Please check the internet connection and try again'
    }
}

export const SERVICE_URLS = {
    userSignup : {url:'/signup', method:'POST'},
    userLogin : {url:'/login', method:'POST'},
    uploadFile : {url:'/file/upload', method:'POST'},
    createPost : {url:'create', method:'POST'},
    getAllPosts : {url: 'posts', method: 'GET', params : true},
    getPostById : {url: 'post', method: 'GET', query: true},
    updatePost : {url: 'update', method: 'PUT', query: true},
    deletePost : {url: 'delete', method: 'DELETE', query: true},
    newComment : {url: '/comment/new', method: 'POST'},
    getComment : {url: 'comments', method: 'GET', query: true},
    deleteComment : {url: 'deleteComment', method: 'DELETE', query: true},
    
}