function networkFetch(url) {
    return `${url} - Response from server.`
}
const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if(cache.has(url)){
            return `${url} - Response from cache.`
        }else{
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.group('Proxy')
console.log(proxiedFetch('angular.io')); //angular.io - Response from server.
console.log(proxiedFetch('angular.io')); //angular.io - Response from cache.
