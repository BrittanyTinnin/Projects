import axios from 'axios';

class HelloWorldService {
  executeHelloWorldService1() {
    return axios.get('http://localhost:8080/hello-world');
  }
  executeHelloWorldService2() {
    return axios.get('http://localhost:8080/hello-world-bean');
  }
  executeHelloWorldService3(name) {
    // let username = 'brittcodes'
    // let password = 'awesome'

    // let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);

    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      // {
      //   headers: {
      //     authorization: basicAuthHeader
      //   }
      // }
    );
  }
}

export default new HelloWorldService();
