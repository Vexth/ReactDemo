const CONFIG = `http://127.0.0.1:3000/`;

const FeathServe = (res) => {
    let url = CONFIG + `${res.url}`;
    let method = res.method ? res.method : 'GET';
    let myHeaders = method === 'GET' ? new Headers() : new Headers({ 'Content-Type': 'application/json' });

    let myInit = {
        method: method,
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    }; 

    if (method === 'POST') {
        myInit.body = JSON.stringify(res.data);
    }

    return fetch(url, myInit).then(res => res).catch((err) => err).then(res => res.json());
}

export const Helloworld = () => {
    let url = `page/helloworld`;
    return FeathServe({ url: url });
}

export const Get = () => {
    let url = `page/get?name=Vexth---get&age=12`;
    return FeathServe({ url: url });
}

export const Post = () => {
    let url = `page/post`;
    let data = { name: 'Vexth---post', age: 26 };
    return FeathServe({ url: url, method: 'POST', data: data });
}

export const remove = () => {
    let url = `page/remove?name=Vexth---get`;
    return FeathServe({ url: url });
}
export const update = () => {
    let url = `page/update`;
    return FeathServe({ url: url });
}
